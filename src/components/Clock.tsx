import React, { useState } from "react";
import { useTime } from "../context/TimeContext";
import styled, { keyframes } from "styled-components";

interface ClockProps {
  type: "standard" | "fast";
}

const Clock: React.FC<ClockProps> = ({ type }) => {
  const { standardTime, fastTime } = useTime();
  const time = type === "standard" ? standardTime : fastTime;
  const [isCompactMode, setIsCompactMode] = useState(false);

  const getClockTitle = () =>
    type === "standard" ? "标准时间" : "快表时间";
  const getClockIcon = () => (type === "standard" ? "🕐" : "⚡");

  // 计算指针角度
  const hours = time.hour() % 12;
  const minutes = time.minute();
  const seconds = time.second();

  const secondAngle = (seconds * 6) - 90; // 每秒6度
  const minuteAngle = (minutes * 6 + seconds * 0.1) - 90;
  const hourAngle = (hours * 30 + minutes * 0.5) - 90;

  // 12个小时数字
  const hourNumbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <ClockContainer $type={type}>
      <ClockHeader>
        <TitleWrapper>
          <ClockIcon>{getClockIcon()}</ClockIcon>
          <ClockTitle>{getClockTitle()}</ClockTitle>
        </TitleWrapper>
        <ModeToggleButton
          onClick={() => setIsCompactMode(!isCompactMode)}
          $type={type}
          title={isCompactMode ? "切换到详情模式" : "切换到简洁模式"}
        >
          {/* <img src="/speed-clock/icons/suofang.png" alt="缩放" /> */}
          <ModeIcon src="/speed-clock/icons/suofang.png" alt="缩放"></ModeIcon>
        </ModeToggleButton>
      </ClockHeader>

      <ClockFace $type={type}>
        {/* 12个小时数字 */}
        {hourNumbers.map((num, i) => (
          <HourNumber key={num} $index={i}>
            {num}
          </HourNumber>
        ))}

        {/* 时钟刻度 - 主刻度 */}
        {[...Array(12)].map((_, i) => (
          <TickMark key={i} $index={i} $isHour={true} />
        ))}

        {/* 时钟刻度 - 次刻度(跳过主刻度位置) */}
        {[...Array(60)].map((_, i) => {
          if (i % 5 !== 0) {
            return <TickMark key={`min-${i}`} $index={i} $isHour={false} />;
          }
          return null;
        })}

        {/* 时针 */}
        <Hand $angle={hourAngle} $type="hour" $clockType={type} />
        {/* 分针 */}
        <Hand $angle={minuteAngle} $type="minute" $clockType={type} />
        {/* 秒针 */}
        <Hand $angle={secondAngle} $type="second" $clockType={type} />

        {/* 中心圆点 */}
        <CenterDot $type={type} />
      </ClockFace>

      <TimeInfo $isCompact={isCompactMode}>
        <DigitalTime $type={type}>{time.format("HH:mm:ss")}</DigitalTime>
        {!isCompactMode && (
          <>
            <DateInfo>{time.format("YYYY年MM月DD日")}</DateInfo>
            <Weekday>{time.format("dddd")}</Weekday>
          </>
        )}
      </TimeInfo>
    </ClockContainer>
  );
};

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ClockContainer = styled.div<{ $type: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: var(--card-shadow);
  border: 2px solid
    ${(props) =>
      props.$type === "standard"
        ? "rgba(78, 205, 196, 0.3)"
        : "rgba(255, 107, 129, 0.3)"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 280px;

  &:hover {
    // transform: translateY(-8px) scale(1.02);
    box-shadow: 0 16px 48px rgba(31, 38, 135, 0.3);
    border-color: ${(props) =>
      props.$type === "standard"
        ? "rgba(78, 205, 196, 0.6)"
        : "rgba(255, 107, 129, 0.6)"};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.2rem;
    min-width: 240px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    gap: 1rem;
    min-width: 200px;
    border-radius: 16px;
  }
`;

const ClockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ClockIcon = styled.span`
  font-size: 1.8rem;
  animation: ${pulse} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const ClockTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ModeToggleButton = styled.div<{ $type: string }>`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.$type === "standard"
        ? "rgba(78, 205, 196, 0.4)"
        : "rgba(255, 107, 129, 0.4)"};
  background: ${(props) =>
      props.$type === "standard"
        ? "rgba(78, 205, 196, 0.4)"
        : "rgba(255, 107, 129, 0.4)"};
  // background: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${(props) =>
      props.$type === "standard"
        ? "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)"
        : "linear-gradient(135deg, #ff6b81 0%, #ff8fa3 100%)"};
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 50%;
  }

  &:hover {
    // transform: scale(1.15) rotate(15deg);
    border-color: ${(props) =>
      props.$type === "standard" ? "#4ecdc4" : "#ff6b81"};
    box-shadow: 0 4px 15px
      ${(props) =>
        props.$type === "standard"
          ? "rgba(78, 205, 196, 0.4)"
          : "rgba(255, 107, 129, 0.4)"};

    &::before {
      opacity: 0.2;
    }
  }

  &:active {
    // transform: scale(1.05);
    animation: ${rotate} 0.6s ease;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }
`;

const ModeIcon = styled.img`
  width: 30px;

  @media (max-width: 768px) {
    width: 24px;
  }

  @media (max-width: 480px) {
    width: 20px;
  }
`;

const ClockFace = styled.div<{ $type: string }>`
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: ${(props) =>
    props.$type === "standard"
      ? "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)"
      : "linear-gradient(135deg, #ff6b81 0%, #ff8fa3 100%)"};
  box-shadow: 0 8px 25px
      ${(props) =>
        props.$type === "standard"
          ? "rgba(78, 205, 196, 0.4)"
          : "rgba(255, 107, 129, 0.4)"},
    inset 0 4px 15px rgba(255, 255, 255, 0.3),
    inset 0 -4px 15px rgba(0, 0, 0, 0.1);
  border: 4px solid white;
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    border: 3px solid white;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

// 12个小时数字
const HourNumber = styled.div<{ $index: number }>`
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%)
    rotate(${(props) => props.$index * 30}deg)
    translateY(-80px)
    rotate(${(props) => -props.$index * 30}deg);
  z-index: 2;
  user-select: none;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    font-size: 0.85rem;
    transform: translate(-50%, -50%)
      rotate(${(props) => props.$index * 30}deg)
      translateY(-65px)
      rotate(${(props) => -props.$index * 30}deg);
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    font-size: 0.75rem;
    transform: translate(-50%, -50%)
      rotate(${(props) => props.$index * 30}deg)
      translateY(-55px)
      rotate(${(props) => -props.$index * 30}deg);
  }
`;

const TickMark = styled.div<{ $index: number; $isHour: boolean }>`
  position: absolute;
  width: ${(props) => (props.$isHour ? "3px" : "1.5px")};
  height: ${(props) => (props.$isHour ? "14px" : "8px")};
  background: ${(props) =>
    props.$isHour ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.5)"};
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%)
    rotate(${(props) => props.$index * (props.$isHour ? 30 : 6)}deg)
    translateY(-100px);
  border-radius: 3px;
  z-index: 1;
  box-shadow: ${(props) =>
    props.$isHour ? "0 1px 3px rgba(0, 0, 0, 0.2)" : "none"};

  @media (max-width: 768px) {
    width: ${(props) => (props.$isHour ? "2.5px" : "1.2px")};
    height: ${(props) => (props.$isHour ? "12px" : "6px")};
    transform: translate(-50%, -50%)
      rotate(${(props) => props.$index * (props.$isHour ? 30 : 6)}deg)
      translateY(-82px);
  }

  @media (max-width: 480px) {
    width: ${(props) => (props.$isHour ? "2px" : "1px")};
    height: ${(props) => (props.$isHour ? "10px" : "5px")};
    transform: translate(-50%, -50%)
      rotate(${(props) => props.$index * (props.$isHour ? 30 : 6)}deg)
      translateY(-68px);
  }
`;

const Hand = styled.div<{
  $angle: number;
  $type: "hour" | "minute" | "second";
  $clockType: string;
}>`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform-origin: bottom center;
  transform: translateX(-50%) rotate(${(props) => props.$angle}deg);
  z-index: ${(props) => (props.$type === "second" ? 4 : props.$type === "minute" ? 3 : 2)};
  border-radius: 10px;
  transition: ${(props) =>
    props.$type === "second" ? "none" : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"};

  ${(props) => {
    if (props.$type === "hour") {
      return `
        width: 7px;
        height: 60px;
        background: linear-gradient(to top, white, rgba(255, 255, 255, 0.8));
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
      `;
    } else if (props.$type === "minute") {
      return `
        width: 5px;
        height: 85px;
        background: linear-gradient(to top, white, rgba(255, 255, 255, 0.9));
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      `;
    } else {
      return `
        width: 2.5px;
        height: 95px;
        background: ${props.$clockType === "standard" ? "#ffe66d" : "#ffeb3b"};
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      `;
    }
  }}

  @media (max-width: 768px) {
    ${(props) => {
      if (props.$type === "hour") {
        return `
          width: 6px;
          height: 49px;
        `;
      } else if (props.$type === "minute") {
        return `
          width: 4px;
          height: 69px;
        `;
      } else {
        return `
          width: 2px;
          height: 77px;
        `;
      }
    }}
  }

  @media (max-width: 480px) {
    ${(props) => {
      if (props.$type === "hour") {
        return `
          width: 5px;
          height: 41px;
        `;
      } else if (props.$type === "minute") {
        return `
          width: 3.5px;
          height: 58px;
        `;
      } else {
        return `
          width: 1.8px;
          height: 65px;
        `;
      }
    }}
  }
`;

const CenterDot = styled.div<{ $type: string }>`
  position: absolute;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.4);
  border: 3px solid
    ${(props) => (props.$type === "standard" ? "#4ecdc4" : "#ff6b81")};

  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: ${(props) => (props.$type === "standard" ? "#4ecdc4" : "#ff6b81")};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
    border: 2.5px solid
      ${(props) => (props.$type === "standard" ? "#4ecdc4" : "#ff6b81")};

    &::after {
      width: 7px;
      height: 7px;
    }
  }

  @media (max-width: 480px) {
    width: 12px;
    height: 12px;
    border: 2px solid
      ${(props) => (props.$type === "standard" ? "#4ecdc4" : "#ff6b81")};

    &::after {
      width: 6px;
      height: 6px;
    }
  }
`;

const TimeInfo = styled.div<{ $isCompact: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => (props.$isCompact ? "0" : "0.4rem")};
  animation: ${fadeIn} 0.6s ease;
  transition: all 0.3s ease;
  min-height: ${(props) => (props.$isCompact ? "auto" : "80px")};
`;

const DigitalTime = styled.div<{ $type: string }>`
  font-size: 2.2rem;
  font-weight: 700;
  background: ${(props) =>
    props.$type === "standard"
      ? "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)"
      : "linear-gradient(135deg, #ff6b81 0%, #ff8fa3 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.05em;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const DateInfo = styled.div`
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
  animation: ${fadeIn} 0.4s ease;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Weekday = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.8;
  animation: ${fadeIn} 0.5s ease;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export default Clock;
