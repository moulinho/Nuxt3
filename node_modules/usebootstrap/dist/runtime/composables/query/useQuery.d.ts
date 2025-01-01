export type IRuleObject = Record<string, Array<IRuleObject | string | number | boolean>> | string | number | boolean | undefined;
export type IRule = IRuleObject | Array<IRule>;
export interface IPaginate {
    page: number;
    size: number;
}
export declare function useQuery(): {
    filter: (rules: IRule | string, dataArray: unknown[] | undefined, max?: number) => unknown[] | undefined;
    sort: typeof sortArray;
    aggregate: typeof aggregateArray;
    paginate: typeof paginateArray;
    grouping: typeof groupingArray;
};
declare function sortArray(rules: Record<'asc' | 'desc', IRule>[], dataArray: unknown[]): unknown[];
declare function aggregateArray(rule: IRule, dataArray: unknown[]): unknown;
declare function paginateArray(rule: IPaginate, dataArray: unknown[] | undefined): unknown[] | undefined;
declare function groupingArray<T>(rule: IRule, dataArray: T[]): Record<string, T[]>;
export {};
