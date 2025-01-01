import { evaluate } from "../../evaluate.js";
export function not(values, data) {
  return !evaluate(values[0], data);
}
