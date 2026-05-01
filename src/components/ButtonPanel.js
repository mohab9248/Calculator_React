import React from "react";
import Button from "./Button";
import "./ButtonPanel.css";

function ButtonPanel({
  onDigit,
  onDecimal,
  onOperator,
  onEqual,
  onClear,
  onSign,
}) {
  const digits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  const operators = ["÷", "×", "-", "+"]; // displayed symbols
  // Map displayed symbols to actual operators for logic
  const operatorMap = {
    "÷": "/",
    "×": "*",
    "-": "-",
    "+": "+",
  };

  return (
    <div className="button-panel">
      <div className="button-row">
        <Button label="C" onClick={() => onClear()} className="action" />
        <Button label="±" onClick={() => onSign()} className="action" />
        <Button label="%" onClick={() => onOperator("%")} className="action" />
        <Button
          label="÷"
          onClick={() => onOperator(operatorMap["÷"])}
          className="operator"
        />
      </div>

      <div className="button-row">
        {digits.slice(0, 3).map((digit) => (
          <Button key={digit} label={digit} onClick={() => onDigit(digit)} />
        ))}
        <Button
          label="×"
          onClick={() => onOperator(operatorMap["×"])}
          className="operator"
        />
      </div>

      <div className="button-row">
        {digits.slice(3, 6).map((digit) => (
          <Button key={digit} label={digit} onClick={() => onDigit(digit)} />
        ))}
        <Button
          label="-"
          onClick={() => onOperator(operatorMap["-"])}
          className="operator"
        />
      </div>

      <div className="button-row">
        {digits.slice(6, 9).map((digit) => (
          <Button key={digit} label={digit} onClick={() => onDigit(digit)} />
        ))}
        <Button
          label="+"
          onClick={() => onOperator(operatorMap["+"])}
          className="operator"
        />
      </div>

      <div className="button-row">
        <Button label="0" onClick={() => onDigit("0")} className="zero" />
        <Button label="." onClick={() => onDecimal()} />
        <Button label="=" onClick={() => onEqual()} className="equal" />
      </div>
    </div>
  );
}

export default ButtonPanel;
