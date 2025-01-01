import { evaluate } from "../../evaluate.js";
export function map(values, data) {
  const [array, rule] = values;
  return evaluate(array, data).map((item) => evaluate(rule, { ...data, item }));
}
