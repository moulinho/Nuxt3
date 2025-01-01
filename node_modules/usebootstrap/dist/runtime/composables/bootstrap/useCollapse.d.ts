import type { Ref, SetupContext } from 'vue';
import type { IIDProps } from '../attributes/useID.js';
export declare const CollapseProps: {
    horizontal: {
        type: BooleanConstructor;
    };
};
export interface ICollapseProps {
    horizontal?: boolean;
}
export interface ICollapseMethods {
    show: () => Promise<void>;
    hide: () => Promise<void>;
    toggle: () => Promise<void>;
}
interface IProps extends ICollapseProps, IIDProps {
}
export declare function useCollapse<P extends IProps>(props: P, context: SetupContext<Record<string, unknown>>, elementRef: Ref<HTMLElement | undefined>): {
    class: import("vue").ComputedRef<{
        show: boolean;
        collapse: boolean;
        collapsing: boolean;
        'collapse-horizontal': boolean | undefined;
    }>;
    style: import("vue").ComputedRef<{
        [x: string]: string | undefined;
    }>;
    method: Record<string, (...args: unknown[]) => unknown> & ICollapseMethods;
};
export {};
