import { AxiosInstance } from "axios";
import { AbstractService } from "..";
import { OrderEmbed } from "./types/orders/embeds";
import { OrdersUpdateReq, OrdersUpdateRes, OrderUpdate, OrderUpdateReq, OrderUpdateRes, OrderUpdateWithOrderId, RetrieveACountOfOrdersOptions, RetrieveAListOfOrdersOptions, RetrieveAListOfOrdersResponse, RetrieveAnOrderOptions, RetrieveAnOrderResponse } from "./types/orders/dto";
import { queryMapToString } from "../../utils/query";

export class OrdersService extends AbstractService {
  constructor(client: AxiosInstance) {
    super(client)
  }

  public async retrieveAListOfOrders<E extends OrderEmbed[]>(options?: RetrieveAListOfOrdersOptions<E>) {
    const queryMap = new Map(Object.entries(options ?? {}))
    const url = `orders` + queryMapToString(queryMap)

    const res = await this.client.get<RetrieveAListOfOrdersResponse<E>>(url)
    return res.data.orders
  }

  public async retrieveAnOrder<E extends OrderEmbed[]>(orderId: string, options?: RetrieveAnOrderOptions<E>) {
    const queryMap = new Map(Object.entries(options ?? {}))
    const url = `orders/${orderId}` + queryMapToString(queryMap)

    const res = await this.client.get<RetrieveAnOrderResponse<E>>(url)
    return res.data.order
  }

  public async retrieveACountOfOrders(options?: RetrieveACountOfOrdersOptions) {
    const queryMap = new Map(Object.entries(options ?? {}))
    const url = `orders/count` + queryMapToString(queryMap)

    const res = await this.client.get<{ count: number }>(url)
    return res.data.count
  }

  public async updateStatusForMultipleOrders(data: OrdersUpdateReq) {
    const res = await this.client.put<OrdersUpdateRes>("orders", data)
    return res.data.orders
  }

  public async updateAnOrderStatus(orderId: string, data: OrderUpdateReq) {
    const res = await this.client.put<OrderUpdateRes>(`orders/${orderId}`, data)
    return res.data.order
  }
}