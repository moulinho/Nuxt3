import type { Ref } from 'vue';
import type { IViewStateResult } from '../useViewState.js';
import { type PropType } from '#imports';
export declare const StateComponentProps: {
    stateSrc: {
        type: PropType<IViewStateResult>;
    };
    statePath: {
        type: StringConstructor;
    };
    validate: {
        type: BooleanConstructor;
    };
};
export interface IStateComponentProps {
    stateSrc?: IViewStateResult;
    statePath?: string;
    validate?: boolean;
}
export declare function useStateComponent<P extends IStateComponentProps>(props: P, model: Ref<unknown>): {
    value: Ref<unknown, unknown>;
    updateValue: (newValue: unknown) => void;
    classObject: import("vue").ComputedRef<{
        [x: string]: boolean;
    } | undefined>;
};
