export declare const NavbarTogglerProps: {
    icon: {
        type: StringConstructor;
    };
};
export interface INavbarTogglerProps {
    icon?: string;
}
export declare function useNavbarToggler<P extends INavbarTogglerProps>(props: P): {
    class: {
        'navbar-toggler': boolean;
    };
    render: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
};
