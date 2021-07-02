import React, { useReducer } from "react";
import "./App.css";

import reducer from "./reducers";

export const ButtonActions = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const selectSpanColor = () => {
    if (state.count > 0) {
      return "green";
    }
    if (state.count < 0) {
      return "red";
    }
    return "black";
  };

  const spanColor = selectSpanColor();

  return (
    <div className="subcountainer">
      <span className={spanColor}>{state.count}</span>
      <div className="buttons_countainer">
        <button className="btn" onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREASE
        </button>
        <button className="btn" onClick={() => dispatch({ type: "RESET" })}>
          RESET
        </button>
        <button className="btn" onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREASE
        </button>
      </div>
    </div>
  );
};
