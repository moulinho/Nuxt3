import { useBreakpoints, breakpointsBootstrapV5 } from "@vueuse/core";
import { watch } from "#imports";
export function greaterOrEqual(type, defaultValue = false) {
  const result = ref(defaultValue);
  if (!type) {
    return result;
  }
  const breakpoints = useBreakpoints(breakpointsBootstrapV5);
  const goe = breakpoints.greaterOrEqual(type);
  watch(goe, () => {
    result.value = goe.value;
  }, { immediate: true });
  return result;
}
export const useMounted = () => {
  const isMounted = ref(false);
  onMounted(() => {
    isMounted.value = true;
  });
  return isMounted;
};
