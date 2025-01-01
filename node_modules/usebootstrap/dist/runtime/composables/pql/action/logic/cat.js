import { evaluate } from "../../evaluate.js";
export function cat(values, data) {
  return values.map((value) => evaluate(value, data)).join("");
}
