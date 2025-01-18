import { AxiosInstance } from "axios"
import { UnionToIntersection } from "../../utils/helperTypes"
import { queryMapToString } from "../../utils/query"
import { AbstractService } from ".."
import { CreateProductRequest, CreateProductResponse, DeleteProductRequest, DeleteProductResponse, Embed, ProductGetListOptions, ProductGetOneOptions, ProductWithEmbed } from "./types/products/types"

export class ProductsService extends AbstractService {
  constructor(client: AxiosInstance) {
    super(client)
  }

  public async retrieveAProductResource<E extends Embed[]>(productNo: number, options?: ProductGetOneOptions<E>) {
    const queryMap = new Map(Object.entries(options ?? {}))
    const url = `products/${productNo}` + queryMapToString(queryMap)

    const res = await this.client.get<{ product: ProductWithEmbed<E> }>(url)
    return res.data.product
  }

  public async retrieveAListOfProducts<E extends Embed[]>(options?: ProductGetListOptions<E>) {
    const queryMap = new Map(Object.entries(options ?? {}))
    const url = `products` + queryMapToString(queryMap)

    const res = await this.client.get<{ products: ProductWithEmbed<E>[] }>(url)
    return res.data.products
  }

  public async createAProduct(data: CreateProductRequest) {
    const res = await this.client.post<CreateProductResponse>(`products`, data)
    return res.data.product
  }

  public async deleteAProduct(data: DeleteProductRequest) {
    const { product_no } = data
    const res = await this.client.delete<DeleteProductResponse>(`products/${product_no}`)
    return res.data.product
  }
}
