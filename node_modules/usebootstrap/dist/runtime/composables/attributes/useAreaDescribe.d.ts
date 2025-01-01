import type { Ref } from 'vue';
import type { IIDProps } from '../../composables/attributes/useID.js';
export declare function useProvideAreaDescribe(): void;
export declare function useAreaDescribedby(props: IIDProps, elementRef: Ref<HTMLElement | undefined>): {
    attr: import("vue").ComputedRef<{
        'aria-describedby': string;
    }>;
};
export declare function useAreaDescribe(props: IIDProps, elementRef: Ref<HTMLElement | undefined>): {};
