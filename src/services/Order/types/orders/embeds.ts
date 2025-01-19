import { UnionToIntersection } from "../../../../utils/helperTypes"
import { OrderCancellation } from "../ordersCancellation/types"
import { OrderItem } from "../ordersItems/types"
import { Order } from "./types"

export type OrderEmbed = "items" | "receivers" | "buyer" | "return" | "cancellation" | "exchange"

export type OrderEmbedFields = {
  items: {
    items: OrderItem[]
  }
  receivers: {
  }
  buyer: {
  }
  return: {
  }
  cancellation: {
    cancellation: OrderCancellation[]
  }
  exchange: {
  }
}

export type OrderEmbedIncludes<E extends OrderEmbed[]> = UnionToIntersection<
  {
    [K in E[number]]: K extends keyof OrderEmbedFields ? OrderEmbedFields[K] : {}
  }[E[number]]
>

export type OrderWithEmbed<E extends OrderEmbed[]> = Order & OrderEmbedIncludes<E>
