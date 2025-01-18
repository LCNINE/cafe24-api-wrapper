import { OrderItem } from "./types"

export type RetrieveAListOfOrderItemsOptions = {
  shop_no?: number,
  supplier_id: string[],
}

export type RetrieveAListOfOrderItemsRes = {
  items: OrderItem[],
}


export type CreateAnOrderItemReq = {
  shop_no?: number,
  requests: {
    variant_code: string,
    was_product_bundle?: "T" | "F",
    original_bundle_item_no?: string
  }[]
}

export type CreateAnOrderItemRes = {
  items: OrderItem[]
}

type ClaimReasonUpdateType = "A" | "B" | "J" | "C" | "L" | "D" | "E" | "F" | "K" | "G" | "H" | "I"
export type UpdateAnOrderItemReq = {
  shop_no?: number,
  requests: {
    claim_type?: "C" | "R",
    claim_status?: "T" | "F",
    claim_reason_type?: ClaimReasonUpdateType,
    claim_reason?: string,
    claim_quantity?: number,
    multi_invoice?: {
      tracking_no: string,
      shipping_company_id: number,
      quantity: number,
    }[]
  }
}

export type UpdateAnOrderItemRes = {
  item: OrderItem
}