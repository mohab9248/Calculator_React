// src/utils/calculate.js

export function calculate(prev, curr, operation) {
  const prevNum = parseFloat(prev);
  const currNum = parseFloat(curr);

  // Handle missing operands
  if (isNaN(prevNum) && operation) return curr;
  if (isNaN(currNum) && operation !== "√") return prev;

  let result;

  switch (operation) {
    case "+":
      result = prevNum + currNum;
      break;
    case "-":
      result = prevNum - currNum;
      break;
    case "*":
      result = prevNum * currNum;
      break;
    case "/":
      if (currNum === 0) return "Error";
      result = prevNum / currNum;
      break;
    case "%":
      // Percentage of previous: e.g., 50 + 10% = 50 + 5
      result = prevNum * (currNum / 100);
      break;
    default:
      return curr;
  }

  // Round to avoid floating point garbage (e.g., 0.1 + 0.2 = 0.30000000000000004)
  return Math.round(result * 1e12) / 1e12;
}
