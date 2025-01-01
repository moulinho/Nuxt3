import type { IRule, IRuleObject } from './useQuery.js';
export declare function useQuerySerializer(): {
    serialize: (rule: IRule | IRule[]) => string;
    deserialize: (fragments: string) => IRuleObject[];
    deserializeToObject: (fragment: string) => IRuleObject;
};
