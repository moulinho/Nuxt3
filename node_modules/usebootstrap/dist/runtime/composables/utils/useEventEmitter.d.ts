import type { Ref } from 'vue';
import { type IIDProps } from '../attributes/useID.js';
export declare const EventEmitProps: {
    target: {
        type: StringConstructor;
    };
    href: {
        type: StringConstructor;
    };
};
export interface IEventEmitProps {
    target?: string;
    href?: string;
}
interface IProps extends IEventEmitProps, IIDProps {
}
export declare function useEventEmitter(props: IProps, event: string, eventSuffix: string, elementRef: Ref<HTMLElement | undefined>): (payload?: unknown) => void;
export {};
