import { isString, isSymbol, isFunction } from "@intlify/shared";
import { isRef, unref } from "#imports";
export const inBrowser = typeof window !== "undefined";
export function getNormalizedLocales(locales) {
  locales = locales || [];
  const normalized = [];
  for (const locale of locales) {
    if (isString(locale)) {
      normalized.push({ code: locale });
    } else {
      normalized.push(locale);
    }
  }
  return normalized;
}
function isI18nInstance(i18n) {
  return i18n != null && "global" in i18n && "mode" in i18n;
}
function isComposer(target) {
  return target != null && !("__composer" in target) && "locale" in target && isRef(target.locale);
}
export function isVueI18n(target) {
  return target != null && "__composer" in target;
}
export function getI18nTarget(i18n) {
  return isI18nInstance(i18n) ? i18n.global : i18n;
}
export function getComposer(i18n) {
  const target = getI18nTarget(i18n);
  if (isComposer(target)) return target;
  if (isVueI18n(target)) return target.__composer;
  return target;
}
export function getLocale(i18n) {
  return unref(getI18nTarget(i18n).locale);
}
export function getLocales(i18n) {
  return unref(getI18nTarget(i18n).locales);
}
export function getLocaleCodes(i18n) {
  return unref(getI18nTarget(i18n).localeCodes);
}
export function setLocale(i18n, locale) {
  const target = getI18nTarget(i18n);
  if (isRef(target.locale)) {
    target.locale.value = locale;
  } else {
    target.locale = locale;
  }
}
export function adjustRoutePathForTrailingSlash(pagePath, trailingSlash, isChildWithRelativePath) {
  return pagePath.replace(/\/+$/, "") + (trailingSlash ? "/" : "") || (isChildWithRelativePath ? "" : "/");
}
export function getRouteName(routeName) {
  if (isString(routeName)) return routeName;
  if (isSymbol(routeName)) return routeName.toString();
  return "(null)";
}
export function getLocaleRouteName(routeName, locale, {
  defaultLocale,
  strategy,
  routesNameSeparator,
  defaultLocaleRouteNameSuffix,
  differentDomains
}) {
  const localizedRoutes = strategy !== "no_prefix" || differentDomains;
  let name = getRouteName(routeName) + (localizedRoutes ? routesNameSeparator + locale : "");
  if (locale === defaultLocale && strategy === "prefix_and_default") {
    name += routesNameSeparator + defaultLocaleRouteNameSuffix;
  }
  return name;
}
export function resolveBaseUrl(baseUrl, context) {
  if (isFunction(baseUrl)) {
    return baseUrl(context);
  }
  return baseUrl;
}
function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
export const DefaultBrowserLocaleMatcher = matchBrowserLocale;
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
export const DefaultBrowerLocaleComparer = compareBrowserLocale;
export function findBrowserLocale(locales, browserLocales, { matcher = DefaultBrowserLocaleMatcher, comparer = DefaultBrowerLocaleComparer } = {}) {
  const normalizedLocales = [];
  for (const l of locales) {
    const { code } = l;
    const language = l.language || code;
    normalizedLocales.push({ code, language });
  }
  const matchedLocales = matcher(normalizedLocales, browserLocales);
  if (matchedLocales.length > 1) {
    matchedLocales.sort(comparer);
  }
  return matchedLocales.length ? matchedLocales[0].code : "";
}
export function getLocalesRegex(localeCodes) {
  return new RegExp(`^/(${localeCodes.join("|")})(?:/|$)`, "i");
}
