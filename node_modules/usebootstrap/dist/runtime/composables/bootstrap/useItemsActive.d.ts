import type { Ref } from 'vue';
import { type IIDProps } from '../../composables/attributes/useID.js';
export declare const ActiveProps: {
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export interface IActiveProps {
    active?: boolean;
    disabled?: boolean;
}
export interface IItemActiveProps extends IActiveProps, IIDProps {
    to?: string;
}
export interface IActiveState {
    active: Ref<boolean>;
}
export interface IActiveMethods {
    show: () => void;
    hide: () => void;
    toggle: () => void;
}
export declare function useActive<P extends IItemActiveProps>(props: P, eventSuffix: string, elementRef: Ref<HTMLElement | undefined>): {
    class: import("vue").ComputedRef<{
        active: boolean;
        disabled: boolean | undefined;
    }>;
    attr: import("vue").ComputedRef<{
        [x: string]: string | undefined;
    }>;
    method: Record<string, (...args: unknown[]) => unknown> & IActiveMethods;
};
