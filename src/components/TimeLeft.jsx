import {
  AiOutlinePause,
  AiOutlinePlayCircle,
  AiOutlineReload,
} from "react-icons/ai";
import beepSound from "../assets/music/beeb.mp3";
import {
  startTimer,
  pauseTimer,
  resetTimer,
  updateTimer,
} from "../features/clock/clockSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { convertSecondsToMinutes } from "../utils/convertSecondsToMinutes";

const TimeLeft = () => {
  const audioRef = useRef(null); // Reference to the audio element

  const dispatch = useDispatch();
  const { isTimerRunning, timer, isSession, playSound, alert } = useSelector(
    (state) => state.clock
  );

  useEffect(() => {
    let intervalId;
    if (isTimerRunning) {
      intervalId = setInterval(() => {
        dispatch(updateTimer());
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerRunning, dispatch]);

  useEffect(() => {
    if (playSound) {
      audioRef.current.play();
    }
  }, [timer]);
  console.log(timer);
  const handleResetClick = () => {
    audioRef.current.pause(); // Pause the audio
    audioRef.current.currentTime = 0; // Rewind to the beginning
  };
  return (
    <>
      <div className="time-left-container">
        <h3 id="timer-label" style={alert ? { color: "#DC143C " } : null}>
          {isSession ? "SESSİON" : "BREAK"}
        </h3>

        <h1 id="time-left" style={alert ? { color: "#DC143C" } : null}>
          {convertSecondsToMinutes(timer)}
        </h1>
        <div className="controls-container">
          <button
            id="start_stop"
            onClick={() => {
              if (isTimerRunning) {
                dispatch(pauseTimer());
              } else {
                dispatch(startTimer());
              }
            }}
          >
            <i className="icon control-icon">
              {isTimerRunning ? <AiOutlinePause /> : <AiOutlinePlayCircle />}
            </i>
          </button>
          <button
            id="reset"
            onClick={() => {
              dispatch(resetTimer());
              handleResetClick();
            }}
          >
            <i className="icon control-icon">
              <AiOutlineReload />
            </i>
          </button>
        </div>
      </div>
      <audio src={beepSound} id="beep" ref={audioRef}></audio>
    </>
  );
};
export default TimeLeft;
