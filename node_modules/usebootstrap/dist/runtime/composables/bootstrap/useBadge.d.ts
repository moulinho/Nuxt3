import type { IInlineProps } from '../../composables/base/useInline.js';
import { type IVisuallyHiddenContentProps } from './useVisuallyHiddenContent.js';
export declare const BadgeProps: {
    rounded: {
        type: StringConstructor;
    };
    color: {
        type: StringConstructor;
    };
    label: {
        type: StringConstructor;
    };
};
export interface IBadgeProps extends IVisuallyHiddenContentProps, IInlineProps {
    rounded?: string;
    color?: string;
}
export declare function useBadge<P extends IBadgeProps>(props: P): {
    class: import("vue").ComputedRef<{
        [x: string]: string | boolean | undefined;
        badge: boolean;
    }>;
    style: import("vue").ComputedRef<{
        [x: string]: string | undefined;
    }>;
    render: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
};
