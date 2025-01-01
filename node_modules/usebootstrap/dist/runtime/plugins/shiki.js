import { createHighlighter } from "shiki";
import { defineNuxtPlugin } from "#imports";
let highlighter;
const gethighlighter = async () => {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["snazzy-light", "min-dark"],
      langs: ["vue", "shellscript", "scss"]
    });
  }
  return highlighter;
};
export default defineNuxtPlugin(async (nuxtApp) => {
  const hl = await gethighlighter();
  nuxtApp.provide("shiki", (code, options) => hl.codeToHtml(code, options));
});
