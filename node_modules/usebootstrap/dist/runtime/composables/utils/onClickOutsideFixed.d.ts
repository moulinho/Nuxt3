import type { MaybeElementRef, ConfigurableWindow } from '@vueuse/core';
export interface OnClickOutsideOptions extends ConfigurableWindow {
    ignore?: MaybeElementRef[];
}
export declare function onClickOutsideFixed(target: MaybeElementRef, handler: (evt: PointerEvent) => void, options?: OnClickOutsideOptions): (() => void) | undefined;
