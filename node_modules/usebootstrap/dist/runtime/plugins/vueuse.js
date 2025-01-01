import {
  vOnClickOutside,
  vOnKeyStroke,
  vOnLongPress,
  vElementHover,
  vElementSize,
  vElementVisibility,
  vInfiniteScroll,
  vIntersectionObserver,
  vResizeObserver,
  vScroll,
  vScrollLock
} from "@vueuse/components";
import { defineNuxtPlugin } from "#imports";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("onClickOutside", vOnClickOutside);
  nuxtApp.vueApp.directive("onKeyStroke", vOnKeyStroke);
  nuxtApp.vueApp.directive("onLongPress", vOnLongPress);
  nuxtApp.vueApp.directive("elementHover", vElementHover);
  nuxtApp.vueApp.directive("elementSize", vElementSize);
  nuxtApp.vueApp.directive("elementVisibility", vElementVisibility);
  nuxtApp.vueApp.directive("infiniteScroll", vInfiniteScroll);
  nuxtApp.vueApp.directive("intersectionObserver", vIntersectionObserver);
  nuxtApp.vueApp.directive("resizeObserver", vResizeObserver);
  nuxtApp.vueApp.directive("scroll", vScroll);
  nuxtApp.vueApp.directive("scrollLock", vScrollLock);
});
