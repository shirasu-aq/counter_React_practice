import React from "react";
import "./App.css";
import Buttons from "./Buttons";
import { buttonEvents } from "./Buttons";

function Number() {
  return (
    <div className="buttons_contain">
      <span id="zerocolor">0</span>
      <Buttons />
    </div>
  );
}

export default Number;
