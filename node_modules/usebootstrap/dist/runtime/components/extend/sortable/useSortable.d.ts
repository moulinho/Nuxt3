import type { ConfigurableDocument, MaybeRefOrGetter } from '@vueuse/core';
import Sortable, { type Options } from 'sortablejs';
export interface UseSortableReturn {
    start: () => void;
    stop: () => void;
    option: (<K extends keyof Sortable.Options>(name: K, value: Sortable.Options[K]) => void) & (<K extends keyof Sortable.Options>(name: K) => Sortable.Options[K]);
}
export type UseSortableOptions = Options & ConfigurableDocument;
export declare function useSortable<T>(selector: string, list: MaybeRefOrGetter<T[]>, options?: UseSortableOptions): UseSortableReturn;
export declare function useSortable<T>(el: MaybeRefOrGetter<HTMLElement | null | undefined>, list: MaybeRefOrGetter<T[]>, options?: UseSortableOptions): UseSortableReturn;
export declare function moveArrayElement<T>(list: MaybeRefOrGetter<T[]>, from: number, to: number): void;
