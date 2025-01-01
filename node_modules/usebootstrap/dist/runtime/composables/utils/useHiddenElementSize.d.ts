import type { Ref } from 'vue';
export declare function useHiddenElementSize(target: Ref<HTMLElement | undefined>): Promise<{
    width: Ref<number, number>;
    height: Ref<number, number>;
}>;
