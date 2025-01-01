import { type PrefixableOptions, type SwitchLocalePathIntercepter, type BaseUrlResolveHandler, type LocaleObject } from '#build/i18n.options.mjs';
import { callVueI18nInterfaces } from './internal.js';
import type { I18n, Locale, Composer, VueI18n } from 'vue-i18n';
import type { NuxtApp } from '#app';
import type { Ref } from '#imports';
import type { Router } from '#vue-router';
import type { DetectLocaleContext } from './internal.js';
import type { HeadSafe } from '@unhead/vue';
import { createLocaleFromRouteGetter, type GetLocaleFromRouteFunction } from './routing/extends/router.js';
import type { RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router';
import type { RuntimeConfig } from '@nuxt/schema';
import type { ModulePublicRuntimeConfig } from '../module.js';
export declare function _setLocale(i18n: I18n, locale: Locale): ReturnType<typeof callVueI18nInterfaces>;
export declare function setCookieLocale(i18n: I18n, locale: Locale): ReturnType<typeof callVueI18nInterfaces>;
export declare function setLocaleMessage(i18n: I18n, locale: Locale, messages: Record<string, any>): ReturnType<typeof callVueI18nInterfaces>;
export declare function mergeLocaleMessage(i18n: I18n, locale: Locale, messages: Record<string, any>): ReturnType<typeof callVueI18nInterfaces>;
export declare function onLanguageSwitched(i18n: I18n, oldLocale: string, newLocale: string): ReturnType<typeof callVueI18nInterfaces>;
export declare function finalizePendingLocaleChange(i18n: I18n): Promise<ReturnType<typeof callVueI18nInterfaces>>;
/**
 * Common options used internally by composable functions, these
 * are initialized when calling a wrapped composable function.
 *
 * @internal
 */
export type CommonComposableOptions = {
    router: Router;
    i18n: I18n;
    runtimeConfig: RuntimeConfig;
    metaState: Ref<Record<Locale, any>>;
};
export declare function initCommonComposableOptions(i18n?: I18n): CommonComposableOptions;
export declare function loadAndSetLocale(newLocale: string, i18n: I18n, runtimeI18n: ModulePublicRuntimeConfig['i18n'], initial?: boolean): Promise<boolean>;
type LocaleLoader = () => Locale;
/**
 * Used for runtime debug logs only
 */
export declare function createLogger(label: string): {
    log: (...args: any[]) => void;
};
export declare function detectLocale(route: string | RouteLocationNormalized | RouteLocationNormalizedLoaded, routeLocaleGetter: GetLocaleFromRouteFunction, initialLocaleLoader: Locale | LocaleLoader, detectLocaleContext: DetectLocaleContext, runtimeI18n: ModulePublicRuntimeConfig['i18n']): string;
export declare function detectRedirect({ route, targetLocale, routeLocaleGetter, calledWithRouting }: {
    route: {
        to: RouteLocationNormalized | RouteLocationNormalizedLoaded;
        from?: RouteLocationNormalized | RouteLocationNormalizedLoaded;
    };
    targetLocale: Locale;
    routeLocaleGetter: ReturnType<typeof createLocaleFromRouteGetter>;
    calledWithRouting?: boolean;
}): string;
type NavigateArgs = {
    nuxtApp: NuxtApp;
    i18n: I18n;
    redirectPath: string;
    locale: string;
    route: RouteLocationNormalized | RouteLocationNormalizedLoaded;
};
export declare function navigate(args: NavigateArgs, { status, enableNavigate }?: {
    status?: number;
    enableNavigate?: boolean;
}): Promise<any>;
export declare function injectNuxtHelpers(nuxt: NuxtApp, i18n: I18n | VueI18n | Composer): void;
export declare function extendPrefixable(runtimeConfig?: any): (opts: PrefixableOptions) => boolean;
export declare function extendSwitchLocalePathIntercepter(runtimeConfig?: any): SwitchLocalePathIntercepter;
export declare function extendBaseUrl(): BaseUrlResolveHandler<NuxtApp>;
export type HeadParam = Required<Pick<HeadSafe, 'meta' | 'link'>>;
export declare function getNormalizedLocales(locales: string[] | LocaleObject[]): LocaleObject[];
export {};
