import { evaluate } from "../../evaluate.js";
export function max(values, data) {
  return Math.max(...values.map((value) => evaluate(value, data)));
}
