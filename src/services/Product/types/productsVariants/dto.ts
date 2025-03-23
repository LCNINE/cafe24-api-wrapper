import { ProductVariantEmbed, ProductVariantWithEmbed } from "./embeds"
import { ProductVariant } from "./types"

export type RetrieveAListOfProductVariantsOptions<E extends ProductVariantEmbed[]> = {
  embed?: E,
}

export type RetrieveAListOfProductVariantsResponse<E extends ProductVariantEmbed[]> = {
  variants: ProductVariantWithEmbed<E>[]
}

export type UpdateMultipleProductVariantsRequest = (Partial<ProductVariant> & { variant_code: string })[]
export type UpdateMultipleProductVariantsResponse = {
  variants: ProductVariant[],
}
