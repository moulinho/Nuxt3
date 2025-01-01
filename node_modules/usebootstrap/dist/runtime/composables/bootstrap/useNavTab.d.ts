export declare const NavTabProps: {
    nav: {
        type: StringConstructor;
    };
    fill: {
        type: BooleanConstructor;
    };
    justified: {
        type: BooleanConstructor;
    };
    card: {
        type: BooleanConstructor;
    };
};
export interface INavTabProps {
    nav?: string;
    fill?: boolean;
    justified?: boolean;
    card?: boolean;
}
export declare function useNavTab<P extends INavTabProps>(props: P): {
    class: import("vue").ComputedRef<{
        [x: string]: string | boolean | undefined;
        'nav-fill': boolean | undefined;
        'nav-justified': boolean | undefined;
        'card-header-tabs': boolean | undefined;
    }>;
};
