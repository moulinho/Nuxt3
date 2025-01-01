import type { Ref, SetupContext } from 'vue';
import type { IIDProps } from '../attributes/useID.js';
export declare const CurrentProps: {
    current: {
        type: StringConstructor;
        default: string;
    };
    parent: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export interface ICurrentProps {
    current?: string;
    parent?: boolean;
}
export interface ICurrentState {
    current: Ref<string>;
    parent: Ref<boolean | undefined>;
}
export interface IItemsCurrent extends ICurrentProps, IIDProps {
}
export declare function useItemsCurrent<P extends IItemsCurrent>(props: P, context: SetupContext<Record<string, unknown>>, elementRef: Ref<HTMLElement | undefined>, eventSuffix: string): {
    attr?: undefined;
} | {
    attr: import("vue").ComputedRef<{
        'data-bv-current': string;
    }>;
};
