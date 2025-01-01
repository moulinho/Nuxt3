import type { ProviderGetImage, ImageOptions } from '../../module.js';
export interface WeservOptions extends ImageOptions {
    /**
     * The url of your site that is exposed to the internet.
     */
    baseURL: string;
    /**
     * The url of the weserv service.
     *
     * @default https://wsrv.nl
     */
    weservURL?: string;
}
export declare const getImage: ProviderGetImage;
