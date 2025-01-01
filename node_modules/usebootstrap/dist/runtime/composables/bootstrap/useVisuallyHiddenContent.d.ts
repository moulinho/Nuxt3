export declare const VisuallyHiddenContentProps: {
    label: {
        type: StringConstructor;
    };
};
export interface IVisuallyHiddenContentProps {
    label?: string;
}
export declare function useVisuallyHiddenContent<P extends IVisuallyHiddenContentProps>(props: P): {
    render: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
};
