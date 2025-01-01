declare function resolveSitePath(pathOrUrl: string, options: {
    siteUrl: string;
    trailingSlash?: boolean;
    base?: string;
    absolute?: boolean;
    withBase?: boolean;
}): string;
declare function isPathFile(path: string): boolean;
declare function fixSlashes(trailingSlash: boolean | undefined, pathOrUrl: string): string;

export { fixSlashes, isPathFile, resolveSitePath };
