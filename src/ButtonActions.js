import React from "react";
import { useState } from "react";
import "./App.css";

export const ButtonActions = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const spanColor = count > 0 ? "green" : count < 0 ? "red" : "span";

  return (
    <div className="subcountainer">
      <span className={spanColor}>{count}</span>
      <div className="buttons_countainer">
        <button className="btn" onClick={decrease}>
          DECREASE
        </button>
        <button className="btn" onClick={reset}>
          RESET
        </button>
        <button className="btn" onClick={increase}>
          INCREASE
        </button>
      </div>
    </div>
  );
};
