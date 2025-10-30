import React from "react";
import { useTime } from "../context/TimeContext";
import styled, { keyframes } from "styled-components";

const TimeDifference: React.FC = () => {
  const { timeDifference } = useTime();

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

  const isPositive = timeDifference >= 0;

  // 计算进度百分比 (假设最大差异为1小时 = 3600秒)
  const maxDiff = 3600;
  const progress = Math.min((Math.abs(timeDifference) / maxDiff) * 100, 100);

  return (
    <DifferenceContainer>
      <DifferenceHeader>
        <IconWrapper>
          <Icon>⏱️</Icon>
          <IconGlow $isPositive={isPositive} />
        </IconWrapper>
        <Title>时间差异</Title>
      </DifferenceHeader>

      <DifferenceCard $isPositive={isPositive}>
        <Label>当前时间差</Label>

        <ValueWrapper>
          <Sign $isPositive={isPositive}>
            {getDifferenceSign(timeDifference)}
          </Sign>
          <Value $isPositive={isPositive}>
            {formatDifference(timeDifference)}
          </Value>
        </ValueWrapper>

        {/* 进度条 */}
        {/* <ProgressBarContainer>
          <ProgressBar $isPositive={isPositive} $progress={progress} />
          <ProgressGlow $isPositive={isPositive} $progress={progress} />
        </ProgressBarContainer> */}

        <BottomInfo>
          <Indicator $isPositive={isPositive}>
            <IndicatorIcon>
              {isPositive ? (
                <img src="/speed-clock/icons/arrow_up.png" alt="向上箭头" />
              ) : (
                <img src="/speed-clock/icons/arrow_down.png" alt="向下箭头" />
              )}
            </IndicatorIcon>
            {isPositive ? "快表领先" : "快表落后"}
          </Indicator>
          <Stats>
            <StatItem>
              <StatLabel>秒数</StatLabel>
              <StatValue>{Math.abs(timeDifference)}</StatValue>
            </StatItem>
          </Stats>
        </BottomInfo>
      </DifferenceCard>
    </DifferenceContainer>
  );
};

const DifferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 1.5rem;
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  animation: fadeSlideIn 0.6s ease;

  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    gap: 1rem;
    max-width: 550px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.8rem;
    max-width: 100%;
  }
`;

const DifferenceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.span`
  font-size: 2rem;
  position: relative;
  z-index: 1;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const glowPulse = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const IconGlow = styled.div<{ $isPositive: boolean }>`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) =>
    props.$isPositive
      ? "radial-gradient(circle, rgba(168, 230, 207, 0.6) 0%, transparent 70%)"
      : "radial-gradient(circle, rgba(255, 107, 107, 0.6) 0%, transparent 70%)"};
  animation: ${glowPulse} 2s ease-in-out infinite;
  z-index: 0;

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
  margin: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const DifferenceCard = styled.div<{ $isPositive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 2.5rem;
  width: 100%;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: var(--card-shadow),
    0 0 40px
      ${(props) =>
        props.$isPositive
          ? "rgba(168, 230, 207, 0.2)"
          : "rgba(255, 107, 107, 0.2)"};
  border: 2px solid
    ${(props) =>
      props.$isPositive
        ? "rgba(168, 230, 207, 0.5)"
        : "rgba(255, 107, 107, 0.5)"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 16px 48px rgba(31, 38, 135, 0.3),
      0 0 60px
        ${(props) =>
          props.$isPositive
            ? "rgba(168, 230, 207, 0.3)"
            : "rgba(255, 107, 107, 0.3)"};
  }

  @media (max-width: 768px) {
    padding: 2rem;
    gap: 1rem;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    gap: 0.8rem;
    border-radius: 16px;
  }
`;

const Label = styled.div`
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ValueWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.8rem;
`;

const Sign = styled.span<{ $isPositive: boolean }>`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${(props) => (props.$isPositive ? "#a8e6cf" : "#ff6b6b")};
  text-shadow: 0 4px 12px
    ${(props) =>
      props.$isPositive
        ? "rgba(168, 230, 207, 0.4)"
        : "rgba(255, 107, 107, 0.4)"};

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Value = styled.div<{ $isPositive: boolean }>`
  font-size: 2.8rem;
  font-weight: 800;
  background: ${(props) =>
    props.$isPositive
      ? "linear-gradient(135deg, #a8e6cf 0%, #56ab91 100%)"
      : "linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const progressAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`;

const ProgressBar = styled.div<{ $isPositive: boolean; $progress: number }>`
  height: 100%;
  width: ${(props) => props.$progress}%;
  background: ${(props) =>
    props.$isPositive
      ? "linear-gradient(90deg, #a8e6cf 0%, #56ab91 100%)"
      : "linear-gradient(90deg, #ff6b6b 0%, #ff8787 100%)"};
  border-radius: 20px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 15px
    ${(props) =>
      props.$isPositive
        ? "rgba(168, 230, 207, 0.6)"
        : "rgba(255, 107, 107, 0.6)"};
  animation: ${progressAnimation} 0.8s ease;
`;

const ProgressGlow = styled.div<{ $isPositive: boolean; $progress: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => props.$progress}%;
  background: ${(props) =>
    props.$isPositive
      ? "linear-gradient(90deg, transparent, rgba(168, 230, 207, 0.4), transparent)"
      : "linear-gradient(90deg, transparent, rgba(255, 107, 107, 0.4), transparent)"};
  border-radius: 20px;
  animation: shimmer 2s infinite;

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Indicator = styled.div<{ $isPositive: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 700;
  background: ${(props) =>
    props.$isPositive
      ? "linear-gradient(135deg, #a8e6cf 0%, #56ab91 100%)"
      : "linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)"};
  color: white;
  box-shadow: 0 4px 15px
    ${(props) =>
      props.$isPositive
        ? "rgba(168, 230, 207, 0.5)"
        : "rgba(255, 107, 107, 0.5)"};
  letter-spacing: 0.05em;
`;

const IndicatorIcon = styled.span`
  font-size: 1.2rem;
  animation: bounce 1.5s ease-in-out infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`;

const StatValue = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-color);
  font-variant-numeric: tabular-nums;
`;

export default TimeDifference;
