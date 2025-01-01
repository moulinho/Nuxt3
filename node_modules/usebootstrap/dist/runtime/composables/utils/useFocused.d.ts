import type { Ref } from 'vue';
export declare const FocusedProps: {
    focused: {
        type: BooleanConstructor;
        default: undefined;
    };
};
export interface IFocusedProps {
    focused?: boolean;
}
export declare function useFocused<P extends IFocusedProps>(props: P, elementRef: Ref<HTMLElement | null>): {
    isIntersecting: Ref<boolean, boolean>;
};
