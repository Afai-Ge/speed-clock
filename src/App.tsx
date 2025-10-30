import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TimeProvider } from "./context/TimeContext";
import Clock from "./components/Clock";
import TimeDifference from "./components/TimeDifference";
import Controlpanel from "./components/ContralPanel";

function App() {
  const [count, setCount] = useState(0);

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
          <Controlpanel />
        </main>
      </div>
    </TimeProvider>
  );
}

export default App;
