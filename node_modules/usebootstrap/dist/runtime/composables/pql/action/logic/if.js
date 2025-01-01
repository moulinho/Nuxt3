import { evaluate } from "../../evaluate.js";
export function ifOperator(values, data) {
  for (let i = 0; i < values.length - 1; i += 2) {
    if (evaluate(values[i], data)) {
      return evaluate(values[i + 1], data);
    }
  }
  if (values.length % 2 !== 0) {
    return evaluate(values[values.length - 1], data);
  }
  return null;
}
