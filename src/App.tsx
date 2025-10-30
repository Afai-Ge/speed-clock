import "./App.css";
import { TimeProvider } from "./context/TimeContext";
import Clock from "./components/Clock";
import TimeDifference from "./components/TimeDifference";
import ControlPanel from "./components/ControlPanel";

function App() {
  return (
    <TimeProvider>
      <div className="app">
        <header>
          <h1>差速时钟比对</h1>
        </header>
        <main>
          <div className="clocks-container">
            <Clock type="standard"></Clock>
            <Clock type="fast"></Clock>
          </div>
          <TimeDifference />
        </main>
      </div>
      {/* 浮动控制按钮移到 .app 外面,确保固定在视口 */}
      <ControlPanel />
    </TimeProvider>
  );
}

export default App;
