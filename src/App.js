import React from "react";
import "./App.css";
import { ButtonActions } from "./ButtonActions";

export const App = () => {
  return (
    <main>
      <div className="maincountainer">
        <h1>Counter</h1>
        <ButtonActions />
      </div>
    </main>
  );
};
