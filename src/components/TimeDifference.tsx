import React from "react";
import { useTime } from "../context/TimeContext";

const TimeDifference: React.FC = () => {
  const { timeDifference, totalDifference } = useTime();

  const formatDifference = (seconds: number): string => {
    const absSeconds = Math.abs(seconds);
    const minutes = Math.floor(absSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days}天 ${hours % 24}小时 ${minutes % 60}分钟`;
    } else if (hours > 0) {
      return `${hours}小时 ${minutes % 60}分钟 ${absSeconds % 60}秒`;
    } else if (minutes > 0) {
      return `${minutes}分钟 ${absSeconds % 60}秒`;
    } else {
      return `${absSeconds}秒`;
    }
  };

  const getDifferenceSign = (seconds: number): string =>
    seconds >= 0 ? "+" : "-";

  return (
    <div className="time-difference">
      <h2>时差</h2>
      <div className="difference-item">
        <span>当前时间差: </span>
        <span
          className={`difference-value ${
            timeDifference >= 0 ? "positive" : "negative"
          }`}
        >
          {getDifferenceSign(timeDifference)}
          {formatDifference(timeDifference)}
        </span>
      </div>
    </div>
  );
};

export default TimeDifference;
