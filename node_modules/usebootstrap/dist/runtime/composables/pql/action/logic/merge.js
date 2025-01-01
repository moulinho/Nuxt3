import { evaluate } from "../../evaluate.js";
export function merge(values, data) {
  return values.reduce((acc, value) => acc.concat(evaluate(value, data)), []);
}
