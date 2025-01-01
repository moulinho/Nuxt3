export interface UseScrollbarOptions {
    document?: Document;
    element?: HTMLElement;
}
export interface IInitial {
    overflow?: string;
}
export declare function useScrollbar(options?: UseScrollbarOptions): {
    getWidth: () => number;
    hide: () => void;
    reset: () => void;
    isOverflowing: () => boolean;
} | undefined;
