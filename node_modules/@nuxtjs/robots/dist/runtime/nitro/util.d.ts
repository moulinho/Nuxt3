import type { H3Event } from 'h3';
import type { NitroApp } from 'nitropack';
import type { HookRobotsConfigContext } from '../types.js';
export declare function resolveRobotsTxtContext(e: H3Event | undefined, nitro?: NitroApp): Promise<HookRobotsConfigContext>;
