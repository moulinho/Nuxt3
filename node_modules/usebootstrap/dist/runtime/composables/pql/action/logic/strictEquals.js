import { evaluate } from "../../evaluate.js";
export function strictEquals(values, data) {
  return evaluate(values[0], data) === evaluate(values[1], data);
}
