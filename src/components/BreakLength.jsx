import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { increaseBreak } from "../features/clock/clockSlice";
import { decreaseBreak } from "../features/clock/clockSlice";
const BreakLength = () => {
  const { breakLength } = useSelector((state) => state.clock);
  const dispatch = useDispatch();
  return (
    <div id="break-label">
      <h3>Break Length</h3>
      <p>
        <button onClick={() => dispatch(decreaseBreak())}>
          <i className="icon" id="break-decrement">
            <AiOutlineMinus />
          </i>
        </button>
        <span className="length" id="break-length">
          {breakLength / 60}
        </span>
        <button onClick={() => dispatch(increaseBreak())}>
          <i className="icon" id="break-increment">
            <AiOutlinePlus />
          </i>
        </button>
      </p>
    </div>
  );
};
export default BreakLength;
