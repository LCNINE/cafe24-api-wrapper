import { AbstractService } from "..";
import { RetrieveAListOfProductVariantsOptions, RetrieveAListOfProductVariantsResponse } from "./types/productsVariants/dto";
import { ProductVariantEmbed } from "./types/productsVariants/embeds";

export class ProductsVariantsService extends AbstractService {
  public async retrieveAListOfProductVariants<E extends ProductVariantEmbed[]>(productNo: number, options?: RetrieveAListOfProductVariantsOptions<E>) {
    const res = await this.client.get<RetrieveAListOfProductVariantsResponse<E>>(`products/${productNo}/variants`)
    return res.data.variants
  } 


}
