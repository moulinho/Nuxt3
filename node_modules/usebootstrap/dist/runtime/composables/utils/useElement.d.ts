import type { MaybeRef } from '@vueuse/core';
import type { IHPropsModel } from './useProps.js';
export interface UseElementOptions {
    element?: HTMLElement;
}
export declare function useElement<T extends MaybeRef<IHPropsModel>>(elementProps: T, options?: UseElementOptions): import("vue").WatchHandle | undefined;
export type UseElementReturn = ReturnType<typeof useElement>;
