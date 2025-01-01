export interface IScrollProps {
    scrolledPosition?: number;
    scrolledClass?: string;
}
export declare const ScrolledProps: {
    scrolledPosition: {
        type: NumberConstructor;
        default: number;
    };
    scrolledClass: {
        type: StringConstructor;
        default: undefined;
    };
};
export declare function useScrolled<P extends IScrollProps>(props: P): {
    class: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
} | {
    class?: undefined;
};
