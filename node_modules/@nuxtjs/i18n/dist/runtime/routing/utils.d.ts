import type { LocaleObject, Strategies, BaseUrlResolveHandler } from '#build/i18n.options.mjs';
import type { Composer, I18n, Locale, VueI18n } from 'vue-i18n';
export declare const inBrowser: boolean;
export declare function getNormalizedLocales(locales: string[] | LocaleObject[]): LocaleObject[];
export declare function isVueI18n(target: I18n | VueI18n | Composer): target is VueI18n;
export declare function getI18nTarget(i18n: I18n | VueI18n | Composer): Composer<{}, {}, {}, string, never, string> | VueI18n<{}, {}, {}, string, never, string, Composer<{}, {}, {}, string, never, string>>;
export declare function getComposer(i18n: I18n | VueI18n | Composer): Composer;
/**
 * Get a locale
 *
 * @param i18n - An [I18n](https://vue-i18n.intlify.dev/api/general.html#i18n) instance or a [Composer](https://vue-i18n.intlify.dev/api/composition.html#composer) instance
 *
 * @returns A locale
 */
export declare function getLocale(i18n: I18n | Composer | VueI18n): Locale;
export declare function getLocales(i18n: I18n | VueI18n | Composer): string[] | LocaleObject[];
export declare function getLocaleCodes(i18n: I18n | VueI18n | Composer): string[];
/**
 * Set a locale
 *
 * @param i18n - An [I18n](https://vue-i18n.intlify.dev/api/general.html#i18n) instance or a [Composer](https://vue-i18n.intlify.dev/api/composition.html#composer) instance
 * @param locale - A target locale
 */
export declare function setLocale(i18n: I18n | Composer, locale: Locale): void;
export declare function adjustRoutePathForTrailingSlash(pagePath: string, trailingSlash: boolean, isChildWithRelativePath: boolean): string;
export declare function getRouteName(routeName?: string | symbol | null): string;
export declare function getLocaleRouteName(routeName: symbol | string | null | undefined, locale: Locale, { defaultLocale, strategy, routesNameSeparator, defaultLocaleRouteNameSuffix, differentDomains }: {
    defaultLocale: string;
    strategy: Strategies;
    routesNameSeparator: string;
    defaultLocaleRouteNameSuffix: string;
    differentDomains: boolean;
}): string;
/**
 * Resolve base url
 *
 * @param baseUrl - A base url to resolve on SEO and domain. if you want to resolve with dynamically, you can spacify {@link BaseUrlResolveHandler}
 * @param context - A context to resolve base url, if you want to resolve base url with {@link BaseUrlResolveHandler}
 *
 * @returns A resolved base url
 */
export declare function resolveBaseUrl<Context = unknown>(baseUrl: string | BaseUrlResolveHandler<Context>, context: Context): string;
/**
 * The browser locale info
 *
 * @remarks
 * This type is used by {@link FindBrowserLocaleOptions#sorter | sorter} in {@link findBrowserLocale} function
 */
export interface BrowserLocale {
    /**
     * The locale code, such as BCP 47 (e.g `en-US`), or `ja`
     */
    code: string;
    /**
     * The score number
     *
     * @remarks
     * The score number that is used by `sorter` of {@link FindBrowserLocaleOptions}
     */
    score: number;
}
/**
 * The target locale info
 *
 * @remarks
 * This type is used by {@link BrowserLocaleMatcher} first argument
 */
export type TargetLocale = Required<Pick<LocaleObject, 'code' | 'language'>>;
/**
 * The browser locale matcher
 *
 * @remarks
 * This matcher is used by {@link findBrowserLocale} function
 *
 * @param locales - The target {@link LocaleObject | locale} list
 * @param browserLocales - The locale code list that is used in browser
 *
 * @returns The matched {@link BrowserLocale | locale info}
 */
export type BrowserLocaleMatcher = (locales: TargetLocale[], browserLocales: string[]) => BrowserLocale[];
/**
 * The options for {@link findBrowserLocale} function
 */
export interface FindBrowserLocaleOptions {
    matcher?: BrowserLocaleMatcher;
    comparer?: (a: BrowserLocale, b: BrowserLocale) => number;
}
declare function matchBrowserLocale(locales: TargetLocale[], browserLocales: string[]): BrowserLocale[];
/**
 * The default browser locale matcher
 */
export declare const DefaultBrowserLocaleMatcher: typeof matchBrowserLocale;
declare function compareBrowserLocale(a: BrowserLocale, b: BrowserLocale): number;
/**
 * The default browser locale comparer
 */
export declare const DefaultBrowerLocaleComparer: typeof compareBrowserLocale;
/**
 * Find the browser locale
 *
 * @param locales - The target {@link LocaleObject | locale} list
 * @param browserLocales - The locale code list that is used in browser
 * @param options - The options for {@link findBrowserLocale} function
 *
 * @returns The matched the locale code
 */
export declare function findBrowserLocale(locales: LocaleObject[], browserLocales: string[], { matcher, comparer }?: FindBrowserLocaleOptions): string;
export declare function getLocalesRegex(localeCodes: string[]): RegExp;
export {};
