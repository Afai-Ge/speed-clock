import React, { useState } from "react";
import { useTime } from "../context/TimeContext";
import SpeedSelector from "./SpeedSelector";

const Controlpanel: React.FC = () => {
  const { isRunning, toggleRunning, reset, speedRatio } = useTime();
  const [showSpeedInput, setShowSpeedInput] = useState(false);

  const getStatusClass = () => (isRunning ? "status-running" : "status-paused");
  const getStatusText = () => (isRunning ? "运行中" : "已暂停");

  return (
    <div className="control-panel">
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <span className={`status-indicator ${getStatusClass()}`}>
          <span className="status-dot"></span>
          {getStatusText()}
        </span>
      </div>

      <SpeedSelector />

      <div className="controls">
        <button
          className={isRunning ? "btn-secondary" : "btn-success"}
          onClick={toggleRunning}
        >
          {isRunning ? "⏸️ 暂停" : "▶️ 继续"}
        </button>

        <button
          className="btn-primary"
          onClick={() => setShowSpeedInput(!showSpeedInput)}
        >
          ⚙️ 速度设置
        </button>

        <button className="btn-secondary" onClick={reset}>
          🔄 重置
        </button>
      </div>

      {showSpeedInput && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <small style={{ color: "#666" }}>
            当前速度比: {speedRatio.toFixed(6)}
            <br />
            (快表每秒 = 标准时间 × {speedRatio.toFixed(6)})
          </small>
        </div>
      )}
    </div>
  );
};

export default Controlpanel;