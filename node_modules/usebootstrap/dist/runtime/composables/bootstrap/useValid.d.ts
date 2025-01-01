export declare const ValidProps: {
    inValid: {
        type: (BooleanConstructor | ArrayConstructor)[];
        default: undefined;
    };
    validate: {
        type: BooleanConstructor;
        default: undefined;
    };
};
export interface IValidProps {
    inValid?: boolean | unknown[];
    validate?: boolean;
}
export declare function useValid<P extends IValidProps>(props: P): {
    class: import("vue").ComputedRef<{
        [x: string]: boolean | undefined;
    }>;
};
