export declare function useBreakpoint(): {
    class: import("vue").ComputedRef<{
        [x: string]: boolean;
        "breakpoint-before-mounted": boolean;
        "breakpoint-gte-sm": boolean;
        "breakpoint-gte-md": boolean;
        "breakpoint-gte-lg": boolean;
        "breakpoint-gte-xl": boolean;
        "breakpoint-lt-sm": boolean;
        "breakpoint-lt-md": boolean;
        "breakpoint-lt-lg": boolean;
        "breakpoint-lt-xl": boolean;
        "breakpoint-lt-xxl": boolean;
    }>;
    attrs: {
        'data-allow-mismatch': string;
    };
};
