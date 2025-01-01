import type { Ref } from 'vue';
import type { IHPropsModel } from '../../composables/utils/useProps.js';
export declare const IDProps: {
    id: {
        type: StringConstructor;
        default: undefined;
    };
};
export interface IIDProps {
    id?: string;
}
export declare const TemplateProps: {
    template: {
        type: StringConstructor;
    };
};
export interface ITemplateProps {
    template?: string;
}
export declare function useID<P extends IIDProps>(props: P, name?: string): IHPropsModel;
export declare function useIDRef(props: IIDProps, elementRef: Ref<HTMLElement | undefined>): Ref<string | undefined, string | undefined>;
export interface InjectIDOptions {
    name?: string;
    defaultValue?: string;
}
export declare function injectID(options?: InjectIDOptions): string;
export declare function useIDItem<P extends IIDProps>(props: P, options?: InjectIDOptions): {
    attr: {
        id: string;
    };
};
export declare function uniqueId(): string;
