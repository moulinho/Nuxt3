import { findBrowserLocale, getComposer } from "vue-i18n-routing";
import { useRoute, useRouter, useRequestHeaders, useCookie as _useCookie, useNuxtApp } from "#imports";
import { parseAcceptLanguage } from "#build/i18n.internal.mjs";
import { nuxtI18nInternalOptions, nuxtI18nOptionsDefault, localeCodes as _localeCodes } from "#build/i18n.options.mjs";
import {
  useRouteBaseName as _useRouteBaseName,
  useLocalePath as _useLocalePath,
  useLocaleRoute as _useLocaleRoute,
  useSwitchLocalePath as _useSwitchLocalePath,
  useLocaleHead as _useLocaleHead
} from "vue-i18n-routing";
export * from "vue-i18n";
export function useRouteBaseName(route = useRoute()) {
  const router = useRouter();
  return _useRouteBaseName(route, { router });
}
export function useLocalePath(options = {}) {
  const i18n = options.i18n || getComposer(useNuxtApp().$i18n);
  const route = useRoute();
  const router = useRouter();
  return _useLocalePath({
    router,
    route,
    i18n
  });
}
export function useLocaleRoute(options = {}) {
  const i18n = options.i18n || getComposer(useNuxtApp().$i18n);
  const route = useRoute();
  const router = useRouter();
  return _useLocaleRoute({
    router,
    route,
    i18n
  });
}
export function useSwitchLocalePath(options = {}) {
  const i18n = options.i18n || getComposer(useNuxtApp().$i18n);
  const route = useRoute();
  const router = useRouter();
  return _useSwitchLocalePath({
    router,
    route,
    i18n
  });
}
export function useLocaleHead(options = {
  addDirAttribute: false,
  addSeoAttributes: false,
  identifierAttribute: "hid"
}) {
  const { addDirAttribute, addSeoAttributes, identifierAttribute } = options;
  const i18n = options.i18n || getComposer(useNuxtApp().$i18n);
  const route = useRoute();
  const router = useRouter();
  return _useLocaleHead({
    addDirAttribute,
    addSeoAttributes,
    identifierAttribute,
    router,
    route,
    i18n
  });
}
export function useBrowserLocale(normalizedLocales = nuxtI18nInternalOptions.__normalizedLocales) {
  const headers = useRequestHeaders(["accept-language"]);
  return findBrowserLocale(
    normalizedLocales,
    process.client ? navigator.languages : parseAcceptLanguage(headers["accept-language"] || "")
  ) || null;
}
export function useCookieLocale({
  useCookie = nuxtI18nOptionsDefault.detectBrowserLanguage.useCookie,
  cookieKey = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieKey,
  localeCodes = _localeCodes
}) {
  const locale = ref("");
  if (useCookie) {
    let code = null;
    if (process.client) {
      const cookie = _useCookie(cookieKey);
      code = cookie.value;
    } else if (process.server) {
      const cookie = useRequestHeaders(["cookie"]);
      code = cookie[cookieKey];
    }
    if (code && localeCodes.includes(code)) {
      locale.value = code;
    }
  }
  return locale;
}
const warnRuntimeUsage = (method) => console.warn(
  method + "() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect."
);
export function defineI18nRoute(route) {
  if (process.dev) {
    warnRuntimeUsage("defineI18nRoute");
  }
}
