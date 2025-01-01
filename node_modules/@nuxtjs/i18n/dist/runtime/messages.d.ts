import type { I18nOptions, Locale, FallbackLocale, LocaleMessages, DefineLocaleMessage } from 'vue-i18n';
import type { NuxtApp } from '#app';
import type { DeepRequired } from 'ts-essentials';
import type { VueI18nConfig, NuxtI18nOptions } from '../types.js';
import type { CoreContext } from '@intlify/h3';
export type LocaleLoader = {
    key: string;
    load: () => Promise<any>;
    cache: boolean;
};
export declare function loadVueI18nOptions(vueI18nConfigs: VueI18nConfig[], nuxt: Pick<NuxtApp, 'runWithContext'>): Promise<I18nOptions>;
export declare function makeFallbackLocaleCodes(fallback: FallbackLocale, locales: Locale[]): Locale[];
export declare function loadInitialMessages<Context extends NuxtApp = NuxtApp>(messages: LocaleMessages<DefineLocaleMessage>, localeLoaders: Record<Locale, LocaleLoader[]>, options: Pick<DeepRequired<NuxtI18nOptions<Context>>, 'defaultLocale' | 'lazy'> & {
    initialLocale: Locale;
    fallbackLocale: FallbackLocale;
    localeCodes: string[];
}): Promise<Record<string, any>>;
export declare function loadLocale(locale: Locale, localeLoaders: Record<Locale, LocaleLoader[]>, setter: (locale: Locale, message: LocaleMessages<DefineLocaleMessage>) => void): Promise<void>;
type LocaleLoaderMessages = CoreContext['messages'] | LocaleMessages<DefineLocaleMessage>;
export declare function loadAndSetLocaleMessages(locale: Locale, localeLoaders: Record<Locale, LocaleLoader[]>, messages: LocaleLoaderMessages): Promise<void>;
export {};
