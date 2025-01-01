import { evaluate } from "../../evaluate.js";
export function none(values, data) {
  const [array, rule] = values;
  return evaluate(array, data).every((item) => !evaluate(rule, { ...data, item }));
}
