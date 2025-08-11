import { defineCollection } from "astro:content";
import { cldAssetsLoader } from "astro-cloudinary/loaders";

export const collections = {
  assets: defineCollection({
    loader: cldAssetsLoader({
      limit: 1000,
      folder: 'Marymoor First Spin'
    })
  })
}