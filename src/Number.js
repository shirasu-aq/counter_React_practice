import React from "react";
import "./App.css";

function Number() {
  return (
    <div className="buttons_container">
      <button className="btn decrease">DECREASE</button>
      <button className="btn">RESET</button>
      <button className="btn increase">INCREASE</button>
    </div>
  );
}

export default Number;
