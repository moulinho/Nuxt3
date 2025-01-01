import { evaluate } from "../../evaluate.js";
export function filter(values, data) {
  const [array, rule] = values;
  return evaluate(array, data).filter((item) => evaluate(rule, { ...data, item }));
}
