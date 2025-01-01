import type { ComputedRef, MaybeRef, Ref } from 'vue';
import type { VueCreateSitePathResolverOptions } from '../../types.js';
export declare function createSitePathResolver(options?: VueCreateSitePathResolverOptions): (path: MaybeRef<string>) => Ref<string>;
export declare function withSiteTrailingSlash(path: MaybeRef<string>): ComputedRef<string>;
export declare function withSiteUrl(path: MaybeRef<string>, options?: VueCreateSitePathResolverOptions): ComputedRef<string>;
