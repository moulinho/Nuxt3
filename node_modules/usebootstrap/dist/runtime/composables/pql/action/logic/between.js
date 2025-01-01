import { evaluate } from "../../evaluate.js";
export function between(values, data) {
  const [value, min, max] = values.map((v) => evaluate(v, data));
  return value >= min && value <= max;
}
