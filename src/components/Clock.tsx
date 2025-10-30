import React from "react";
import {useTime} from "../context/TimeContext";

interface ClockProps {
    type: 'standard' | 'fast';
}

const Clock: React.FC<ClockProps> = ({type}) => {
    const {standardTime, fastTime} = useTime();
    const time = type === 'standard' ? standardTime : fastTime;

    const getClockTitle = () => type === 'standard' ? '🕐 标准时间' : '⚡ 快表时间';    
    const getTimeColor = () => type === 'standard' ? '#4CAF50' : '#FF6B6B';

    return (
        <div className={`clock ${type}`}>
            <h2>{getClockTitle()}</h2>
            <div className="time-display">
                <span className="time" style={{color: getTimeColor()}}>
                    {time.format("HH:mm:ss")}
                </span>
            </div>
            <span className="date">
                {time.format("YYYY年MM月DD日")}
            </span>
            <div className="weekday">
                {time.format("dddd")}
            </div>
        </div>
    );
};

export default Clock;