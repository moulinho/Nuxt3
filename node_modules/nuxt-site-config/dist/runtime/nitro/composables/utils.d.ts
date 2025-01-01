import type { H3Event } from 'h3';
import type { CreateSitePathResolverOptions } from '../../types.js';
export declare function createSitePathResolver(e: H3Event, options?: CreateSitePathResolverOptions): (path: string) => string;
export declare function withSiteTrailingSlash(e: H3Event, path: string): string;
export declare function withSiteUrl(e: H3Event, path: string, options?: CreateSitePathResolverOptions): string;
