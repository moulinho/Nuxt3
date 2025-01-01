export declare const ListProps: {
    inline: {
        type: BooleanConstructor;
    };
    unstyled: {
        type: BooleanConstructor;
    };
};
export interface IListProps {
    inline?: boolean;
    unstyled?: boolean;
}
export declare function useList<P extends IListProps>(props: P): {
    class: import("vue").ComputedRef<{
        'list-unstyled': boolean | undefined;
        'list-inline': boolean | undefined;
    }>;
};
