import { type IHPropsModel } from '../../composables/utils/useProps.js';
import type { IToggleProps } from './useToggle.js';
import { type Ref, type PropType } from '#imports';
export declare const TooltipProps: {
    title: {
        type: StringConstructor[];
        default: string;
    };
    placement: {
        type: PropType<"top" | "bottom">;
        default: string;
    };
    template: {
        type: StringConstructor;
    };
};
export interface ITooltipProps extends IToggleProps {
    title?: string;
    placement?: 'top' | 'bottom';
    template?: string;
}
export declare function useTooltip<P extends ITooltipProps>(props: P, elementRef: Ref<HTMLElement | undefined>): IHPropsModel;
