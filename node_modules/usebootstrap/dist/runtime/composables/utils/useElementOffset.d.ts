import type { MaybeElementRef } from '@vueuse/core';
export declare function useElementOffset(target: MaybeElementRef): {
    left: import("vue").ComputedRef<number>;
    top: import("vue").ComputedRef<number>;
};
export type UseElementOffsetReturn = ReturnType<typeof useElementOffset>;
