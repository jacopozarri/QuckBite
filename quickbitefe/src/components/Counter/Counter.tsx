import { useState } from "react";
import "./Counter.css";
function Counter() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };
  return (
    <div className="button-container">
      <button className="control-button" onClick={decrease}>
        -
      </button>
      <span className="counter-output">{counter}</span>
      <button className="control-button" onClick={increase}>
        +
      </button>
    </div>
  );
}
export default Counter;
