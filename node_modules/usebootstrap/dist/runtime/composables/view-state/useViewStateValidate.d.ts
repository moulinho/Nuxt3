import type { IIntegraionValidationOption } from '../../../useOptions.js';
import type { Ref } from '#imports';
export declare function useViewStateValidate(validate: Ref<unknown>, schema: unknown | undefined, options: IIntegraionValidationOption): ((instance: unknown) => void) | undefined;
