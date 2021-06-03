import React from "react";
import { useState } from "react";
import "./App.css";

function ButtonActions() {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };
  return (
    <div className="subcountainer">
      <span id="zerocolor">{count}</span>
      <div className="buttons_countainer">
        <button className="btn decrease">DECREASE</button>
        <button className="btn">RESET</button>
        <button className="btn increase" onClick={Increase}>
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default ButtonActions;
