import React from "react";
import "./App.css";
// import Number from "./Number";

// const Increase = () => {
//   console.log("クリック");
// };

function Buttons() {
  return (
    <div className="buttons_container">
      <button className="btn decrease">DECREASE</button>
      <button className="btn">RESET</button>
      <button className="btn increase" onClick={Increase}>
        INCREASE
      </button>
    </div>
  );
}
export default Buttons;
