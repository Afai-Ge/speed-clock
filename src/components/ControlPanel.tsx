import React, { useState } from "react";
import { useTime } from "../context/TimeContext";
import ManualAdjustment from "./ManualAdjustment";
import styled, { keyframes } from "styled-components";

const ControlPanel: React.FC = () => {
  const { isRunning, toggleRunning, reset } = useTime();
  const [showModal, setShowModal] = useState(false);

  const getStatusText = () => {
    return isRunning ? "运行中" : "已暂停";
  };

  return (
    <>
      {/* 浮动控制按钮 */}
      <FloatingControls>
        <ControlButton
          $variant="primary"
          onClick={() => setShowModal(true)}
          title="打开控制面板"
        >
          <ButtonIcon>⚙️</ButtonIcon>
          <ButtonGlow $variant="primary" />
        </ControlButton>
        <ControlButton
          $variant={isRunning ? "warning" : "success"}
          onClick={toggleRunning}
          title={isRunning ? "暂停" : "继续"}
        >
          <ButtonIcon>{isRunning ? "⏸️" : "▶️"}</ButtonIcon>
          <ButtonGlow $variant={isRunning ? "warning" : "success"} />
        </ControlButton>
        <ControlButton $variant="secondary" onClick={reset} title="重置">
          <ButtonIcon>🔄</ButtonIcon>
          <ButtonGlow $variant="secondary" />
        </ControlButton>
      </FloatingControls>

      {/* 状态指示器 */}
      <StatusBar>
        <StatusIndicator $isRunning={isRunning}>
          <StatusDot $isRunning={isRunning} />
          <StatusText>{getStatusText()}</StatusText>
        </StatusIndicator>
      </StatusBar>

      {/* 模态弹窗 */}
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                <TitleIcon>⚙️</TitleIcon>
                控制面板
              </ModalTitle>
              <CloseButton onClick={() => setShowModal(false)}>
                <CloseIcon>✕</CloseIcon>
              </CloseButton>
            </ModalHeader>

            <TabContent>
              <ManualAdjustment />
            </TabContent>

            <ModalFooter>
              <FooterButton $variant="secondary" onClick={toggleRunning}>
                <FooterIcon>{isRunning ? "s" : "▶️"}</FooterIcon>
                {isRunning ? "暂停" : "继续"}
              </FooterButton>
              <FooterButton $variant="danger" onClick={reset}>
                <FooterIcon>🔄</FooterIcon>
                重置
              </FooterButton>
              <FooterButton $variant="primary" onClick={() => setShowModal(false)}>
                <FooterIcon>✓</FooterIcon>
                完成
              </FooterButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.95);
  }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const glow = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from {
    transform: translateY(50px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

// 浮动控制按钮
const FloatingControls = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
  animation: ${float} 4s ease-in-out infinite;

  @media (max-width: 768px) {
    bottom: 1rem;
    left: 1rem;
    flex-direction: row;
  }
`;

const ButtonGlow = styled.div<{ $variant: string }>`
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;

  ${(props) => {
    switch (props.$variant) {
      case "primary":
        return `background: radial-gradient(circle, rgba(255, 107, 129, 0.6) 0%, transparent 70%);`;
      case "success":
        return `background: radial-gradient(circle, rgba(168, 230, 207, 0.6) 0%, transparent 70%);`;
      case "warning":
        return `background: radial-gradient(circle, rgba(255, 217, 61, 0.6) 0%, transparent 70%);`;
      case "secondary":
        return `background: radial-gradient(circle, rgba(78, 205, 196, 0.6) 0%, transparent 70%);`;
      default:
        return `background: radial-gradient(circle, rgba(255, 107, 129, 0.6) 0%, transparent 70%);`;
    }
  }}
`;

const ButtonIcon = styled.span`
  font-size: 1.5rem;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
`;

const ControlButton = styled.button<{ $variant: string }>`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15),
              0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: visible;

  ${(props) => {
    switch (props.$variant) {
      case "primary":
        return `
          background: var(--primary-gradient);
          color: white;
        `;
      case "success":
        return `
          background: linear-gradient(135deg, #a8e6cf 0%, #56ab91 100%);
          color: white;
        `;
      case "warning":
        return `
          background: linear-gradient(135deg, #ffd93d 0%, #ffb627 100%);
          color: white;
        `;
      case "secondary":
        return `
          background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
          color: white;
        `;
      default:
        return `
          background: var(--primary-gradient);
          color: white;
        `;
    }
  }}

  &:hover {
    transform: scale(1.15) translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25),
                0 4px 12px rgba(0, 0, 0, 0.15);

    ${ButtonIcon} {
      transform: scale(1.1) rotate(15deg);
    }

    ${ButtonGlow} {
      opacity: 1;
      animation: ${glow} 2s ease-in-out infinite;
    }
  }

  &:active {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 52px;
    height: 52px;

    ${ButtonIcon} {
      font-size: 1.3rem;
    }
  }
`;

// 状态栏
const StatusBar = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
  z-index: 999;
  animation: ${fadeIn} 0.5s ease;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
  }
`;

const StatusText = styled.span`
  transition: all 0.3s ease;
`;

const StatusIndicator = styled.div<{ $isRunning: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.2rem;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1),
              inset 0 1px 2px rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-weight: 700;
  color: ${(props) =>
    props.$isRunning ? "#56ab91" : "#ff6b6b"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid ${(props) =>
    props.$isRunning ? "rgba(168, 230, 207, 0.4)" : "rgba(255, 107, 107, 0.4)"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-color: ${(props) =>
      props.$isRunning ? "#56ab91" : "#ff6b6b"};
  }
`;

const StatusDot = styled.span<{ $isRunning: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) =>
    props.$isRunning
      ? "linear-gradient(135deg, #a8e6cf 0%, #56ab91 100%)"
      : "linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)"};
  box-shadow: 0 0 8px ${(props) =>
    props.$isRunning ? "rgba(168, 230, 207, 0.6)" : "rgba(255, 107, 107, 0.6)"};
  animation: ${(props) => (props.$isRunning ? pulse : "none")} 2s infinite;
`;

// 模态弹窗
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: ${fadeIn} 0.3s ease;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: var(--card-bg);
  border-radius: 28px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4),
              0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 650px;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${slideUp} 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  /* 美化滚动条 */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary-gradient);
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 92vh;
    border-radius: 24px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem;
  border-bottom: 2px solid rgba(255, 107, 129, 0.15);
  position: sticky;
  top: 0;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  z-index: 10;
  border-radius: 28px 28px 0 0;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
  }
`;

const TitleIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  animation: ${spin} 4s linear infinite;
`;

const ModalTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;
`;

const CloseIcon = styled.span`
  transition: transform 0.3s ease;
  font-size: 1.3rem;
  line-height: 1;
`;

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 107, 129, 0.2);
  background: rgba(255, 107, 129, 0.08);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--primary-gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: var(--primary-color);
    box-shadow: 0 4px 15px rgba(255, 107, 129, 0.3);
    transform: scale(1.1);

    &::before {
      opacity: 1;
    }

    ${CloseIcon} {
      transform: rotate(90deg);
      color: white;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  ${CloseIcon} {
    position: relative;
    z-index: 1;
  }
`;

const TabContent = styled.div`
  padding: 2.5rem;
  min-height: 300px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.5rem 2.5rem;
  border-top: 2px solid rgba(255, 107, 129, 0.15);
  position: sticky;
  bottom: 0;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border-radius: 0 0 28px 28px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

const FooterIcon = styled.span`
  font-size: 1.1rem;
  transition: transform 0.3s ease;
`;

const FooterButton = styled.button<{ $variant: string }>`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 1.5rem;
  border: none;
  border-radius: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;
  overflow: hidden;

  ${(props) => {
    switch (props.$variant) {
      case "primary":
        return `
          background: var(--primary-gradient);
          color: white;
          box-shadow: 0 4px 15px rgba(255, 107, 129, 0.35);
        `;
      case "secondary":
        return `
          background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(78, 205, 196, 0.35);
        `;
      case "danger":
        return `
          background: linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.35);
        `;
      default:
        return `
          background: var(--primary-gradient);
          color: white;
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
    box-shadow: ${(props) => {
      switch (props.$variant) {
        case "primary":
          return "0 8px 25px rgba(255, 107, 129, 0.45)";
        case "secondary":
          return "0 8px 25px rgba(78, 205, 196, 0.45)";
        case "danger":
          return "0 8px 25px rgba(255, 107, 107, 0.45)";
        default:
          return "0 8px 25px rgba(0, 0, 0, 0.3)";
      }
    }};

    &::before {
      opacity: 1;
    }

    ${FooterIcon} {
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

export default ControlPanel;
