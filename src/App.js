import React from "react";
// import { useState } from "react";
import "./App.css";
import ButtonActions from "./ButtonActions";

function App() {
  return (
    <main>
      <div className="maincountainer">
        <h1>Counter</h1>
        <ButtonActions />
      </div>
    </main>
  );
}

export default App;
