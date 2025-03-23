import { AbstractService } from "../..";
import { CreateProductOptionsRequest, CreateProductOptionsResponse, RetrieveAListOfProductOptionsResponse } from "./dto";

export class ProductsOptionsService extends AbstractService {
  public async retrieveAListOfProductOptions(productNo: number) {
    const res = await this.client.get<RetrieveAListOfProductOptionsResponse>(
      `products/${productNo}/options`,
    )
    return res.data.option
  }

  public async createProductOptions(productNo: number, request: CreateProductOptionsRequest) {
    const res = await this.client.post<CreateProductOptionsResponse>(
      `products/${productNo}/options`,
      {
        request: request,
      }
    )
    return res.data.option
  }
}