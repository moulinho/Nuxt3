import { joinURL, hasProtocol, withTrailingSlash } from "ufo";
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
      //   case 'fill':
      //   case 'inside':
      //   case 'outside':
      //     modifiers.crop = modifiers.smart_resize
      //     break
      default:
        modifiers.smart_resize = modifiers.resize;
        delete modifiers.resize;
        break;
    }
    delete modifiers.fit;
  }
  const operations = operationsGenerator(modifiers);
  const base = hasProtocol(uuid) ? "" : cdnURL || "https://ucarecdn.com";
  const url = withTrailingSlash(joinURL(base, uuid, operations));
  return { url };
};
