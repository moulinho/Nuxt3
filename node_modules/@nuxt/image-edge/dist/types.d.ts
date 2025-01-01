
import type { ModuleOptions } from './module'


declare module '@nuxt/schema' {
  interface NuxtConfig { ['image']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['image']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['image']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['image']?: ModuleOptions }
}


export type { $Img, CloudinaryModifiers, CloudinaryOptions, CreateImageOptions, IPXModifiers, IPXOptions, ImageCTX, ImageInfo, ImageModifiers, ImageModuleProvider, ImageOptions, ImageProvider, ImageProviders, ImageSize, ImageSizes, ImageSizesOptions, ImageSizesVariant, Img, InputProvider, MapToStatic, ModuleOptions, OperationFormatter, OperationGeneratorConfig, OperationMapper, ProviderGetImage, ProviderSetup, ResolvedImage, RuntimePlaceholder, UploadcareModifiers, UploadcareOptions, default } from './module'
