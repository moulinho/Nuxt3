import type { ProviderGetImage } from '@nuxt/image';
type ImageOptimizations = {
    width?: number;
    height?: number;
    fit?: string | 'clip' | 'crop' | 'scale' | 'max';
    format?: string | 'jpg' | 'png' | 'webp' | 'avif' | 'auto_image';
    quality?: number;
};
export declare function getImageFormat(format?: string): string;
export declare function optimizeHygraphImage(baseurl: string, url: string, optimizations: ImageOptimizations): string;
export declare const getImage: ProviderGetImage;
export {};
