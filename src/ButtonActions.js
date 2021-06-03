import React from "react";
import "./App.css";

const Count = 0;

const Increase = () => {
  console.log("クリック");
};

function ButtonActions() {
  return (
    <div className="subcountainer">
      <span id="zerocolor">{Count}</span>
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
