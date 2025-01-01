import type { MaybeElementRef, ConfigurableDocument } from '@vueuse/core';
interface ConfigurableElement {
    element?: HTMLElement;
}
export declare function findOneSelectorRef(selector: string | undefined, options?: ConfigurableDocument): import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
export declare function querySelectorToID(selector: string, options?: ConfigurableElement): string[];
export declare function querySelector(selector: string, options?: ConfigurableElement): HTMLElement[];
export declare const waitAfterTransition: (transitionElement: MaybeElementRef, waitForTransition?: boolean) => Promise<void>;
export declare const reflow: (transitionElement: MaybeElementRef) => Promise<void>;
export declare function generateId(text: string | null, generated?: Array<string>): string;
export {};
