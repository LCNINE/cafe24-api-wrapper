import { ProductsImage } from "./type"

export type UploadProductImagesRequest = {
  image_upload_type: "A" | "B",
  detail_image: string,
  list_image: string,
  tiny_image: string,
  small_image: string,
}
export type UploadProductImagesResponse = {
  image: ProductsImage
}

export type DeleteProductImagesResponse = {
  image: {
    shop_no: number,
    product_no: number,
  }
}