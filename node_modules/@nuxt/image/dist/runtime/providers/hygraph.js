import { joinURL, parseURL, withTrailingSlash } from "ufo";
function getImageFormat(format) {
  let result = "auto_image";
  if (format && format !== "auto_image") {
    result = `output=format:${format}`;
  }
  return result;
}
const ID_RE = /([^/]+)\/?$/;
const COMBINED_ID_RE = /^\/(?<baseId>[^/]+)(?:\/.*)?\/(?<imageId>[^/]+)$/;
function splitUpURL(baseURL, url) {
  const baseId = parseURL(baseURL).pathname.match(ID_RE)?.[1];
  if (!baseId) {
    url = url.replace(withTrailingSlash(baseURL), "/");
    const groups = url.match(COMBINED_ID_RE)?.groups;
    if (!groups) {
      throw new TypeError("[nuxt] [image] [hygraph] Invalid image URL");
    }
    return groups;
  }
  const imageId = url.match(ID_RE)?.[0];
  if (!imageId) {
    throw new TypeError("[nuxt] [image] [hygraph] Invalid image URL");
  }
  return { baseId: "", imageId };
}
function optimizeHygraphImage(baseURL, url, optimizations) {
  const { baseId, imageId } = splitUpURL(baseURL, url);
  const imageFormat = getImageFormat(optimizations.format);
  const optimBase = "resize";
  const quality = optimizations.quality && imageFormat !== "auto_image" ? `quality=value:${optimizations.quality}/` : "";
  const optimList = [];
  for (const [key, value] of Object.entries(optimizations)) {
    if (key !== "format" && key !== "quality" && value !== void 0) {
      if (key === "fit" && value === "contain") {
        optimList.push("fit:max");
      } else {
        optimList.push(`${key}:${value}`);
      }
    }
  }
  const optim = `${optimBase}=${optimList.join(",")}`;
  const result = joinURL(baseURL, baseId, optim, quality, imageFormat, imageId);
  return result;
}
export const getImage = (src, { modifiers = {}, baseURL } = {}) => {
  const { width, height, fit, format, quality } = modifiers;
  if (!baseURL) {
    throw new Error("No Hygraph image base URL provided.");
  }
  return {
    url: optimizeHygraphImage(baseURL, src, { width, height, fit, format, quality })
  };
};
