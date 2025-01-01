import type { Ref, SetupContext } from 'vue';
import type { IIDProps } from '../attributes/useID.js';
export declare const DropdownProps: {
    placement: {
        type: StringConstructor;
        default: string;
    };
};
export interface IDropdownProps {
    placement: string;
}
export interface IDropdownMethods {
    show: () => Promise<void>;
    hide: () => Promise<void>;
    toggle: (source: HTMLElement) => Promise<boolean>;
}
export interface IDropdownState {
    active: Ref<boolean>;
}
interface IProps extends IDropdownProps, IIDProps {
}
export declare function useDropdown<P extends IProps>(props: P, context: SetupContext<Record<string, unknown>>, elementRef: Ref<HTMLElement | undefined>): {
    class: import("vue").ComputedRef<{
        'position-static': boolean;
    }>;
    attr: import("vue").ComputedRef<{
        'data-bv-active': boolean;
    }>;
    method: Record<string, (...args: unknown[]) => unknown> & IDropdownMethods;
};
export {};
