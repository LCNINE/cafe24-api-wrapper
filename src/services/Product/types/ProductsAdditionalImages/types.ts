export type ProductAdditionalImage = {
  shop_no: number,
  additional_image: {
    big: string,
    medium: string,
    small: string,
  }[],
  product_no: number
}