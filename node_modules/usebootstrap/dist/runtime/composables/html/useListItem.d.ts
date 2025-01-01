export declare const ListItemProps: {
    inline: {
        type: BooleanConstructor;
    };
};
export interface IListItemProps {
    inline?: boolean;
}
export declare function useListItem<P extends IListItemProps>(props: P): {
    class: import("vue").ComputedRef<{
        'list-inline-item': boolean | undefined;
    }>;
};
