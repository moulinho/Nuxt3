import { useRouteBaseName as _useRouteBaseName, useLocalePath as _useLocalePath, useLocaleRoute as _useLocaleRoute, useSwitchLocalePath as _useSwitchLocalePath, useLocaleHead as _useLocaleHead } from 'vue-i18n-routing';
import type { Ref } from 'vue';
import type { DetectBrowserLanguageOptions } from '#build/i18n.options.mjs';
export * from 'vue-i18n';
export type { LocaleObject } from 'vue-i18n-routing';
import type { Locale } from 'vue-i18n';
export declare function useRouteBaseName(route?: NonNullable<Parameters<typeof _useRouteBaseName>[0]>): ReturnType<typeof _useRouteBaseName>;
export declare function useLocalePath(options?: Pick<NonNullable<Parameters<typeof _useLocalePath>[0]>, 'i18n'>): ReturnType<typeof _useLocalePath>;
export declare function useLocaleRoute(options?: Pick<NonNullable<Parameters<typeof _useLocaleRoute>[0]>, 'i18n'>): ReturnType<typeof _useLocaleRoute>;
export declare function useSwitchLocalePath(options?: Pick<NonNullable<Parameters<typeof _useSwitchLocalePath>[0]>, 'i18n'>): ReturnType<typeof _useSwitchLocalePath>;
export declare function useLocaleHead(options?: Pick<NonNullable<Parameters<typeof _useLocaleHead>[0]>, 'i18n' | 'addDirAttribute' | 'addSeoAttributes' | 'identifierAttribute'>): ReturnType<typeof _useLocaleHead>;
export declare function useBrowserLocale(normalizedLocales?: any): string | null;
export declare function useCookieLocale({ useCookie, cookieKey, localeCodes }: Pick<DetectBrowserLanguageOptions, 'useCookie' | 'cookieKey'> & {
    localeCodes: readonly string[];
}): Ref<string>;
/**
 * TODO:
 *  `paths`, `locales` completions like `unplugin-vue-router`
 *  ref: https://github.com/posva/unplugin-vue-router
 */
/**
 * The i18n custom route for page components
 */
export interface I18nRoute {
    /**
     * Customize page component routes per locale.
     *
     * @description You can specify static and dynamic paths for vue-router.
     */
    paths?: Record<Locale, string>;
    /**
     * Some locales to which the page component should be localized.
     */
    locales?: string[];
}
/**
 * Define custom route for page component
 *
 * @param route - The custou route
 */
export declare function defineI18nRoute(route: I18nRoute | false): void;
