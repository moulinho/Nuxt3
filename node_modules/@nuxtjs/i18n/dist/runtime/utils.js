import { joinURL, isEqual } from "ufo";
import { isString, isFunction, isObject } from "@intlify/shared";
import { navigateTo, useNuxtApp, useRouter, useRuntimeConfig, useState } from "#imports";
import {
  NUXT_I18N_MODULE_ID,
  isSSG,
  localeLoaders,
  normalizedLocales
} from "#build/i18n.options.mjs";
import {
  wrapComposable,
  detectBrowserLanguage,
  callVueI18nInterfaces,
  getVueI18nPropertyValue,
  defineGetter,
  getLocaleDomain,
  getDomainFromLocale,
  runtimeDetectBrowserLanguage,
  getHost,
  DetectFailure
} from "./internal.js";
import { loadLocale, makeFallbackLocaleCodes } from "./messages.js";
import {
  localeHead,
  localePath,
  localeRoute,
  getRouteBaseName,
  switchLocalePath,
  DefaultPrefixable,
  DefaultSwitchLocalePathIntercepter
} from "./routing/compatibles/index.js";
import { getLocale, setLocale, getLocaleCodes, getI18nTarget } from "./routing/utils.js";
import { createLocaleFromRouteGetter } from "./routing/extends/router.js";
export function _setLocale(i18n, locale) {
  return callVueI18nInterfaces(i18n, "setLocale", locale);
}
export function setCookieLocale(i18n, locale) {
  return callVueI18nInterfaces(i18n, "setLocaleCookie", locale);
}
export function setLocaleMessage(i18n, locale, messages) {
  return callVueI18nInterfaces(i18n, "setLocaleMessage", locale, messages);
}
export function mergeLocaleMessage(i18n, locale, messages) {
  return callVueI18nInterfaces(i18n, "mergeLocaleMessage", locale, messages);
}
async function onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, context) {
  return callVueI18nInterfaces(i18n, "onBeforeLanguageSwitch", oldLocale, newLocale, initial, context);
}
export function onLanguageSwitched(i18n, oldLocale, newLocale) {
  return callVueI18nInterfaces(i18n, "onLanguageSwitched", oldLocale, newLocale);
}
export async function finalizePendingLocaleChange(i18n) {
  return callVueI18nInterfaces(i18n, "finalizePendingLocaleChange");
}
export function initCommonComposableOptions(i18n) {
  return {
    i18n: i18n ?? useNuxtApp().$i18n,
    router: useRouter(),
    runtimeConfig: useRuntimeConfig(),
    metaState: useState("nuxt-i18n-meta", () => ({}))
  };
}
export async function loadAndSetLocale(newLocale, i18n, runtimeI18n, initial = false) {
  const { differentDomains, skipSettingLocaleOnNavigate, lazy } = runtimeI18n;
  const opts = runtimeDetectBrowserLanguage(runtimeI18n);
  const nuxtApp = useNuxtApp();
  const oldLocale = getLocale(i18n);
  const localeCodes = getLocaleCodes(i18n);
  function syncCookie(locale = oldLocale) {
    if (opts === false || !opts.useCookie) return;
    if (skipSettingLocaleOnNavigate) return;
    setCookieLocale(i18n, locale);
  }
  __DEBUG__ && console.log("setLocale: new -> ", newLocale, " old -> ", oldLocale, " initial -> ", initial);
  if (!newLocale) {
    syncCookie();
    return false;
  }
  if (!initial && differentDomains) {
    syncCookie();
    return false;
  }
  if (oldLocale === newLocale) {
    syncCookie();
    return false;
  }
  const localeOverride = await onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, nuxtApp);
  if (localeOverride && localeCodes.includes(localeOverride)) {
    if (oldLocale === localeOverride) {
      syncCookie();
      return false;
    }
    newLocale = localeOverride;
  }
  if (lazy) {
    const i18nFallbackLocales = getVueI18nPropertyValue(i18n, "fallbackLocale");
    const setter = (locale, message) => mergeLocaleMessage(i18n, locale, message);
    if (i18nFallbackLocales) {
      const fallbackLocales = makeFallbackLocaleCodes(i18nFallbackLocales, [newLocale]);
      await Promise.all(fallbackLocales.map((locale) => loadLocale(locale, localeLoaders, setter)));
    }
    await loadLocale(newLocale, localeLoaders, setter);
  }
  if (skipSettingLocaleOnNavigate) {
    return false;
  }
  syncCookie(newLocale);
  setLocale(i18n, newLocale);
  await onLanguageSwitched(i18n, oldLocale, newLocale);
  return true;
}
export function createLogger(label) {
  return {
    log: console.log.bind(console, `${label}:`)
    // change to this after implementing logger across runtime code
    // log: console.log.bind(console, `[i18n:${label}]`)
  };
}
export function detectLocale(route, routeLocaleGetter, initialLocaleLoader, detectLocaleContext, runtimeI18n) {
  const { strategy, defaultLocale, differentDomains, multiDomainLocales } = runtimeI18n;
  const { localeCookie } = detectLocaleContext;
  const _detectBrowserLanguage = runtimeDetectBrowserLanguage(runtimeI18n);
  const logger = createLogger("detectLocale");
  const initialLocale = isFunction(initialLocaleLoader) ? initialLocaleLoader() : initialLocaleLoader;
  __DEBUG__ && logger.log({ initialLocale });
  const detectedBrowser = detectBrowserLanguage(route, detectLocaleContext, initialLocale);
  __DEBUG__ && logger.log({ detectBrowserLanguage: detectedBrowser });
  if (detectedBrowser.reason === DetectFailure.SSG_IGNORE) {
    return initialLocale;
  }
  if (detectedBrowser.locale && detectedBrowser.from != null) {
    return detectedBrowser.locale;
  }
  let detected = "";
  __DEBUG__ && logger.log("1/3", { detected, strategy });
  if (differentDomains || multiDomainLocales) {
    detected ||= getLocaleDomain(normalizedLocales, strategy, route);
  } else if (strategy !== "no_prefix") {
    detected ||= routeLocaleGetter(route);
  }
  __DEBUG__ && logger.log("2/3", { detected, detectBrowserLanguage: _detectBrowserLanguage });
  const cookieLocale = _detectBrowserLanguage && _detectBrowserLanguage.useCookie && localeCookie;
  detected ||= cookieLocale || initialLocale || defaultLocale || "";
  __DEBUG__ && logger.log("3/3", { detected, cookieLocale, initialLocale, defaultLocale });
  return detected;
}
export function detectRedirect({
  route,
  targetLocale,
  routeLocaleGetter,
  calledWithRouting = false
}) {
  const nuxtApp = useNuxtApp();
  const common = initCommonComposableOptions();
  const { strategy, differentDomains } = common.runtimeConfig.public.i18n;
  __DEBUG__ && console.log("detectRedirect: targetLocale -> ", targetLocale);
  __DEBUG__ && console.log("detectRedirect: route -> ", route);
  __DEBUG__ && console.log("detectRedirect: calledWithRouting -> ", calledWithRouting, routeLocaleGetter(route.to));
  let redirectPath = "";
  const { fullPath: toFullPath } = route.to;
  const isStaticGenerate = isSSG && import.meta.server;
  if (!isStaticGenerate && !differentDomains && (calledWithRouting || strategy !== "no_prefix") && routeLocaleGetter(route.to) !== targetLocale) {
    const routePath = nuxtApp.$switchLocalePath(targetLocale) || nuxtApp.$localePath(toFullPath, targetLocale);
    __DEBUG__ && console.log("detectRedirect: calculate routePath -> ", routePath, toFullPath);
    if (isString(routePath) && routePath && !isEqual(routePath, toFullPath) && !routePath.startsWith("//")) {
      redirectPath = !(route.from && route.from.fullPath === routePath) ? routePath : "";
    }
  }
  if ((differentDomains || isSSG && import.meta.client) && routeLocaleGetter(route.to) !== targetLocale) {
    const routePath = switchLocalePath(common, targetLocale, route.to);
    __DEBUG__ && console.log("detectRedirect: calculate domain or ssg routePath -> ", routePath);
    if (isString(routePath) && routePath && !isEqual(routePath, toFullPath) && !routePath.startsWith("//")) {
      redirectPath = routePath;
    }
  }
  return redirectPath;
}
function isRootRedirectOptions(rootRedirect) {
  return isObject(rootRedirect) && "path" in rootRedirect && "statusCode" in rootRedirect;
}
const useRedirectState = () => useState(NUXT_I18N_MODULE_ID + ":redirect", () => "");
function _navigate(redirectPath, status) {
  return navigateTo(redirectPath, { redirectCode: status });
}
export async function navigate(args, { status = 302, enableNavigate = false } = {}) {
  const { nuxtApp, i18n, locale, route } = args;
  const { rootRedirect, differentDomains, multiDomainLocales, skipSettingLocaleOnNavigate, configLocales, strategy } = nuxtApp.$config.public.i18n;
  let { redirectPath } = args;
  __DEBUG__ && console.log(
    "navigate options ",
    status,
    rootRedirect,
    differentDomains,
    skipSettingLocaleOnNavigate,
    enableNavigate
  );
  __DEBUG__ && console.log("navigate isSSG", isSSG);
  if (route.path === "/" && rootRedirect) {
    if (isString(rootRedirect)) {
      redirectPath = "/" + rootRedirect;
    } else if (isRootRedirectOptions(rootRedirect)) {
      redirectPath = "/" + rootRedirect.path;
      status = rootRedirect.statusCode;
    }
    redirectPath = nuxtApp.$localePath(redirectPath, locale);
    __DEBUG__ && console.log("navigate: rootRedirect mode redirectPath -> ", redirectPath, " status -> ", status);
    return _navigate(redirectPath, status);
  }
  if (import.meta.client && skipSettingLocaleOnNavigate) {
    i18n.__pendingLocale = locale;
    i18n.__pendingLocalePromise = new Promise((resolve) => {
      i18n.__resolvePendingLocalePromise = resolve;
    });
    if (!enableNavigate) {
      return;
    }
  }
  if (multiDomainLocales && strategy === "prefix_except_default") {
    const host = getHost();
    const currentDomain = configLocales.find((locale2) => {
      if (typeof locale2 !== "string") {
        return locale2.defaultForDomains?.find((domain) => domain === host);
      }
      return false;
    });
    const defaultLocaleForDomain = typeof currentDomain !== "string" ? currentDomain?.code : void 0;
    if (route.path.startsWith(`/${defaultLocaleForDomain}`)) {
      return _navigate(route.path.replace(`/${defaultLocaleForDomain}`, ""), status);
    } else if (!route.path.startsWith(`/${locale}`) && locale !== defaultLocaleForDomain) {
      const getLocaleFromRoute = createLocaleFromRouteGetter();
      const oldLocale = getLocaleFromRoute(route.path);
      if (oldLocale !== "") {
        return _navigate(`/${locale + route.path.replace(`/${oldLocale}`, "")}`, status);
      } else {
        return _navigate(`/${locale + (route.path === "/" ? "" : route.path)}`, status);
      }
    } else if (redirectPath && route.path !== redirectPath) {
      return _navigate(redirectPath, status);
    }
    return;
  }
  if (!differentDomains) {
    if (redirectPath) {
      return _navigate(redirectPath, status);
    }
  } else {
    const state = useRedirectState();
    __DEBUG__ && console.log("redirect state ->", state.value, "redirectPath -> ", redirectPath);
    if (state.value && state.value !== redirectPath) {
      if (import.meta.client) {
        state.value = "";
        window.location.assign(redirectPath);
      } else if (import.meta.server) {
        __DEBUG__ && console.log("differentDomains servermode ", redirectPath);
        state.value = redirectPath;
      }
    }
  }
}
export function injectNuxtHelpers(nuxt, i18n) {
  defineGetter(nuxt, "$i18n", getI18nTarget(i18n));
  defineGetter(nuxt, "$getRouteBaseName", wrapComposable(getRouteBaseName));
  defineGetter(nuxt, "$localePath", wrapComposable(localePath));
  defineGetter(nuxt, "$localeRoute", wrapComposable(localeRoute));
  defineGetter(nuxt, "$switchLocalePath", wrapComposable(switchLocalePath));
  defineGetter(nuxt, "$localeHead", wrapComposable(localeHead));
}
export function extendPrefixable(runtimeConfig = useRuntimeConfig()) {
  return (opts) => {
    __DEBUG__ && console.log("extendPrefixable", DefaultPrefixable(opts));
    return DefaultPrefixable(opts) && !runtimeConfig.public.i18n.differentDomains;
  };
}
export function extendSwitchLocalePathIntercepter(runtimeConfig = useRuntimeConfig()) {
  return (path, locale) => {
    if (runtimeConfig.public.i18n.differentDomains) {
      const domain = getDomainFromLocale(locale);
      __DEBUG__ && console.log("extendSwitchLocalePathIntercepter: domain -> ", domain, " path -> ", path);
      if (domain) {
        return joinURL(domain, path);
      } else {
        return path;
      }
    } else {
      return DefaultSwitchLocalePathIntercepter(path, locale);
    }
  };
}
export function extendBaseUrl() {
  return () => {
    const ctx = useNuxtApp();
    const { baseUrl, defaultLocale, differentDomains } = ctx.$config.public.i18n;
    if (isFunction(baseUrl)) {
      const baseUrlResult = baseUrl(ctx);
      __DEBUG__ && console.log("baseUrl: using localeLoader function -", baseUrlResult);
      return baseUrlResult;
    }
    const localeCode = isFunction(defaultLocale) ? defaultLocale() : defaultLocale;
    if (differentDomains && localeCode) {
      const domain = getDomainFromLocale(localeCode);
      if (domain) {
        __DEBUG__ && console.log("baseUrl: using differentDomains -", domain);
        return domain;
      }
    }
    if (baseUrl) {
      __DEBUG__ && console.log("baseUrl: using runtimeConfig -", baseUrl);
      return baseUrl;
    }
    return baseUrl;
  };
}
export function getNormalizedLocales(locales) {
  const normalized = [];
  for (const locale of locales) {
    if (isString(locale)) {
      normalized.push({ code: locale });
      continue;
    }
    normalized.push(locale);
  }
  return normalized;
}
