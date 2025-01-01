import type { Ref } from 'vue';
import { type IIDProps } from '../../composables/attributes/useID.js';
export declare function useAreaLabelledby(props: IIDProps, elementRef: Ref<HTMLElement | undefined>): {
    attr: import("vue").ComputedRef<{
        'aria-labelledby': string;
    }>;
};
export declare function useAreaLabel(props: IIDProps, elementRef: Ref<HTMLElement | undefined>): {};
