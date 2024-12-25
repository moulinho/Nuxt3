// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/dist/tabler.min.css",
    "~/assets/dist/tabler-vendors.min.css",
  ],
  modules: [
     'usebootstrap',
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
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
    locales: ["en","fr"],
    defaultLocale:'en',
    customRoutes:'config',
    pages:{
      login:{
        en:'/login',
        fr:'/connexion'
      }
    },
    vueI18n: {
      legacy: false,
      locale: "fr",
      messages: {
        fr: {
          clearBasket: "vider le panier",
          login: "Se connecter",
        },
        en: {
          clearBasket: "Clear",
          login: "Login",
        },
      },
    },
  },
  imports: { dirs: ["stores"] }, //importation des contenu du dossier stores
  image: {
    domains: ["https://api.escuelajs.co"],
  },
  runtimeConfig: {
    public: {
      apiBase: "https://api.escuelajs.co/api/v1/products/",
    },
  },
  // ssr:false
  // routeRules:{
  //   '/product/**':{ static:true },
  //   // '/cart/**':{ssr:false}
  // }
});