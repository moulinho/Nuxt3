export declare const AccordionProps: {
    flush: {
        type: BooleanConstructor;
    };
};
export interface IAccordionProps {
    flush?: boolean;
}
export declare function useAccordion<P extends IAccordionProps>(props: P): {
    class: import("vue").ComputedRef<{
        accordion: boolean;
        'accordion-flush': boolean | undefined;
    }>;
};
