import { evaluate } from "../../evaluate.js";
export function reduce(values, data) {
  const [array, rule, initial] = values;
  return evaluate(array, data).reduce((acc, item) => evaluate(rule, { ...data, acc, item }), evaluate(initial, data));
}
