import React from "react";
import { useState } from "react";
import "./App.css";

function ButtonActions() {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };
  return (
    <div className="subcountainer">
      <span id="zerocolor">{count}</span>
      <div className="buttons_countainer">
        <button className="btn decrease" onClick={Decrease}>
          DECREASE
        </button>
        <button className="btn" onClick={Reset}>
          RESET
        </button>
        <button className="btn increase" onClick={Increase}>
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default ButtonActions;
