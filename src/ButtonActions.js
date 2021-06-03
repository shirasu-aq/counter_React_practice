import React from "react";
import "./App.css";

function ButtonActions() {
  return (
    <div className="subcountainer">
      <span id="zerocolor">0</span>
      <div className="buttons_countainer">
        <button className="btn decrease">DECREASE</button>
        <button className="btn">RESET</button>
        <button className="btn increase">INCREASE</button>
      </div>
    </div>
  );
}

export default ButtonActions;
