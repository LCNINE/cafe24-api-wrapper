import { AbstractService } from "..";
import { queryMapToString } from "../../utils/query";
import { CreateAnOrderItemReq, CreateAnOrderItemRes, RetrieveAListOfOrderItemsOptions, RetrieveAListOfOrderItemsRes, UpdateAnOrderItemReq, UpdateAnOrderItemRes } from "./types/ordersItems/dto";

export class OrdersItemsService extends AbstractService {
  public async retrieveAListOfOrderItems(orderId: string, options?: RetrieveAListOfOrderItemsOptions) {
    const queryMap = new Map(Object.entries(options ?? {}))
    const url = `orders/${orderId}/items` + queryMapToString(queryMap)

    const res = await this.client.get<RetrieveAListOfOrderItemsRes>(url)
    return res.data.items
  }

  public async createAnOrderItem(orderId: string, data: CreateAnOrderItemReq) {
    const url = `orders/${orderId}/items`
    const res = await this.client.post<CreateAnOrderItemRes>(url, data)
    return res.data.items
  }

  public async updateAnOrderItem(orderId: string, orderItemCode: string, data: UpdateAnOrderItemReq) {
    const url = `orders/${orderId}/items/${orderItemCode}`
    const res = await this.client.put<UpdateAnOrderItemRes>(url, data)
    return res.data.item
  }
}