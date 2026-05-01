// src/hooks/useCalculator.js
import { useState, useCallback } from "react";
import { calculate } from "../utils/Calculate";

export function useCalculator() {
  const [current, setCurrent] = useState("0");
  const [previous, setPrevious] = useState("");
  const [operation, setOperation] = useState("");
  const [overwrite, setOverwrite] = useState(false);

  // Handle digit & decimal input
  const inputDigit = useCallback(
    (digit) => {
      if (overwrite) {
        setCurrent(digit);
        setOverwrite(false);
      } else {
        setCurrent((prev) => (prev === "0" ? digit : prev + digit));
      }
    },
    [overwrite],
  );

  const inputDecimal = useCallback(() => {
    if (overwrite) {
      setCurrent("0.");
      setOverwrite(false);
    } else if (!current.includes(".")) {
      setCurrent(current + ".");
    }
  }, [current, overwrite]);

  // Handle operators (+, -, *, /, %)
  const chooseOperation = useCallback(
    (op) => {
      if (current === "Error") return;

      if (previous && operation && !overwrite) {
        // Compute previous expression first (chaining)
        const computed = calculate(previous, current, operation);
        setPrevious(computed);
        setCurrent(computed);
      } else {
        setPrevious(current);
      }
      setOperation(op);
      setOverwrite(true);
    },
    [current, previous, operation, overwrite],
  );

  // Equals
  const evaluate = useCallback(() => {
    if (!previous || !operation || overwrite) return;
    const result = calculate(previous, current, operation);
    setCurrent(String(result));
    setPrevious("");
    setOperation("");
    setOverwrite(true);
  }, [previous, operation, current, overwrite]);

  // Clear everything
  const clear = useCallback(() => {
    setCurrent("0");
    setPrevious("");
    setOperation("");
    setOverwrite(false);
  }, []);

  // Sign flip (±)
  const toggleSign = useCallback(() => {
    const newValue = parseFloat(current) * -1;
    setCurrent(String(newValue));
  }, [current]);

  return {
    display: current, // what to show on screen
    inputDigit,
    inputDecimal,
    chooseOperation,
    evaluate,
    clear,
    toggleSign,
  };
}
