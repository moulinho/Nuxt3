import { getQuery, withBase, withQuery } from "ufo";
import { operationsGenerator } from "./imgix.mjs";
const unsplashCDN = "https://images.unsplash.com/";
export const getImage = (src, { modifiers = {}, baseURL = unsplashCDN } = {}) => {
  const operations = operationsGenerator(modifiers);
  return {
    url: withQuery(withBase(src, baseURL), getQuery("?" + operations))
  };
};
