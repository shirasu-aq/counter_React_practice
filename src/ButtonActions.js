import React from "react";
import { useState } from "react";
import "./App.css";

function ButtonActions() {
  const [count, setCount] = useState(0);
  const [isGreen, setGreen] = useState(false);

  const Increase = () => {
    setCount(count + 1);
    if (count > 0) {
      setGreen(true);
    }
  };

  const Decrease = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div className="subcountainer">
      <span className={isGreen ? "green" : "span"}>{count}</span>
      <div className="buttons_countainer">
        <button className="btn" onClick={Decrease}>
          DECREASE
        </button>
        <button className="btn" onClick={Reset}>
          RESET
        </button>
        <button className="btn" onClick={Increase}>
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default ButtonActions;
