import type { IActionProp } from './useActionState.js';
import type { Ref } from '#imports';
export declare function fetchAction(method: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'get' | 'head' | 'patch' | 'post' | 'put' | 'delete' | 'connect' | 'options' | 'trace', params: unknown, actionProp: IActionProp, status: Ref<number>, data: Ref<unknown>): Promise<void>;
