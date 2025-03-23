import { AbstractService } from "..";
import { RetrieveAListOfProductVariantsOptions, RetrieveAListOfProductVariantsResponse, UpdateMultipleProductVariantsRequest, UpdateMultipleProductVariantsResponse } from "./types/productsVariants/dto";
import { ProductVariantEmbed } from "./types/productsVariants/embeds";

export class ProductsVariantsService extends AbstractService {
  public async retrieveAListOfProductVariants<E extends ProductVariantEmbed[]>(productNo: number, options?: RetrieveAListOfProductVariantsOptions<E>) {
    const res = await this.client.get<RetrieveAListOfProductVariantsResponse<E>>(`products/${productNo}/variants`)
    return res.data.variants
  } 

  public async updateMultipleProductVariants(productNo: number, request: UpdateMultipleProductVariantsRequest) {
    const res = await this.client.put<UpdateMultipleProductVariantsResponse>(
      `products/${productNo}/variants`,
      {
        request: request,
      }
    )
    return res.data.variants
  }
}
