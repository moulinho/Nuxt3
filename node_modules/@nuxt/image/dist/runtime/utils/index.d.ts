import type { OperationGeneratorConfig } from '../../module.js';
export default function imageFetch(url: string): Promise<Response>;
export declare function getInt(x: unknown): number | undefined;
export declare function getFileExtension(url?: string): string;
export declare function cleanDoubleSlashes(path?: string): string;
export declare function createMapper(map: any): (key?: string) => any;
export declare function createOperationsGenerator({ formatter, keyMap, joinWith, valueMap }?: OperationGeneratorConfig): (modifiers?: {
    [key: string]: string;
}) => string;
type Attrs = {
    [key: string]: string | number;
};
export declare function renderAttributesToString(attributes?: Attrs): string;
export declare function renderTag(tag: string, attrs: Attrs, contents?: string): string;
export declare function generateAlt(src?: string): string | undefined;
export declare function parseSize(input?: string | number | undefined): number | undefined;
export declare function parseDensities(input?: string | undefined): number[];
export declare function checkDensities(densities: number[]): void;
export declare function parseSizes(input: Record<string, string | number> | string): Record<string, string>;
export {};
