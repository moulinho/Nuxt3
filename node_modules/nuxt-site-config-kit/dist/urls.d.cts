import * as _nuxt_schema from '@nuxt/schema';

declare function withSiteTrailingSlash(path: string): string;
declare function createSitePathResolver(options?: {
    canonical?: boolean;
    absolute?: boolean;
    withBase?: boolean;
}, nuxt?: _nuxt_schema.Nuxt): (path: string) => string;
declare function withSiteUrl(path: string, options?: {
    withBase?: boolean;
    throwErrorOnMissingSiteUrl?: boolean;
}): string;

export { createSitePathResolver, withSiteTrailingSlash, withSiteUrl };
