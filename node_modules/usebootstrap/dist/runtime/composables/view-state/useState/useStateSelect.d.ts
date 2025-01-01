import type { IViewStateResult } from '../useViewState.js';
import { type PropType, type Ref } from '#imports';
export declare const StateSelectProps: {
    stateSrc: {
        type: PropType<IViewStateResult>;
    };
    statePath: {
        type: StringConstructor;
    };
    modelValue: {
        type: StringConstructor[];
    };
    validate: {
        type: BooleanConstructor;
    };
    inValid: {
        type: BooleanConstructor;
    };
    value: {
        type: StringConstructor;
    };
    multiple: {
        type: BooleanConstructor;
    };
};
export interface IStateSelectProps {
    stateSrc?: IViewStateResult;
    statePath?: string;
    modelValue?: string;
    validate?: boolean;
    inValid?: boolean;
    value?: string;
    multiple?: boolean;
}
export declare function useStateSelect<P extends IStateSelectProps>(props: P, elementRef: Ref<HTMLSelectElement | undefined>, emits: (event: 'update:modelValue', ...args: any[]) => void): {
    value: Ref<string | string[], string | string[]>;
    changeValue: (event: Event) => void;
    classObject: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
};
