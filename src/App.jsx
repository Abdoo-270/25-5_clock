import "./App.css";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlinePause,
  AiOutlinePlayCircle,
  AiOutlineReload,
} from "react-icons/ai";
import Footer from "./Footer";
//access store values
import { useSelector } from "react-redux";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import TimeLeft from "./components/TimeLeft";
function App() {
  const { sessionLength, breakLength } = useSelector((state) => state.clock);
  return (
    <main>
      <h1 className="underline">25 + 5 Clock</h1>
      <div className="break-session-labels">
        <BreakLength />
        <SessionLength />
      </div>
      <TimeLeft />
      <Footer />
    </main>
  );
}

export default App;
