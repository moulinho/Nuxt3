import type { SetupContext } from 'vue';
import { type IIDProps } from '../attributes/useID.js';
import { type Ref } from '#imports';
export declare function useEvent(props: IIDProps, elementRef: Ref<HTMLElement | undefined>, eventSuffix: string): {
    emit: (context: SetupContext<Record<string, unknown>>, event: string, payload?: unknown) => void;
    expose: <T>(exposed: Record<string, (...args: unknown[]) => unknown> & T) => Record<string, (...args: unknown[]) => unknown> & T;
    exposeState: <T>(state: Record<string, Ref<unknown>> & T) => void;
};
