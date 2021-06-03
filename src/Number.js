import React from "react";
import "./App.css";
import Buttons from "./Buttons";
// import { buttonEvents } from "./Buttons";

function Number() {
  const Increase = () => {
    console.log("クリック");
  };

  return (
    <div className="buttons_contain">
      <span id="zerocolor">0</span>
      <Buttons />
    </div>
  );
}

export default Number;
