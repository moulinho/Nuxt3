import { joinURL } from "ufo";
import { createOperationsGenerator } from "#image";
export const operationsGenerator = createOperationsGenerator({
  joinWith: "&"
});
export const getImage = (src, { modifiers = {}, baseURL } = {}) => {
  let transforms = modifiers.transforms;
  if (transforms && Array.isArray(transforms) && transforms.length > 0) {
    transforms = Array.from(new Set(transforms.map((obj) => JSON.stringify(obj)))).map((value) => JSON.parse(value));
    modifiers.transforms = new URLSearchParams(JSON.stringify(transforms)).toString().replace(/=+$/, "");
  }
  const operations = operationsGenerator(modifiers);
  return {
    url: joinURL(baseURL, src + (operations ? "?" + operations : ""))
  };
};
