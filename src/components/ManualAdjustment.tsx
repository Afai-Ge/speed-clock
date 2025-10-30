import { useState } from "react";
import { useTime } from "../context/TimeContext";
import dayjs from "dayjs";
import styled, { keyframes } from "styled-components";

const ManualAdjustment = () => {
  const { fastTime, setFastTimeManually, adjustFastTime, syncToStandardTime } =
    useTime();
  const [showManualInput, setShowManualInput] = useState(false);
  const [manualDateTime, setManualDateTime] = useState(
    fastTime.format("YYYY-MM-DDTHH:mm")
  );
  const [adjustAmount, setAdjustAmount] = useState(1);
  const [adjustUnit, setAdjustUnit] = useState<
    "second" | "minute" | "hour" | "day"
  >("minute");

  const handleSetTime = () => {
    const newTime = dayjs(manualDateTime);
    if (newTime.isValid()) {
      setFastTimeManually(newTime);
    }
  };

  const handleQuickAdjust = (amount: number, unit: dayjs.ManipulateType) => {
    adjustFastTime(amount, unit);
  };

  const quickAdjustments = [
    { label: "+1秒", amount: 1, unit: "second" as dayjs.ManipulateType, emoji: "⏱️" },
    { label: "+1分", amount: 1, unit: "minute" as dayjs.ManipulateType, emoji: "⏲️" },
    { label: "+5分", amount: 5, unit: "minute" as dayjs.ManipulateType, emoji: "⏰" },
    { label: "+1时", amount: 1, unit: "hour" as dayjs.ManipulateType, emoji: "🕐" },
    { label: "-1秒", amount: -1, unit: "second" as dayjs.ManipulateType, emoji: "⏱️" },
    { label: "-1分", amount: -1, unit: "minute" as dayjs.ManipulateType, emoji: "⏲️" },
    { label: "-5分", amount: -5, unit: "minute" as dayjs.ManipulateType, emoji: "⏰" },
    { label: "-1时", amount: -1, unit: "hour" as dayjs.ManipulateType, emoji: "🕐" },
  ];

  return (
    <Container>
      <Section>
        <SectionHeader>
          <SectionIcon>⚡</SectionIcon>
          <SectionTitle>快速调整</SectionTitle>
        </SectionHeader>
        <QuickGrid>
          {quickAdjustments.map((adjustment, index) => (
            <QuickButton
              key={index}
              $isPositive={adjustment.amount > 0}
              onClick={() => handleQuickAdjust(adjustment.amount, adjustment.unit)}
            >
              <Emoji>{adjustment.emoji}</Emoji>
              <Label>{adjustment.label}</Label>
              <ButtonGlow $isPositive={adjustment.amount > 0} />
            </QuickButton>
          ))}
        </QuickGrid>
      </Section>

      <Section>
        <SectionHeader>
          <SectionIcon>🎯</SectionIcon>
          <SectionTitle>自定义调整</SectionTitle>
        </SectionHeader>
        <CustomAdjust>
          <InputGroup>
            <InputWrapper>
              <StyledInput
                type="number"
                value={adjustAmount}
                onChange={(e) => setAdjustAmount(parseInt(e.target.value) || 1)}
                min="1"
                max="365"
              />
              <InputIcon>🔢</InputIcon>
            </InputWrapper>
            <SelectWrapper>
              <StyledSelect
                value={adjustUnit}
                onChange={(e) => setAdjustUnit(e.target.value as any)}
              >
                <option value="second">秒</option>
                <option value="minute">分钟</option>
                <option value="hour">小时</option>
                <option value="day">天</option>
              </StyledSelect>
              <SelectIcon>⏳</SelectIcon>
            </SelectWrapper>
          </InputGroup>
          <ButtonGroup>
            <ActionButton
              $variant="positive"
              onClick={() => handleQuickAdjust(adjustAmount, adjustUnit)}
            >
              <ButtonIcon>➕</ButtonIcon>
              <ButtonText>增加</ButtonText>
            </ActionButton>
            <ActionButton
              $variant="negative"
              onClick={() => handleQuickAdjust(-adjustAmount, adjustUnit)}
            >
              <ButtonIcon>➖</ButtonIcon>
              <ButtonText>减少</ButtonText>
            </ActionButton>
          </ButtonGroup>
        </CustomAdjust>
      </Section>

      <Section>
        <SectionHeader>
          <SectionIcon>📅</SectionIcon>
          <SectionTitle>精确设置</SectionTitle>
        </SectionHeader>
        <ExactSet>
          <ToggleButton onClick={() => setShowManualInput(!showManualInput)}>
            <ToggleIcon $isOpen={showManualInput}>
              {showManualInput ? "🔼" : "🔽"}
            </ToggleIcon>
            {showManualInput ? "隐藏设置" : "显示时间设置"}
          </ToggleButton>

          <CollapseContainer $isOpen={showManualInput}>
            <DateTimeGroup>
              <DateTimeWrapper>
                <DateTimeInput
                  type="datetime-local"
                  value={manualDateTime}
                  onChange={(e) => setManualDateTime(e.target.value)}
                />
                <DateTimeIcon>🕒</DateTimeIcon>
              </DateTimeWrapper>
              <SetButton onClick={handleSetTime}>
                <ButtonIcon>✔️</ButtonIcon>
                <ButtonText>设置时间</ButtonText>
              </SetButton>
            </DateTimeGroup>
          </CollapseContainer>
        </ExactSet>
      </Section>

      <SyncButton onClick={syncToStandardTime}>
        <SyncIcon>🔄</SyncIcon>
        <SyncText>同步到标准时间</SyncText>
        <SyncGlow />
      </SyncButton>
    </Container>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const glow = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

// const ripple = keyframes`
//   0% {
//     transform: scale(0);
//     opacity: 1;
//   }
//   100% {
//     transform: scale(2);
//     opacity: 0;
//   }
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: ${fadeIn} 0.5s ease;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const SectionIcon = styled.span`
  font-size: 1.3rem;
  animation: ${pulse} 3s ease-in-out infinite;
`;

const SectionTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const QuickGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ButtonGlow = styled.div<{ $isPositive: boolean }>`
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: ${(props) =>
    props.$isPositive
      ? "radial-gradient(circle, rgba(168, 230, 207, 0.4) 0%, transparent 70%)"
      : "radial-gradient(circle, rgba(255, 107, 107, 0.4) 0%, transparent 70%)"};
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const Emoji = styled.span`
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const Label = styled.span`
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  transition: color 0.3s ease;
`;



const QuickButton = styled.button<{ $isPositive: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 1rem 0.6rem;
  border: 2px solid
    ${(props) =>
      props.$isPositive
        ? "rgba(168, 230, 207, 0.6)"
        : "rgba(255, 107, 107, 0.6)"};
  border-radius: 12px;
  background: white;
  color: ${(props) =>
    props.$isPositive ? "#56ab91" : "#ff6b6b"};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 700;
  font-size: 0.9rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${(props) =>
      props.$isPositive
        ? "linear-gradient(135deg, #a8e6cf 0%, #56ab91 100%)"
        : "linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)"};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    border-color: ${(props) =>
      props.$isPositive ? "#56ab91" : "#ff6b6b"};
    box-shadow: 0 8px 20px ${(props) =>
      props.$isPositive
        ? "rgba(168, 230, 207, 0.4)"
        : "rgba(255, 107, 107, 0.4)"};

    &::before {
      opacity: 1;
    }

    ${ButtonGlow} {
      opacity: 1;
      animation: ${glow} 1.5s ease-in-out infinite;
    }

    ${Emoji}, ${Label} {
      position: relative;
      z-index: 1;
      color: white;
    }
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }
`;

const CustomAdjust = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;

const InputIcon = styled.span`
  position: absolute;
  right: 1rem;
  font-size: 1.1rem;
  opacity: 0.5;
  pointer-events: none;
  transition: all 0.3s ease;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 0.8rem 2.8rem 0.8rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(255, 107, 129, 0.15),
                0 4px 12px rgba(0, 0, 0, 0.1);
    outline: none;
    transform: translateY(-2px);

    & + ${InputIcon} {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;

const SelectIcon = styled.span`
  position: absolute;
  right: 1rem;
  font-size: 1.1rem;
  opacity: 0.5;
  pointer-events: none;
  transition: all 0.3s ease;
`;

const StyledSelect = styled.select`
  flex: 1;
  padding: 0.8rem 2.8rem 0.8rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  appearance: none;

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(255, 107, 129, 0.15),
                0 4px 12px rgba(0, 0, 0, 0.1);
    outline: none;
    transform: translateY(-2px);

    & + ${SelectIcon} {
      opacity: 1;
      transform: scale(1.1) rotate(180deg);
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const ButtonIcon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
`;

const ButtonText = styled.span`
  font-size: 0.95rem;
  letter-spacing: 0.05em;
`;

const ActionButton = styled.button<{ $variant: string }>`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: white;
  overflow: hidden;

  ${(props) => {
    if (props.$variant === "positive") {
      return `
        background: linear-gradient(135deg, #a8e6cf 0%, #56ab91 100%);
        box-shadow: 0 4px 15px rgba(168, 230, 207, 0.4);
      `;
    } else {
      return `
        background: linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%);
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
      `;
    }
  }}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: ${(props) =>
      props.$variant === "positive"
        ? "0 8px 25px rgba(168, 230, 207, 0.5)"
        : "0 8px 25px rgba(255, 107, 107, 0.5)"};

    &::before {
      opacity: 1;
    }

    ${ButtonIcon} {
      transform: scale(1.2);
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }
`;

const ExactSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow: hidden;
`;

const ToggleIcon = styled.span<{ $isOpen: boolean }>`
  font-size: 1rem;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${(props) => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1rem;
  border: 2px solid rgba(78, 205, 196, 0.6);
  border-radius: 12px;
  background: white;
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: var(--secondary-color);
    box-shadow: 0 6px 20px rgba(78, 205, 196, 0.3);

    &::before {
      opacity: 1;
    }

    color: white;

    ${ToggleIcon} {
      transform: scale(1.2);
    }
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const CollapseContainer = styled.div<{ $isOpen: boolean }>`
  max-height: ${(props) => props.$isOpen ? '500px' : '0'};
  opacity: ${(props) => props.$isOpen ? '1' : '0'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`;

const DateTimeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const DateTimeWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;

const DateTimeIcon = styled.span`
  position: absolute;
  right: 1rem;
  font-size: 1.1rem;
  opacity: 0.5;
  pointer-events: none;
  transition: all 0.3s ease;
`;

const DateTimeInput = styled.input`
  flex: 1;
  padding: 0.8rem 2.8rem 0.8rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(255, 107, 129, 0.15),
                0 4px 12px rgba(0, 0, 0, 0.1);
    outline: none;
    transform: translateY(-2px);

    & + ${DateTimeIcon} {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;

const SetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
  border: none;
  border-radius: 12px;
  background: var(--primary-gradient);
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(255, 107, 129, 0.4);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 25px rgba(255, 107, 129, 0.5);

    &::before {
      opacity: 1;
    }

    ${ButtonIcon} {
      transform: scale(1.2);
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const SyncIcon = styled.span`
  font-size: 1.3rem;
  transition: transform 0.3s ease;
`;

const SyncText = styled.span`
  transition: color 0.3s ease;
`;

const SyncGlow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 14px;
  background: radial-gradient(circle, rgba(78, 205, 196, 0.4) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const SyncButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: 100%;
  padding: 1.2rem;
  border: 2px dashed rgba(78, 205, 196, 0.6);
  border-radius: 14px;
  background: rgba(78, 205, 196, 0.08);
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    border-style: solid;
    border-color: var(--secondary-color);
    box-shadow: 0 8px 25px rgba(78, 205, 196, 0.3);

    &::before {
      opacity: 1;
    }

    ${SyncGlow} {
      opacity: 1;
      animation: ${glow} 1.5s ease-in-out infinite;
    }

    ${SyncIcon} {
      animation: ${spin} 1s linear infinite;
    }

    ${SyncText} {
      color: white;
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

export default ManualAdjustment;
