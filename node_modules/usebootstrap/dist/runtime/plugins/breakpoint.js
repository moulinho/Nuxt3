import { useBreakpoints, breakpointsBootstrapV5 } from "@vueuse/core";
import { defineNuxtPlugin } from "#app";
import { computed, ref, useHeadSafe, onNuxtReady } from "#imports";
export default defineNuxtPlugin((nuxtApp) => {
  const breakpoints = useBreakpoints(breakpointsBootstrapV5);
  const active = breakpoints.active();
  const isMounted = ref(false);
  onNuxtReady(() => {
    isMounted.value = true;
  });
  const classObject = computed(() => {
    return {
      [`breakpoint-before-mounted`]: !isMounted.value,
      [`breakpoint-active-${active.value}`]: isMounted.value,
      [`breakpoint-gte-sm`]: active.value === "sm" || active.value === "md" || active.value === "lg" || active.value === "xl" || active.value === "xxl",
      [`breakpoint-gte-md`]: active.value === "md" || active.value === "lg" || active.value === "xl" || active.value === "xxl",
      [`breakpoint-gte-lg`]: active.value === "lg" || active.value === "xl" || active.value === "xxl",
      [`breakpoint-gte-xl`]: active.value === "xl" || active.value === "xxl",
      [`breakpoint-lt-sm`]: active.value == "xs",
      [`breakpoint-lt-md`]: active.value == "xs" || active.value == "sm",
      [`breakpoint-lt-lg`]: active.value == "xs" || active.value == "sm" || active.value == "md",
      [`breakpoint-lt-xl`]: active.value == "xs" || active.value == "sm" || active.value == "md" || active.value == "lg",
      [`breakpoint-lt-xxl`]: active.value == "xs" || active.value == "sm" || active.value == "md" || active.value == "lg" || active.value == "xl"
    };
  });
  nuxtApp.hook("page:loading:start", () => {
    useHeadSafe({
      bodyAttrs: {
        "class": classObject,
        "data-allow-mismatch": "class"
      }
    });
  });
  nuxtApp.provide("breakpoint", classObject);
});
