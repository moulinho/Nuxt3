import type { MaybeRef } from 'vue';
import type { PwaTransparentImageProps } from '#build/pwa-icons/PwaTransparentImage';
import type { PwaMaskableImageProps } from '#build/pwa-icons/PwaMaskableImage';
import type { PwaFaviconImageProps } from '#build/pwa-icons/PwaFaviconImage';
import type { PwaAppleImageProps } from '#build/pwa-icons/PwaAppleImage';
import type { PwaAppleSplashScreenImageProps } from '#build/pwa-icons/PwaAppleSplashScreenImage';
export interface PWAImage {
    image: string;
    alt?: string;
    width?: number;
    height?: number;
    crossorigin?: '' | 'anonymous' | 'use-credentials';
    loading?: 'lazy' | 'eager';
    decoding?: 'async' | 'auto' | 'sync';
    nonce?: string;
    [key: string]: any;
}
export interface PWAIcon {
    src: string;
    key: any;
    alt?: string;
    width?: number;
    height?: number;
    crossorigin?: '' | 'anonymous' | 'use-credentials';
    loading?: 'lazy' | 'eager';
    decoding?: 'async' | 'auto' | 'sync';
    nonce?: string;
    [key: string]: any;
}
type PWAImageType<T> = T extends 'transparent' ? PwaTransparentImageProps['image'] | (Omit<PWAImage, 'image'> & {
    image: PwaTransparentImageProps['image'];
}) : T extends 'maskable' ? PwaMaskableImageProps['image'] | Omit<PWAImage, 'image'> & {
    image: PwaMaskableImageProps['image'];
} : T extends 'favicon' ? PwaFaviconImageProps['image'] | Omit<PWAImage, 'image'> & {
    image: PwaFaviconImageProps['image'];
} : T extends 'apple' ? PwaAppleImageProps['image'] | Omit<PWAImage, 'image'> & {
    image: PwaAppleImageProps['image'];
} : T extends 'appleSplashScreen' ? PwaAppleSplashScreenImageProps['image'] | Omit<PWAImage, 'image'> & {
    image: PwaAppleSplashScreenImageProps['image'];
} : never;
export type TransparentImageType = MaybeRef<PWAImageType<'transparent'>>;
export type MaskableImageType = MaybeRef<PWAImageType<'maskable'>>;
export type FaviconImageType = MaybeRef<PWAImageType<'favicon'>>;
export type AppleImageType = MaybeRef<PWAImageType<'apple'>>;
export type AppleSplashScreenImageType = MaybeRef<PWAImageType<'appleSplashScreen'>>;
export declare function useTransparentPwaIcon(image: TransparentImageType): {
    icon: import("vue").ComputedRef<PWAIcon | undefined>;
};
export declare function useMaskablePwaIcon(image: MaskableImageType): {
    icon: import("vue").ComputedRef<PWAIcon | undefined>;
};
export declare function useFaviconPwaIcon(image: FaviconImageType): {
    icon: import("vue").ComputedRef<PWAIcon | undefined>;
};
export declare function useApplePwaIcon(image: AppleImageType): {
    icon: import("vue").ComputedRef<PWAIcon | undefined>;
};
export declare function useAppleSplashScreenPwaIcon(image: AppleSplashScreenImageType): {
    icon: import("vue").ComputedRef<PWAIcon | undefined>;
};
export {};
