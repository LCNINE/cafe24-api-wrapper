import { ProductsOption } from "./type"

export type RetrieveAListOfProductOptionsResponse = {
  option: ProductsOption
}

export type CreateProductOptionsRequest = Omit<ProductsOption, "shop_no" | "product_no">
export type CreateProductOptionsResponse = {
  option: ProductsOption
}

