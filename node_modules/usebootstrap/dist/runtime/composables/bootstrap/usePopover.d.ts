import type { Ref } from 'vue';
import { type IHPropsModel } from '../../composables/utils/useProps.js';
import type { IToggleProps } from './useToggle.js';
export declare const PopoverProps: {
    title: {
        type: StringConstructor[];
        default: string;
    };
    content: {
        type: StringConstructor[];
        default: string;
    };
    placement: {
        type: StringConstructor[];
        default: string;
    };
    template: {
        type: StringConstructor;
    };
};
export interface IPopoverProps extends IToggleProps {
    title?: string;
    content?: string;
    placement?: string;
    template?: string;
}
export declare function usePopover<P extends IPopoverProps>(props: P, elementRef: Ref<HTMLElement | undefined>): IHPropsModel;
