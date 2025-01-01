import type { SetupContext, Ref } from 'vue';
export declare const IntersectionAnimateProps: {
    intersection: {
        type: BooleanConstructor;
    };
    intersectionMargin: {
        type: StringConstructor;
        default: string;
    };
    intersectionTarget: {
        type: StringConstructor;
    };
    animateIn: {
        type: StringConstructor;
        default: string;
    };
};
export interface IIntersectionAnimateProps {
    once?: boolean;
    intersection?: boolean;
    animateIn?: string;
    intersectionMargin?: string;
    intersectionTarget?: string;
}
export declare function useIntersectionAnimate<P extends IIntersectionAnimateProps>(props: P, _context: SetupContext<Record<string, unknown>>, elementRef: Ref<HTMLElement | undefined>): {
    class: import("vue").ComputedRef<{
        [x: string]: string | boolean | undefined;
        animate__animated: boolean;
        invisible: boolean;
    }>;
};
