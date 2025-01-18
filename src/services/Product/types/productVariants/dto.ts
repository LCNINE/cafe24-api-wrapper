import { ProductVariantEmbed, ProductVariantWithEmbed } from "./embeds"

export type RetrieveAListOfProductVariantsOptions<E extends ProductVariantEmbed[]> = {
  embed?: E,
}

export type RetrieveAListOfProductVariantsResponse<E extends ProductVariantEmbed[]> = {
  variants: ProductVariantWithEmbed<E>[]
}

type Test = ProductVariantWithEmbed<["inventories"]>
const test: Test = {} as Test
test.inventories