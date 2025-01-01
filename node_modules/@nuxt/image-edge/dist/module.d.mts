import * as _nuxt_schema from '@nuxt/schema';
import { Nuxt } from '@nuxt/schema';
import { IPXOptions as IPXOptions$1, HTTPStorageOptions, NodeFSSOptions } from 'ipx';

interface ImageModifiers {
    width: number;
    height: number;
    fit: string;
    format: string;
    [key: string]: any;
}
interface ImageOptions {
    provider?: string;
    preset?: string;
    densities?: string;
    modifiers?: Partial<ImageModifiers>;
    [key: string]: any;
}
interface ImageSizesOptions extends ImageOptions {
    sizes: Record<string, string | number> | string;
}
type ProviderGetImage = (src: string, options: ImageOptions, ctx: ImageCTX) => ResolvedImage;
interface ImageProvider {
    defaults?: any;
    getImage: ProviderGetImage;
    validateDomains?: Boolean;
    supportsAlias?: Boolean;
}
interface CreateImageOptions {
    providers: {
        [name: string]: {
            defaults: any;
            provider: ImageProvider;
        };
    };
    nuxt: {
        baseURL: string;
    };
    presets: {
        [name: string]: ImageOptions;
    };
    provider: string;
    screens: Record<string, number>;
    alias: Record<string, string>;
    domains: string[];
    densities: number[];
    format: string[];
    quality?: number;
}
interface ImageInfo {
    width: number;
    height: number;
    placeholder?: string;
}
interface ResolvedImage {
    url: string;
    format?: string;
    getMeta?: () => Promise<ImageInfo>;
}
interface ImageSizes {
    srcset: string;
    sizes: string | undefined;
    src: string;
}
interface Img {
    (source: string, modifiers?: ImageOptions['modifiers'], options?: ImageOptions): ResolvedImage['url'];
    options: CreateImageOptions;
    getImage: (source: string, options?: ImageOptions) => ResolvedImage;
    getSizes: (source: string, options?: ImageOptions, sizes?: string[]) => ImageSizes;
    getMeta: (source: string, options?: ImageOptions) => Promise<ImageInfo>;
}
type $Img = Img & {
    [preset: string]: $Img;
};
interface ImageCTX {
    options: CreateImageOptions;
    $img?: $Img;
}
interface ImageSize {
    width: number;
    media: string;
    breakpoint: number;
    format: string;
    url: string;
}
interface RuntimePlaceholder extends ImageInfo {
    url: string;
}
type OperationFormatter = (key: string, value: string) => string;
type OperationMapper = {
    [key: string]: string | false;
} | ((key: string) => string);
interface OperationGeneratorConfig {
    keyMap?: OperationMapper;
    formatter?: OperationFormatter;
    joinWith?: string;
    valueMap?: {
        [key: string]: OperationMapper;
    };
}
type MapToStatic = (image: ResolvedImage, input: string) => string;
interface ImageSizesVariant {
    size?: string;
    screenMaxWidth: number;
    _cWidth: number;
    _cHeight?: number | undefined;
}

type IPXRuntimeConfig = Omit<IPXOptions$1, 'storage' | 'httpStorage'> & {
    http: HTTPStorageOptions;
    fs: NodeFSSOptions;
} & {
    baseURL: string;
};
declare module 'nitropack' {
    interface NitroRuntimeConfig {
        ipx?: IPXRuntimeConfig;
    }
}

type ProviderSetup = (providerOptions: ImageModuleProvider, moduleOptions: ModuleOptions, nuxt: Nuxt) => void | Promise<void>;
interface InputProvider<T = any> {
    name?: string;
    provider?: string;
    options?: T;
    setup?: ProviderSetup;
}
interface CloudinaryModifiers extends ImageModifiers {
    format: string;
    quality: string;
    background: string;
    rotate: 'auto_right' | 'auto_left' | 'ignore' | 'vflip' | 'hflip' | number;
    roundCorner: string;
    gravity: string;
    effect: string;
    color: string;
    flags: string;
    dpr: string;
    opacity: number;
    overlay: string;
    underlay: string;
    transformation: string;
    zoom: number;
    colorSpace: string;
    customFunc: string;
    density: number;
    aspectRatio: string;
}
interface CloudinaryOptions {
    baseURL: string;
    modifiers: Partial<CloudinaryModifiers>;
    [key: string]: any;
}
interface UploadcareModifiers extends ImageModifiers {
    format: 'jpeg' | 'png' | 'webp' | 'auto';
    quality: 'smart' | 'smart_retina' | 'normal' | 'better' | 'best' | 'lighter' | 'lightest';
    progressive: 'yes' | 'no';
    strip_meta: 'all' | 'none' | 'sensitive';
    preview: `${number}x${number}`;
    resize: `${number}x${number}` | `${number}x` | `x${number}`;
    smart_resize: `${number}x${number}`;
    crop: string | string[];
    scale_crop: string | string[];
    border_radius: string | string[];
    setfill: string;
    zoom_objects: string;
}
interface UploadcareOptions {
    cdnURL: string;
    modifiers: Partial<UploadcareModifiers>;
    [key: string]: any;
}
interface IPXModifiers extends ImageModifiers {
    format: 'jpeg' | 'jpg' | 'png' | 'webp' | 'avif' | 'gif' | 'heif' | 'tiff' | 'auto' | string;
    fit: 'contain' | 'cover' | 'fill' | 'inside' | 'outside' | string;
    resize: string;
    quality: number | string;
    background: string;
    position: string;
    enlarge: true | 'true';
    kernel: 'nearest' | 'cubic' | 'mitchell' | 'lanczos2' | 'lanczos3' | string;
    trim: number | string;
    extend: string;
    extract: string;
    rotate: number | string;
    flip: true | 'true';
    flop: true | 'true';
    sharpen: number | string;
    median: number | string;
    blur: number | string;
    flatten: true | 'true';
    gamma: string;
    negate: true | 'true';
    normalize: true | 'true';
    threshold: number | string;
    modulate: string;
    tint: number | string;
    grayscale: true | 'true';
    animated: true | 'true';
}
interface IPXOptions extends Omit<IPXRuntimeConfig, 'alias'> {
    modifiers: Partial<IPXModifiers>;
}
interface ImageProviders {
    cloudflare?: any;
    cloudinary?: Partial<CloudinaryOptions>;
    contentful?: any;
    cloudimage?: any;
    sirv?: any;
    fastly?: any;
    glide?: any;
    gumlet?: any;
    imagekit?: any;
    imgix?: any;
    layer0?: any;
    edgio?: any;
    prismic?: any;
    twicpics?: any;
    storyblok?: any;
    wagtail?: any;
    strapi?: any;
    imageengine?: any;
    uploadcare?: Partial<UploadcareOptions>;
    ipx?: Partial<IPXOptions>;
    static?: Partial<IPXOptions>;
}
interface ImageModuleProvider {
    name: string;
    importName: string;
    options: any;
    provider: string;
    runtime: string;
    runtimeOptions: any;
    setup: ProviderSetup;
}

interface ModuleOptions extends ImageProviders {
    inject: boolean;
    provider: CreateImageOptions['provider'];
    presets: {
        [name: string]: ImageOptions;
    };
    dir: string;
    domains: string[];
    alias: Record<string, string>;
    screens: CreateImageOptions['screens'];
    providers: {
        [name: string]: InputProvider | any;
    };
    densities: number[];
    format: CreateImageOptions['format'];
    quality?: CreateImageOptions['quality'];
    [key: string]: any;
}

declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

export { type $Img, type CloudinaryModifiers, type CloudinaryOptions, type CreateImageOptions, type IPXModifiers, type IPXOptions, type ImageCTX, type ImageInfo, type ImageModifiers, type ImageModuleProvider, type ImageOptions, type ImageProvider, type ImageProviders, type ImageSize, type ImageSizes, type ImageSizesOptions, type ImageSizesVariant, type Img, type InputProvider, type MapToStatic, type ModuleOptions, type OperationFormatter, type OperationGeneratorConfig, type OperationMapper, type ProviderGetImage, type ProviderSetup, type ResolvedImage, type RuntimePlaceholder, type UploadcareModifiers, type UploadcareOptions, _default as default };
