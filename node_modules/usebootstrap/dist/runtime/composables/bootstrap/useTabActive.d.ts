import type { Ref } from 'vue';
import { type IEventEmitProps } from '../utils/useEventEmitter.js';
import type { IElementProps } from '../../composables/base/useInline.js';
import { type IIDProps } from '../../composables/attributes/useID.js';
export declare const TabActiveProps: {
    target: {
        type: StringConstructor;
    };
    href: {
        type: StringConstructor;
    };
    tab: {
        type: StringConstructor;
    };
};
export interface IToggleProps extends IEventEmitProps, IElementProps {
    tab?: string;
}
interface ITabActive extends IToggleProps, IIDProps {
}
export declare function useTabActive<P extends ITabActive>(props: P, elementRef: Ref<HTMLElement | undefined>): {
    method: {
        tabActive: () => Promise<void>;
    };
    event: {
        onClick: () => Promise<void>;
    };
};
export {};
