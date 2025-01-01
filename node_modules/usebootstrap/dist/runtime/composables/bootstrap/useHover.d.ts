import type { Ref } from 'vue';
import { type IEventEmitProps } from '../utils/useEventEmitter.js';
import { type IIDProps } from '../../composables/attributes/useID.js';
import type { IElementProps } from '../../composables/base/useInline.js';
export declare const HoverProps: {
    target: {
        type: StringConstructor;
    };
    href: {
        type: StringConstructor;
    };
    toggle: {
        type: StringConstructor;
    };
    hover: {
        type: BooleanConstructor;
    };
};
export interface IHoverProps extends IEventEmitProps, IElementProps {
    toggle?: string;
    hover?: boolean;
}
interface IProps extends IHoverProps, IIDProps {
}
export declare function useHover<P extends IProps>(props: P, elementRef: Ref<HTMLElement | undefined>): {
    class?: undefined;
    event?: undefined;
} | {
    class: import("vue").ComputedRef<{}>;
    event: {
        onMouseover: () => Promise<void>;
        onMouseleave: () => Promise<void>;
    };
};
export {};
