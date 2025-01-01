import type { Ref } from 'vue';
import { type IIDProps } from '../attributes/useID.js';
export declare function useEventTarget(props: IIDProps, elementRef: Ref<HTMLElement | undefined>): {
    emit: (event: string, payload?: unknown) => void;
};
