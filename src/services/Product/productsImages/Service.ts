import { AbstractService } from "../..";
import { DeleteProductImagesResponse, UploadProductImagesRequest, UploadProductImagesResponse } from "./dto";

export class ProductsImagesService extends AbstractService {
  public async uploadProductImages(productNo: number, request: UploadProductImagesRequest) {
    const res = await this.client.post<UploadProductImagesResponse>(
      `products/${productNo}/images`,
      {
        request: request,
      }
    )
    return res.data.image
  }

  public async deleteProductImages(productNo: number) {
    const res = await this.client.delete<DeleteProductImagesResponse>(
      `products/${productNo}/images`,
    )
    return res.data.image
  }
}
