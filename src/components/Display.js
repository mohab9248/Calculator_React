import React from "react";
import "./Display.css";

function Display({ value }) {
  return (
    <div className="display">
      <span className="display-value">{value}</span>
    </div>
  );
}

export default Display;
