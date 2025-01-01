/**
 * Image provider for Uploadcare
 * URL API reference:
 * @link https://uploadcare.com/api-refs/url-api/
 *
 * URL format: https://ucarecdn.com/:uuid/-/:operation/:params/:filename
 *
 * Operations:
 * [X] Image Compression
 * [/] Image Geometry
 * [ ] Image Overlays
 * [ ] Image Colours
 * [ ] Image Definition
 * [ ] Image Rotations
 *
 * Other stuff to think about later:
 * - Signed URLs
 * - File Groups
 */
import type { ProviderGetImage } from '../../module.js';
export declare const getImage: ProviderGetImage;
