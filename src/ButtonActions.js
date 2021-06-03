import React from "react";
import { useState } from "react";
import "./App.css";

function ButtonActions() {
  const [count, setCount] = useState(0);

  const Increase = () => {
    const nextCount = count + 1;

    setCount(nextCount);
  };

  const Decrease = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  const spanColor = count > 0 ? "green" : "span";

  return (
    <div className="subcountainer">
      <span className={spanColor}>{count}</span>
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
