import * as _nuxt_schema from '@nuxt/schema';
import { LocaleObject, Strategies, I18nRoutingOptions } from 'vue-i18n-routing';
import { Locale, I18nOptions, LocaleMessages, DefineLocaleMessage } from 'vue-i18n';

type RedirectOnOptions = 'all' | 'root' | 'no prefix';
interface LazyOptions {
    skipNuxtState?: boolean;
}
interface DetectBrowserLanguageOptions {
    alwaysRedirect?: boolean;
    cookieCrossOrigin?: boolean;
    cookieDomain?: string | null;
    cookieKey?: string;
    cookieSecure?: boolean;
    fallbackLocale?: Locale | null;
    redirectOn?: RedirectOnOptions;
    useCookie?: boolean;
}
type LocaleInfo = {
    path?: string;
    paths?: string[];
} & LocaleObject;
interface RootRedirectOptions {
    path: string;
    statusCode: number;
}
type CustomRoutePages = {
    [key: string]: false | {
        [key: string]: false | string;
    };
};
type BeforeLanguageSwitchHandler = <Context = unknown>(oldLocale: string, newLocale: string, initialSetup: boolean, context: Context) => string | void;
type LanguageSwitchedHandler = (oldLocale: string, newLocale: string) => void;
type NuxtI18nOptions<Context = unknown> = {
    differentDomains?: boolean;
    onBeforeLanguageSwitch?: BeforeLanguageSwitchHandler;
    onLanguageSwitched?: LanguageSwitchedHandler;
    detectBrowserLanguage?: DetectBrowserLanguageOptions | false;
    langDir?: string | null;
    lazy?: boolean | LazyOptions;
    pages?: CustomRoutePages;
    customRoutes?: 'page' | 'config';
    /**
     * @deprecated `'parsePages' option is deprecated. Please use 'customRoutes' option instead. We will remove it in v8 official release.`
     */
    parsePages?: boolean;
    rootRedirect?: string | null | RootRedirectOptions;
    routesNameSeparator?: string;
    skipSettingLocaleOnNavigate?: boolean;
    strategy?: Strategies;
    vueI18n?: I18nOptions | string;
    types?: 'composition' | 'legacy';
    debug?: boolean;
    dynamicRouteParams?: boolean;
} & Pick<I18nRoutingOptions<Context>, 'baseUrl' | 'strategy' | 'defaultDirection' | 'defaultLocale' | 'defaultLocaleRouteNameSuffix' | 'locales' | 'routesNameSeparator' | 'trailingSlash'>;
type NuxtI18nInternalOptions = {
    __normalizedLocales?: LocaleObject[];
};

declare const _default: _nuxt_schema.NuxtModule<NuxtI18nOptions<unknown>>;

declare module '@nuxt/schema' {
    interface NuxtConfig {
        i18n?: NuxtI18nOptions;
    }
    interface NuxtHooks {
        'i18n:extend-messages': (messages: LocaleMessages<DefineLocaleMessage>[], localeCodes: string[]) => Promise<void>;
    }
}

export { BeforeLanguageSwitchHandler, CustomRoutePages, DetectBrowserLanguageOptions, LanguageSwitchedHandler, LazyOptions, LocaleInfo, NuxtI18nInternalOptions, NuxtI18nOptions, RedirectOnOptions, RootRedirectOptions, _default as default };
