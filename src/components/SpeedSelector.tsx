import React from "react";
import { useTime } from "../context/TimeContext";

const SpeedSelector: React.FC = () => {
  const { speedRatio, setSpeedRatio } = useTime();

  const presetSpeeds = [
    { label: "极慢", value: 1.0001 },
    { label: "稍快", value: 1.001 },
    { label: "较快", value: 1.01 },
    { label: "快速", value: 1.1 },
    { label: "极快", value: 2 },
  ];

  const handleCustomSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setSpeedRatio(value);
    }
  };

  const getSpeedDescription = () => {
    const precentage = ((speedRatio - 1) * 100).toFixed(4);
    return `快了${precentage}%`;
  }

  return (
    <div className="speed-selector">
      <label>速度比例:</label>
      
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {presetSpeeds.map((speed) => (
          <button
            key={speed.value}
            onClick={() => setSpeedRatio(speed.value)}
            style={{
              padding: '8px 16px',
              border: '2px solid',
              borderColor: speedRatio === speed.value ? '#667eea' : '#ddd',
              backgroundColor: speedRatio === speed.value ? '#667eea' : 'white',
              color: speedRatio === speed.value ? 'white' : '#333',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            {speed.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>自定义:</span>
        <input
          type="number"
          step="0.0001"
          min="0.1"
          max="10"
          value={speedRatio}
          onChange={handleCustomSpeedChange}
          className="speed-input"
        />
      </div>

      <div style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}>
        <small style={{ color: '#666' }}>
          {getSpeedDescription()}
        </small>
      </div>
    </div>
  )

};

export default SpeedSelector;
