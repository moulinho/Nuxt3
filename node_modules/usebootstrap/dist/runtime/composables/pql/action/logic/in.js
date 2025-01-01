import { evaluate } from "../../evaluate.js";
export function inOperator(values, data) {
  const [value, array] = values.map((v) => evaluate(v, data));
  return array.includes(value);
}
