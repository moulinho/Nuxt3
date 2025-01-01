import { evaluate } from "../../evaluate.js";
export function or(values, data) {
  return values.some((value) => evaluate(value, data));
}
