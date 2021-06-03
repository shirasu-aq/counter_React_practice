import React from "react";
import "./App.css";

function ButtonActions() {
  return (
    <div className="container">
      <span id="zerocolor">0</span>
      <button className="btn decrease">DECREASE</button>
      <button className="btn">RESET</button>
      <button className="btn increase">INCREASE</button>
    </div>
  );
}

export default ButtonActions;
