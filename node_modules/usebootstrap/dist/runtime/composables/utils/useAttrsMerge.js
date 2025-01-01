import { computed, unref } from "#imports";
export const mergeRef = (...objects) => objects.reduce(
  (acc, cur) => {
    return computed(() => {
      return { ...unref(acc), ...unref(cur) };
    });
  }
);
export const mergeFunc = (...objects) => {
  const merged = {};
  objects.forEach((obj) => {
    const unrefObj = unref(obj);
    for (const key in unrefObj) {
      if (unrefObj.hasOwnProperty(key)) {
        if (typeof unrefObj[key] === "function") {
          if (!merged[key]) {
            merged[key] = [];
          }
          merged[key].push(unrefObj[key]);
        } else {
          if (unrefObj[key]) {
            merged[key] = unrefObj[key];
          }
        }
      }
    }
  });
  const result = {};
  for (const key in merged) {
    if (merged.hasOwnProperty(key)) {
      if (Array.isArray(merged[key])) {
        result[key] = (...args) => {
          merged[key].forEach((func) => func(...args));
        };
      } else {
        result[key] = merged[key];
      }
    }
  }
  return result;
};
