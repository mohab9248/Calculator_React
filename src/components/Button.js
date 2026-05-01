import React from "react";
import "./Button.css";

function Button({ label, onClick, className = "" }) {
  const handleClick = () => {
    onClick(label);
  };

  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {label}
    </button>
  );
}

export default Button;
