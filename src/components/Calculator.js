import React from "react";
import { useCalculator } from "../hooks/UseCalculator";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./Calculator.css";

function Calculator() {
  const {
    display,
    inputDigit,
    inputDecimal,
    chooseOperation,
    evaluate,
    clear,
    toggleSign,
  } = useCalculator();

  return (
    <div className="calculator">
      <Display value={display} />
      <ButtonPanel
        onDigit={inputDigit}
        onDecimal={inputDecimal}
        onOperator={chooseOperation}
        onEqual={evaluate}
        onClear={clear}
        onSign={toggleSign}
      />
    </div>
  );
}

export default Calculator;
