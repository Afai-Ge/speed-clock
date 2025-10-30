// context/TimeContext.tsx
import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useLocalStorage } from '../hooks/useLocalStorage';

// 定义持久化状态的数据结构
interface PersistentState {
  fastTime: string; // ISO 字符串格式
  isRunning: boolean;
  lastSavedTime: string; // 用于计算页面关闭时长
}

interface TimeContextType {
  standardTime: Dayjs;
  fastTime: Dayjs;
  timeDifference: number;
  isRunning: boolean;
  toggleRunning: () => void;
  reset: () => void;
  setFastTimeManually: (newTime: Dayjs) => void;
  adjustFastTime: (amount: number, unit: dayjs.ManipulateType) => void;
  syncToStandardTime: () => void;
}

const TimeContext = createContext<TimeContextType | undefined>(undefined);

export const TimeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 持久化状态
  const [persistentState, setPersistentState] = useLocalStorage<PersistentState>(
    'speed-clock-state',
    {
      fastTime: dayjs().toISOString(),
      isRunning: true,
      lastSavedTime: dayjs().toISOString(),
    }
  );

  // 计算初始快表时间 - 如果之前是运行状态,需要补偿时间差
  const getInitialFastTime = (): Dayjs => {
    const savedFastTime = dayjs(persistentState.fastTime);
    const savedTime = dayjs(persistentState.lastSavedTime);
    const now = dayjs();
    const timeSinceSave = now.diff(savedTime, 'millisecond');

    if (persistentState.isRunning && timeSinceSave > 0) {
      // 如果之前是运行状态,快表也应该继续流逝
      return savedFastTime.add(timeSinceSave, 'millisecond');
    }

    return savedFastTime;
  };

  // 实时状态
  const [standardTime, setStandardTime] = useState<Dayjs>(dayjs());
  const [fastTime, setFastTime] = useState<Dayjs>(getInitialFastTime);
  const [isRunning, setIsRunning] = useState(persistentState.isRunning);

  const lastUpdateRef = useRef<number>(Date.now());

  // 自动保存状态（防抖）
  const saveStateDebounced = useCallback(() => {
    const timeoutId = setTimeout(() => {
      const newState: PersistentState = {
        fastTime: fastTime.toISOString(),
        isRunning,
        lastSavedTime: dayjs().toISOString(),
      };
      setPersistentState(newState);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [fastTime, isRunning, setPersistentState]);

  // 立即保存状态（用于重要操作）
  const saveStateImmediately = useCallback(() => {
    const newState: PersistentState = {
      fastTime: fastTime.toISOString(),
      isRunning,
      lastSavedTime: dayjs().toISOString(),
    };
    setPersistentState(newState);
  }, [fastTime, isRunning, setPersistentState]);

  // 时间更新逻辑 - 两个时钟以相同速度流逝
  useEffect(() => {
    let animationFrameId: number;

    const updateTime = () => {
      if (isRunning) {
        const now = Date.now();
        const delta = now - lastUpdateRef.current;

        if (delta > 0) {
          // 标准时间直接使用当前时间
          setStandardTime(dayjs());

          // 快表时间也按照真实时间流逝
          setFastTime(prev => dayjs(prev.valueOf() + delta));

          lastUpdateRef.current = now;
        }
      }

      animationFrameId = requestAnimationFrame(updateTime);
    };

    lastUpdateRef.current = Date.now();
    animationFrameId = requestAnimationFrame(updateTime);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isRunning]);

  // 防抖保存
  useEffect(() => {
    const cleanup = saveStateDebounced();
    return cleanup;
  }, [saveStateDebounced]);

  // 页面关闭时保存
  useEffect(() => {
    const handleBeforeUnload = () => {
      saveStateImmediately();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [saveStateImmediately]);

  // 手动调整快表时间
  const setFastTimeManually = useCallback((newTime: Dayjs) => {
    setFastTime(newTime);
    lastUpdateRef.current = Date.now();

    // 立即保存
    const newState: PersistentState = {
      fastTime: newTime.toISOString(),
      isRunning,
      lastSavedTime: dayjs().toISOString(),
    };
    setPersistentState(newState);
  }, [isRunning, setPersistentState]);

  // 调整快表时间(增减)
  const adjustFastTime = useCallback((amount: number, unit: dayjs.ManipulateType) => {
    const newFastTime = fastTime.add(amount, unit);
    setFastTimeManually(newFastTime);
  }, [fastTime, setFastTimeManually]);

  // 同步到标准时间
  const syncToStandardTime = useCallback(() => {
    setFastTimeManually(dayjs());
  }, [setFastTimeManually]);

  // 切换运行状态
  const toggleRunning = useCallback(() => {
    const newRunningState = !isRunning;
    setIsRunning(newRunningState);
    lastUpdateRef.current = Date.now();

    // 立即保存
    const newState: PersistentState = {
      fastTime: fastTime.toISOString(),
      isRunning: newRunningState,
      lastSavedTime: dayjs().toISOString(),
    };
    setPersistentState(newState);
  }, [isRunning, fastTime, setPersistentState]);

  // 重置
  const reset = useCallback(() => {
    const now = dayjs();
    setStandardTime(now);
    setFastTime(now);
    setIsRunning(true);
    lastUpdateRef.current = Date.now();

    // 立即保存
    const newState: PersistentState = {
      fastTime: now.toISOString(),
      isRunning: true,
      lastSavedTime: now.toISOString(),
    };
    setPersistentState(newState);
  }, [setPersistentState]);

  // 计算时间差(秒)
  const timeDifference = fastTime.diff(standardTime, 'second');

  return (
    <TimeContext.Provider value={{
      standardTime,
      fastTime,
      timeDifference,
      isRunning,
      toggleRunning,
      reset,
      setFastTimeManually,
      adjustFastTime,
      syncToStandardTime,
    }}>
      {children}
    </TimeContext.Provider>
  );
};

export const useTime = (): TimeContextType => {
  const context = useContext(TimeContext);
  if (context === undefined) {
    throw new Error('useTime must be used within a TimeProvider');
  }
  return context;
};
