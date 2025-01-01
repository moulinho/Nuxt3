import { type MaybeRef } from '#imports';
export declare const mergeRef: (...objects: MaybeRef<object>[]) => MaybeRef<object>;
export declare const mergeFunc: (...objects: MaybeRef<Record<string, Function | undefined> | undefined>[]) => Record<string, Function>;
