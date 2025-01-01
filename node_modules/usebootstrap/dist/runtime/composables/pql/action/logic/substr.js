import { evaluate } from "../../evaluate.js";
export function substr(values, data) {
  const [str, start, length] = values.map((v) => evaluate(v, data));
  return str.substr(start, length);
}
