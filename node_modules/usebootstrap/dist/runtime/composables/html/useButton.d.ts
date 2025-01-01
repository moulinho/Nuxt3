import type { IInlineProps } from '../../composables/base/useInline.js';
import { type IEventEmitProps } from '../utils/useEventEmitter.js';
export declare const ButtonProps: {
    button: {
        type: BooleanConstructor[];
        default: boolean;
    };
    color: {
        type: StringConstructor[];
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
    type: {
        type: StringConstructor;
        default: string;
    };
    to: {
        type: StringConstructor;
    };
    paddingX: {
        type: StringConstructor;
        default: undefined;
    };
    target: {
        type: StringConstructor;
    };
    href: {
        type: StringConstructor;
    };
};
export interface IButtonProps extends IInlineProps, IEventEmitProps {
    button?: boolean;
    color?: string;
    size?: string;
    disabled?: boolean;
    type?: string;
    to?: string;
    paddingX?: string;
}
export declare function useButton<P extends IButtonProps>(props: P): {
    class: import("vue").ComputedRef<{
        [x: string]: string | boolean | undefined;
        disabled: boolean | undefined;
        btn: boolean | undefined;
    }>;
    style: import("vue").ComputedRef<{
        [x: string]: string | undefined;
    }>;
    attr: import("vue").ComputedRef<{
        type: string | undefined;
    }>;
};
