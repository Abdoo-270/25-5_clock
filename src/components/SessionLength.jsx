import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { increaseSession, decreaseSession } from "../features/clock/clockSlice";
const SessionLength = () => {
  const { sessionLength } = useSelector((state) => state.clock);
  const dispatch = useDispatch();
  return (
    <div id="session-label">
      <h3>Session Length</h3>
      <p>
        <button onClick={() => dispatch(decreaseSession())}>
          <i className="icon" id="session-decrement">
            <AiOutlineMinus />
          </i>
        </button>
        <span className="length" id="session-length">
          {sessionLength / 60}
        </span>
        <button onClick={() => dispatch(increaseSession())}>
          <i className="icon" id="session-increment">
            <AiOutlinePlus />
          </i>
        </button>
      </p>
    </div>
  );
};
export default SessionLength;
