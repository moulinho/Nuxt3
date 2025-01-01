import { evaluate } from "../../evaluate.js";
export function add(values, data) {
  return values.reduce((sum, value) => sum + evaluate(value, data), 0);
}
