import type { Ref } from 'vue';
import type { IEventEmitProps } from '../utils/useEventEmitter.js';
export interface IScrollSpyState {
    targetIsVisible: Ref<boolean>;
}
export declare function useScrollSpyItem<P extends IEventEmitProps>(props: P, elementRef: Ref<HTMLElement>): {
    event?: undefined;
    attr?: undefined;
} | {
    event: {
        onClick: (event: Event) => false | undefined;
    };
    attr: import("vue").ComputedRef<{
        'data-bv-spy-visible': boolean;
    }>;
};
