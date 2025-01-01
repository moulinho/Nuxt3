import { provide, computed, onMounted, ref } from "#imports";
import { useBreakpoints, breakpointsBootstrapV5 } from "@vueuse/core";
export function useBreakpoint() {
  const breakpoints = useBreakpoints(breakpointsBootstrapV5);
  const active = breakpoints.active();
  const isMounted = ref(false);
  onMounted(() => {
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
  provide("breakpoint", classObject);
  return {
    class: classObject,
    attrs: {
      "data-allow-mismatch": "class"
    }
  };
}
