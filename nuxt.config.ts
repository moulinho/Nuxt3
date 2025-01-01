// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/dist/tabler.min.css",
    "~/assets/dist/tabler-vendors.min.css",
  ],
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [
          "defineStore",
          "acceptHMRUpdate",
          "storeToRefs",
        ],
      },
    ],
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
  ],
  i18n: {
    /* module options */
    locales: ["en", "fr"],
    defaultLocale: "fr",
    customRoutes: "config",
    pages: {
      login: {
        en: "/login",
        fr: "/connexion",
      },
    },
    vueI18n: "./nuxt-i18n.js", // Reference the file directly
  },
  imports: { dirs: ["stores"] }, // Importation of content from the stores directory
  image: {
    domains: ["https://api.escuelajs.co"],
  },
  runtimeConfig: {
    public: {
      apiBase: "https://api.escuelajs.co/api/v1/products/",
    },
  },
});
