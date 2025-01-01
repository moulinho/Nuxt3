import type { H3Event } from 'h3';
import type { SiteConfigInput, SiteConfigResolved, SiteConfigStack } from 'site-config-stack';
import type { Ref } from 'vue';
export type NuxtSiteConfig = Omit<SiteConfigResolved, 'url'> & Required<Pick<SiteConfigResolved, 'url'>>;
export type { SiteConfigInput, SiteConfigResolved, SiteConfigStack };
export type VueCreateSitePathResolverOptions = {
    [K in keyof CreateSitePathResolverOptions]: Ref<CreateSitePathResolverOptions[K] | undefined> | CreateSitePathResolverOptions[K] | undefined;
};
export interface CreateSitePathResolverOptions {
    canonical?: boolean;
    absolute?: boolean;
    withBase?: boolean;
}
export interface ModuleRuntimeConfig {
    debug?: boolean;
    stack?: Partial<SiteConfigInput>[];
    version: string;
}
export interface HookSiteConfigInitContext {
    event: H3Event;
    siteConfig: SiteConfigStack;
}
