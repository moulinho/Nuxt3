import { computed, toValue } from "vue";
import { useNuxtApp } from "#imports";
export function useTransparentPwaIcon(image) {
  return usePWAIcon("transparent", image);
}
export function useMaskablePwaIcon(image) {
  return usePWAIcon("maskable", image);
}
export function useFaviconPwaIcon(image) {
  return usePWAIcon("favicon", image);
}
export function useApplePwaIcon(image) {
  return usePWAIcon("apple", image);
}
export function useAppleSplashScreenPwaIcon(image) {
  return usePWAIcon("appleSplashScreen", image);
}
function usePWAIcon(type, pwaImage) {
  const pwaIcons = useNuxtApp().$pwaIcons;
  const icon = computed(() => {
    const pwaIcon = toValue(pwaImage);
    const iconName = typeof pwaIcon === "object" ? pwaIcon.image : pwaIcon;
    const image = pwaIcons?.[type]?.[iconName]?.asImage;
    if (!image)
      return;
    if (typeof pwaIcon === "string") {
      return {
        width: image.width,
        height: image.height,
        key: image.key,
        src: image.src
      };
    }
    const {
      alt,
      width,
      height,
      crossorigin,
      loading,
      decoding,
      nonce,
      image: _image,
      ...rest
    } = pwaIcon;
    return {
      alt,
      width: width ?? image.width,
      height: height ?? image.height,
      crossorigin,
      loading,
      decoding,
      nonce,
      ...rest,
      key: image.key,
      src: image.src
    };
  });
  return { icon };
}
