export declare const ImageProps: {
    fluid: {
        type: BooleanConstructor;
    };
    thumbnail: {
        type: BooleanConstructor;
    };
};
export interface IImageProps {
    fluid?: boolean;
    thumbnail?: boolean;
}
export declare function useImg<P extends IImageProps>(props: P): {
    class: import("vue").ComputedRef<{
        'img-fluid': boolean | undefined;
        'img-thumbnail': boolean | undefined;
    }>;
    attr: {
        loading: string;
    };
};
