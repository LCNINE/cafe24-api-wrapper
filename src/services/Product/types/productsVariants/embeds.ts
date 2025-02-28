import { UnionToIntersection } from "../../../../utils/helperTypes"
import { ProductVariant } from "./types"

export type ProductVariantEmbed = "inventories"

export type ProductVariantEmbedFields = {
  inventories: {
  }
}

export type ProductVariantEmbedIncludes<E extends ProductVariantEmbed[]> = UnionToIntersection<
  {
    [K in E[number]]: K extends keyof ProductVariantEmbedFields ? ProductVariantEmbedFields[K] : {}
  }[E[number]]
>

export type ProductVariantWithEmbed<E extends ProductVariantEmbed[]> = ProductVariant & ProductVariantEmbedIncludes<E>
