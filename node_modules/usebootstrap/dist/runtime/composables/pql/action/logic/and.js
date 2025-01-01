import { evaluate } from "../../evaluate.js";
export function and(values, data) {
  return values.every((value) => evaluate(value, data));
}
