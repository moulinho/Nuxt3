import { joinURL, encodePath } from "ufo";
import { defu } from "defu";
import { createOperationsGenerator } from "#image";
const convertHexToRgbFormat = (value) => value.startsWith("#") ? value.replace("#", "rgb_") : value;
const removePathExtension = (value) => value.replace(/\.[^/.]+$/, "");
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    fit: "c",
    width: "w",
    height: "h",
    format: "f",
    quality: "q",
    background: "b",
    rotate: "a",
    roundCorner: "r",
    gravity: "g",
    effect: "e",
    color: "co",
    flags: "fl",
    dpr: "dpr",
    opacity: "o",
    overlay: "l",
    underlay: "u",
    transformation: "t",
    zoom: "z",
    colorSpace: "cs",
    customFunc: "fn",
    density: "dn",
    aspectRatio: "ar",
    blur: "e_blur"
  },
  valueMap: {
    fit: {
      fill: "fill",
      inside: "pad",
      outside: "lpad",
      cover: "lfill",
      contain: "scale",
      minCover: "mfit",
      minInside: "mpad",
      thumbnail: "thumb",
      cropping: "crop",
      coverLimit: "limit"
    },
    format: {
      jpeg: "jpg"
    },
    background(value) {
      return convertHexToRgbFormat(value);
    },
    color(value) {
      return convertHexToRgbFormat(value);
    },
    gravity: {
      auto: "auto",
      subject: "auto:subject",
      face: "face",
      sink: "sink",
      faceCenter: "face:center",
      multipleFaces: "faces",
      multipleFacesCenter: "faces:center",
      north: "north",
      northEast: "north_east",
      northWest: "north_west",
      west: "west",
      southWest: "south_west",
      south: "south",
      southEast: "south_east",
      east: "east",
      center: "center"
    }
  },
  joinWith: ",",
  formatter: (key, value) => key.includes("_") ? `${key}:${value}` : `${key}_${value}`
});
const defaultModifiers = {
  format: "auto",
  quality: "auto"
};
const REMOTE_MAPPING_RE = /\/image\/upload\/(.*)$/;
export const getImage = (src, { modifiers = {}, baseURL = "/" } = {}) => {
  const mergeModifiers = defu(modifiers, defaultModifiers);
  const operations = operationsGenerator(mergeModifiers);
  const srcMapping = src.match(REMOTE_MAPPING_RE)?.[1];
  if (srcMapping) {
    baseURL = src.replace(srcMapping, "");
    src = srcMapping;
  }
  const remoteFolderMapping = baseURL.match(REMOTE_MAPPING_RE);
  if (remoteFolderMapping?.length >= 1) {
    const remoteFolder = remoteFolderMapping[1];
    const baseURLWithoutRemoteFolder = baseURL.replace(remoteFolder, "");
    return {
      url: joinURL(baseURLWithoutRemoteFolder, operations, remoteFolder, src)
    };
  } else if (/\/image\/fetch\/?/.test(baseURL)) {
    src = encodePath(src);
  } else {
    src = removePathExtension(src);
  }
  return {
    url: joinURL(baseURL, operations, src)
  };
};
