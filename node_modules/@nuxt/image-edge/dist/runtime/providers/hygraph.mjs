import { joinURL } from "ufo";
export function getImageFormat(format) {
  let result = "auto_image";
  if (format && format !== "auto_image") {
    result = `output=format:${format === "jpeg" ? "jpg" : format}`;
  }
  return result;
}
export function optimizeHygraphImage(baseurl, url, optimizations) {
  baseurl = baseurl.replace(/\/+$/, "");
  const imageId = url.split(`${baseurl}/`)[1];
  const imageFormat = getImageFormat(optimizations.format);
  const optimBase = "resize";
  const quality = optimizations.quality ? `quality=value:${optimizations.quality}/compress/` : "";
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
  const result = joinURL(baseurl, imageFormat, optim, quality, imageId);
  return result;
}
export const getImage = (src, { modifiers = {}, baseurl } = {}) => {
  const {
    width,
    height,
    fit,
    format,
    quality
  } = modifiers;
  if (!baseurl) {
    baseurl = "https://media.graphassets.com";
  }
  return {
    url: optimizeHygraphImage(baseurl, src, { width, height, fit, format, quality })
  };
};
