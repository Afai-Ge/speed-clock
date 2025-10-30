import React, { createContext, useContext, useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useLocalStorage } from '../hooks/useLocalStorage';

interface TimeContextType {
  standardTime: Dayjs;
  fastTime: Dayjs;
  timeDifference: number;
  totalDifference: number;
  isRunning: boolean;
  speedRatio: number;
  setSpeedRatio: (ratio: number) => void;
  toggleRunning: () => void;
  reset: () => void;
}

const TimeContext = createContext<TimeContextType | undefined>(undefined);

export const TimeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [standardTime, setStandardTime] = useState(dayjs());
  const [fastTime, setFastTime] = useState(dayjs());
  const [totalDifference, setTotalDifference] = useLocalStorage("total-difference", 0);
  const [isRunning, setIsRunning] = useLocalStorage("clock-running", true);
  const [speedRatio, setSpeedRatio] = useLocalStorage("clock-speed-ratio", 1.0001);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const updateTime = (currentTime: number) => {
      const delta = currentTime - lastTime;
      if (isRunning && delta > 1000) {
        const newStandardTime = dayjs();
        const elapsedSeconds = delta / 1000;

        setStandardTime(newStandardTime);
        setFastTime((prev) => prev.add(elapsedSeconds * speedRatio, "second"));

        // const currentDiff = fastTime.diff(newStandardTime, "second", true);
        setTotalDifference((prev) => prev + elapsedSeconds * (speedRatio - 1));

        lastTime = currentTime;
      }

      animationFrameId = requestAnimationFrame(updateTime);
    };

    animationFrameId = requestAnimationFrame(updateTime);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isRunning, speedRatio]);

  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
    setStandardTime(dayjs());
    setFastTime(dayjs());
    setTotalDifference(0);
  };

  const timeDifference = fastTime.diff(standardTime, "second");

  return (
    <TimeContext.Provider
      value={{
        standardTime,
        fastTime,
        timeDifference,
        totalDifference,
        isRunning,
        speedRatio,
        setSpeedRatio,
        toggleRunning,
        reset,
      }}
    >
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
