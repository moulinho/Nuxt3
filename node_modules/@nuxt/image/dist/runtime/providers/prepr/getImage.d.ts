import type { ImageOptions, ResolvedImage, ImageCTX } from '../../../module.js';
interface PreprImageOptions extends ImageOptions {
    projectName: string;
}
type PreprProviderGetImage = (src: string, options: PreprImageOptions, ctx: ImageCTX) => ResolvedImage;
declare const getImage: PreprProviderGetImage;
export { getImage };
