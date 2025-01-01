import type { Composer, ComposerExtender, I18n, VueI18nExtender } from 'vue-i18n';
import type { LocaleObject, NuxtI18nOptions } from '#build/i18n.options.mjs';
/**
 * An options of Vue I18n Routing Plugin
 */
export interface VueI18nRoutingPluginOptions {
    /**
     * Whether to inject some option APIs style methods into Vue instance
     *
     * @defaultValue `true`
     */
    inject?: boolean;
    /**
     * @internal
     */
    __composerExtend?: ComposerExtender;
    /**
     * @internal
     */
    __vueI18nExtend?: VueI18nExtender;
}
export interface ExtendPropertyDescriptors {
    [key: string]: Pick<PropertyDescriptor, 'get'>;
}
export type ExtendComposerHook = (compser: Composer) => void;
export type ExtendVueI18nHook = (composer: Composer) => ExtendPropertyDescriptors;
export type ExtendExportedGlobalHook = (global: Composer) => ExtendPropertyDescriptors;
export interface ExtendHooks {
    onExtendComposer?: ExtendComposerHook;
    onExtendExportedGlobal?: ExtendExportedGlobalHook;
    onExtendVueI18n?: ExtendVueI18nHook;
}
export type VueI18nExtendOptions<Context = unknown> = Pick<NuxtI18nOptions<Context>, 'baseUrl'> & {
    locales?: string[] | LocaleObject[];
    localeCodes?: string[];
    context?: Context;
    hooks?: ExtendHooks;
};
export declare function extendI18n<Context = unknown, TI18n extends I18n = I18n>(i18n: TI18n, { locales, localeCodes, baseUrl, hooks, context }?: VueI18nExtendOptions<Context>): any;
