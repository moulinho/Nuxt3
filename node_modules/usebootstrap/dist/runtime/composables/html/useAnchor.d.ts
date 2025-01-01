import type { IElementProps } from '../../composables/base/useInline.js';
import { type IEventEmitProps } from '../utils/useEventEmitter.js';
export declare const AnchorProps: {
    button: {
        type: BooleanConstructor;
        default: undefined;
    };
    size: {
        type: StringConstructor;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    stretched: {
        type: BooleanConstructor;
        default: undefined;
    };
    color: {
        type: StringConstructor;
        default: undefined;
    };
    to: {
        type: StringConstructor;
        default: undefined;
    };
    activeBackgroundColor: {
        type: StringConstructor;
        default: undefined;
    };
    activeBorderColor: {
        type: StringConstructor;
        default: undefined;
    };
    activeColor: {
        type: StringConstructor;
        default: undefined;
    };
    dynamicRoute: {
        type: BooleanConstructor;
        default: undefined;
    };
    external: {
        type: BooleanConstructor;
        default: undefined;
    };
    target: {
        type: StringConstructor;
    };
    href: {
        type: StringConstructor;
    };
};
export interface IAnchorProps extends IElementProps, IEventEmitProps {
    button?: boolean;
    size?: string;
    disabled?: boolean;
    stretched?: boolean;
    color?: string;
    type?: string;
    to?: string;
    activeBackgroundColor?: string;
    activeBorderColor?: string;
    activeColor?: string;
    dynamicRoute?: boolean;
    external?: boolean;
}
export declare function useAnchor<P extends IAnchorProps>(props: P): {
    class: import("vue").ComputedRef<{
        [x: string]: boolean | "" | undefined;
        'stretched-link': boolean | undefined;
        disabled: boolean | undefined;
        btn: boolean | undefined;
    }>;
    style: import("vue").ComputedRef<{
        [x: string]: string | undefined;
    }>;
    attr: import("vue").ComputedRef<{
        [x: string]: string | undefined;
    }>;
};
