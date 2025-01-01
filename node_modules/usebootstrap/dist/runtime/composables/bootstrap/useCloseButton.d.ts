import type { Ref } from 'vue';
import { type IEventEmitProps } from '../utils/useEventEmitter.js';
export declare const CloseButtonProps: {
    dismiss: {
        type: StringConstructor;
    };
    target: {
        type: StringConstructor;
    };
    href: {
        type: StringConstructor;
    };
};
export interface ICloseButtonProps extends IEventEmitProps {
    dismiss?: string;
}
export declare function useCloseButton<P extends ICloseButtonProps>(props: P, elementRef: Ref<HTMLElement | undefined>): {
    method?: undefined;
    event?: undefined;
} | {
    method: {
        dismiss: () => void;
    };
    event: {
        onClick: () => void;
    };
};
