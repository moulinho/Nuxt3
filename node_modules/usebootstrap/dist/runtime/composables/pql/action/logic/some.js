import { evaluate } from "../../evaluate.js";
export function some(values, data) {
  const [array, rule] = values;
  return evaluate(array, data).some((item) => evaluate(rule, { ...data, item }));
}
