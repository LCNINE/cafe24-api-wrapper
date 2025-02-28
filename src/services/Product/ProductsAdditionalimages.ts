import { AbstractService } from "..";
import { CreateAnAdditionalProductImageRequest, CreateAnAdditionalProductImageResponse, DeleteAnAdditionalProductImageResponse, UpdateAnAdditionalProductImageRequest, UpdateAnAdditionalProductImageResponse } from "./types/ProductsAdditionalImages/dto";

export class ProductsAdditionalimagesService extends AbstractService {
  public async createAnAdditionalProductImage(productNo: number, request: CreateAnAdditionalProductImageRequest) {
    const res = await this.client.post<CreateAnAdditionalProductImageResponse>(
      `products/${productNo}/additionalimages`, 
      {
        request: request,
      }
    )
    return res.data.additionalimage
  } 

  public async updateAnAdditionalProductImage(productNo: number, request: UpdateAnAdditionalProductImageRequest) {
    const res = await this.client.put<UpdateAnAdditionalProductImageResponse>(
      `products/${productNo}/additionalimages`,
      {
        request: request,
      }
    )
    return res.data.additionalimage
  }

  public async deleteAnAdditionalProductImage(productNo: number) {
    const res = await this.client.delete<DeleteAnAdditionalProductImageResponse>(
      `products/${productNo}/additionalimages`,
    )
    return res.data.additionalImage
  }
}
