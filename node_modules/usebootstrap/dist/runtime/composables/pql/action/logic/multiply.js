import { evaluate } from "../../evaluate.js";
export function multiply(values, data) {
  return values.reduce((product, value) => product * evaluate(value, data), 1);
}
