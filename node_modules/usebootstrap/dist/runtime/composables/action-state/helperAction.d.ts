import type { IActionProp } from './useActionState.js';
import type { Ref } from '#imports';
export declare function helperAction(method: string, params: unknown, actionProp: IActionProp, status: Ref<number>, data: Ref<unknown>): Promise<void>;
