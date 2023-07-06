import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlinePause,
  AiOutlinePlayCircle,
  AiOutlineReload,
} from "react-icons/ai";
import Footer from "./Footer";
function App() {
  return (
    <main>
      <h1 className="underline">25 + 5 Clock</h1>
      <div className="break-session-labels">
        <div id="break-label">
          <h3>Break Length</h3>
          <p>
            <i className="icon" id="break-decrement">
              <AiOutlineMinus />
            </i>
            <span className="length" id="break-length">
              5
            </span>
            <i className="icon" id="break-increment">
              <AiOutlinePlus />
            </i>
          </p>
        </div>
        <div id="session-label">
          <h3>Session Length</h3>
          <p>
            <i className="icon" id="session-decrement">
              <AiOutlineMinus />
            </i>
            <span className="length" id="session-length">
              25
            </span>
            <i className="icon" id="session-increment">
              <AiOutlinePlus />
            </i>
          </p>
        </div>
      </div>
      <div className="time-left-container">
        <h3 id="timer-label">Session</h3>
        <h1 id="time-left">25:00</h1>
        <div className="controls-container">
          <i className="icon control-icon">
            <AiOutlinePause />
          </i>
          <i className="icon control-icon">
            <AiOutlinePlayCircle />
          </i>
          <i className="icon control-icon">
            <AiOutlineReload />
          </i>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
