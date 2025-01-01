import { joinURL, withTrailingSlash } from "ufo";
import { createOperationsGenerator } from "#image";
const operationsGenerator = createOperationsGenerator({
  joinWith: "",
  formatter: (key, value) => `-/${key}/${Array.isArray(value) ? value.join("/") : value}/`
});
export const getImage = (uuid, { modifiers, cdnURL = "" } = {}) => {
  if (modifiers?.width || modifiers?.height) {
    modifiers.resize = `${modifiers?.width || ""}x${modifiers?.height || ""}`;
    delete modifiers?.width;
    delete modifiers?.height;
  }
  if (modifiers?.fit) {
    switch (modifiers.fit) {
      case "cover":
        modifiers.scale_crop = [modifiers.resize, "center"];
        delete modifiers.resize;
        break;
      case "contain":
        modifiers.stretch = "off";
        break;
      default:
        modifiers.smart_resize = modifiers.resize;
        delete modifiers.resize;
        break;
    }
    delete modifiers.fit;
  }
  const operations = operationsGenerator(modifiers);
  const url = withTrailingSlash(joinURL(cdnURL || "https://ucarecdn.com", uuid, operations));
  return { url };
};
