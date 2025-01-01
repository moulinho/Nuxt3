import { getRouteBaseName, localePath, localeRoute, switchLocalePath, localeHead } from 'vue-i18n-routing';
type GetRouteBaseName = typeof getRouteBaseName;
type LocalePath = typeof localePath;
type LocaleRoute = typeof localeRoute;
type LocaleHead = typeof localeHead;
type SwitchLocalePath = typeof switchLocalePath;
declare const _default: any;
export default _default;
declare module '#app' {
    interface NuxtApp {
        $getRouteBaseName: (...args: Parameters<GetRouteBaseName>) => ReturnType<GetRouteBaseName>;
        $localePath: (...args: Parameters<LocalePath>) => ReturnType<LocalePath>;
        $localeRoute: (...args: Parameters<LocaleRoute>) => ReturnType<LocaleRoute>;
        $localeHead: (...args: Parameters<LocaleHead>) => ReturnType<LocaleHead>;
        $switchLocalePath: (...args: Parameters<SwitchLocalePath>) => ReturnType<SwitchLocalePath>;
    }
}
