import { createImage } from "./image.mjs";
import { imageOptions } from "#build/image-options";
import { useNuxtApp, useRuntimeConfig } from "#imports";
export const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
