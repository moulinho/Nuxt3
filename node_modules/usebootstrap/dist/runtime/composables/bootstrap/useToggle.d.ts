import type { Ref } from 'vue';
import { type IEventEmitProps } from '../utils/useEventEmitter.js';
import { type IIDProps } from '../../composables/attributes/useID.js';
import type { IElementProps } from '../../composables/base/useInline.js';
export declare const ToggleProps: {
    target: {
        type: StringConstructor;
    };
    href: {
        type: StringConstructor;
    };
    toggle: {
        type: StringConstructor;
    };
    active: {
        type: BooleanConstructor;
    };
    split: {
        type: BooleanConstructor;
    };
};
export interface IToggleProps extends IEventEmitProps, IElementProps {
    toggle?: string;
    active?: boolean;
    split?: boolean;
}
interface IProps extends IToggleProps, IIDProps {
}
export declare function useToggle<P extends IProps>(props: P, elementRef: Ref<HTMLElement | undefined>): {
    class?: undefined;
    method?: undefined;
    event?: undefined;
} | {
    class: import("vue").ComputedRef<{
        'dropdown-toggle': boolean;
        'dropdown-toggle-split': boolean | undefined;
    }>;
    method: {
        toggle: () => Promise<void>;
    };
    event: {
        onClick: () => Promise<void>;
    };
};
export {};
