# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 React + TypeScript + Vite 的差速时钟比对应用,用于显示和比较标准时钟与快表的时间差异。

## 常用命令

### 开发
```bash
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本 (包含 TypeScript 编译)
npm run lint         # 运行 ESLint 检查
npm run preview      # 预览生产构建
npm run deploy       # 部署到 GitHub Pages
```

### 构建说明
- 使用 `rolldown-vite` 替代标准 Vite (配置在 package.json overrides 中)
- base 路径设置为 `/speed-clock/` (用于 GitHub Pages 部署)

## 核心架构

### 1. 时间状态管理 (Context + localStorage)

**TimeContext** ([src/context/TimeContext.tsx](src/context/TimeContext.tsx)) 是应用的核心状态管理:

- **双时钟系统**:
  - `standardTime`: 标准时钟 (实时系统时间)
  - `fastTime`: 快表时钟 (与标准时钟以相同速度流逝,但可以手动调整时间)

- **状态持久化**:
  - 使用 `useLocalStorage` hook 自动保存状态到 localStorage
  - 持久化数据: `fastTime`, `isRunning`, `lastSavedTime`
  - 页面刷新后自动恢复状态,包括时间补偿计算
  - 页面关闭时自动保存 (beforeunload 事件)

- **时间计算**:
  - 使用 `requestAnimationFrame` 实现高精度时间更新
  - 两个时钟以相同速度流逝(1:1),快表不会自动加速
  - 页面恢复时会根据保存的时间和当前时间计算偏移量

- **关键方法**:
  - `setFastTimeManually`: 手动设置快表时间
  - `adjustFastTime`: 按单位调整快表时间 (秒/分/时/天)
  - `syncToStandardTime`: 将快表同步到标准时间
  - `toggleRunning`: 暂停/恢复时钟运行
  - `reset`: 重置所有状态

### 2. 自定义 Hooks

**useLocalStorage** ([src/hooks/useLocalStorage.ts](src/hooks/useLocalStorage.ts)):
- 泛型 hook,支持自定义序列化/反序列化
- 监听 storage 事件实现多标签页同步
- 处理 SSR 场景 (window undefined)

### 3. 组件结构 (使用 styled-components)

- **Clock**: 精美的模拟表盘,带动态指针和刻度
- **TimeDifference**: 显示时间差异卡片
- **ContralPanel**: 弹窗式控制面板 + 浮动控制按钮
- **ManualAdjustment**: 手动调整快表时间

所有组件通过 `useTime()` hook 访问 TimeContext。

## 技术栈

- **React 19**: 使用函数组件和 Hooks
- **TypeScript**: 严格类型检查
- **Vite/Rolldown**: 构建工具
- **dayjs**: 时间处理库
- **styled-components**: CSS-in-JS
- **localStorage**: 状态持久化

## 开发注意事项

### 时间处理
- 所有时间操作使用 dayjs,类型为 `Dayjs`
- 持久化时必须转换为 ISO 字符串
- 恢复状态时需要计算时间补偿 (见 TimeContext 初始化逻辑)

### 状态管理
- 关键状态变更 (手动调整时间、切换运行状态) 会立即保存
- 一般状态变更使用防抖保存 (1秒延迟)
- 页面关闭时触发 beforeunload 事件自动保存
- `lastUpdateRef` 使用 ref 追踪最后更新时间,避免不必要的重渲染

### 性能优化
- 使用 `requestAnimationFrame` 而非 `setInterval`
- 使用 `useCallback` 缓存回调函数
- 使用 ref 管理不需要触发渲染的状态
