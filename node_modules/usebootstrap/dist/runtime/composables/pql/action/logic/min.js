import { evaluate } from "../../evaluate.js";
export function min(values, data) {
  return Math.min(...values.map((value) => evaluate(value, data)));
}
