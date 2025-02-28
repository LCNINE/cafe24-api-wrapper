export type CreateAnAdditionalProductImageRequest = {
  additional_image: string[],
}

export type CreateAnAdditionalProductImageResponse = {
  additionalimage: {
    shop_no: number,
    additional_image: {
      big: string
      medium: string
      small: string
    }[]
  }
}


export type UpdateAnAdditionalProductImageRequest = CreateAnAdditionalProductImageRequest
export type UpdateAnAdditionalProductImageResponse = CreateAnAdditionalProductImageResponse


export type DeleteAnAdditionalProductImageResponse = {
  additionalImage: {
    shop_no: number,
    product_no: number,
  }
}