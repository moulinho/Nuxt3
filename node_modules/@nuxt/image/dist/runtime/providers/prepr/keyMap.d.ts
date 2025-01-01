/**
 * Key map is responsible for mapping readable "properties", which can be passed
 * as modifiers of `NuxtImg` component, to URL path parameters that can be
 * interpreted Prepr's REST API.
 */
declare const keyMap: {
    readonly crop: "c";
    readonly format: "format";
    readonly height: "h";
    readonly quality: "q";
    readonly width: "w";
};
type KeyMapKey = keyof typeof keyMap;
type KeyMapValue = typeof keyMap[KeyMapKey];
export { keyMap };
export type { KeyMapKey, KeyMapValue };
