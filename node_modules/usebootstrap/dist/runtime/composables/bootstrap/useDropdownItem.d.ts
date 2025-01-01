import type { SetupContext } from 'vue';
import { type IHPropsModel } from '../../composables/utils/useProps.js';
import { type IAnchorProps } from '../html/useAnchor.js';
export declare const DropdownItemProps: {
    divider: {
        type: BooleanConstructor;
    };
    text: {
        type: BooleanConstructor;
    };
    active: {
        type: BooleanConstructor;
    };
    button: {
        type: BooleanConstructor;
        default: undefined;
    };
    size: {
        type: StringConstructor;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    stretched: {
        type: BooleanConstructor;
        default: undefined;
    };
    color: {
        type: StringConstructor;
        default: undefined;
    };
    to: {
        type: StringConstructor;
        default: undefined;
    };
    activeBackgroundColor: {
        type: StringConstructor;
        default: undefined;
    };
    activeBorderColor: {
        type: StringConstructor;
        default: undefined;
    };
    activeColor: {
        type: StringConstructor;
        default: undefined;
    };
    dynamicRoute: {
        type: BooleanConstructor;
        default: undefined;
    };
    external: {
        type: BooleanConstructor;
        default: undefined;
    };
    target: {
        type: StringConstructor;
    };
    href: {
        type: StringConstructor;
    };
};
export interface IDropdownItemProps extends IAnchorProps {
    divider?: boolean;
    text?: boolean;
    active?: boolean;
}
export declare function useDropdownItem<P extends IDropdownItemProps>(props: P, context: SetupContext<Record<string, unknown>>): IHPropsModel;
