import { joinURL } from "ufo";
import { formatter } from "./formatter.mjs";
import { keyMap } from "./keyMap.mjs";
import { valueMap } from "./valueMap.mjs";
import { createOperationsGenerator } from "#image";
const operationsGenerator = createOperationsGenerator({
  formatter,
  joinWith: ",",
  keyMap,
  valueMap
});
const getImage = (src, options, _ctx) => {
  const { projectName } = options;
  if (typeof projectName !== "string" || !projectName.trim()) {
    throw new TypeError("[nuxt] [image] [prepr] No project name provided.");
  }
  const fileBucket = "stream";
  const fileOperations = operationsGenerator(options.modifiers);
  const filePath = fileOperations ? joinURL(fileOperations, src) : src;
  const projectUrl = `https://${projectName.trim()}.${fileBucket}.prepr.io`;
  return {
    url: joinURL(projectUrl, filePath)
  };
};
export { getImage };
