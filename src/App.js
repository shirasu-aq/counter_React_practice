import React from "react";
import "./App.css";
import Number from "./Number";
import Buttons from "./Buttons";

function App() {
  return (
    <main>
      <div className="countainer">
        <h1>Counter</h1>
        <Number />
        <Buttons />
      </div>
    </main>
  );
}

export default App;
