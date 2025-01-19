export type CancelReasonType =
  | "A" // 고객변심
  | "B" // 배송지연
  | "J" // 배송오류
  | "C" // 배송불가지역
  | "L" // 수출/통관 불가
  | "D" // 포장불량
  | "E" // 상품 불만족
  | "F" // 상품정보상이
  | "K" // 상품불량
  | "G" // 서비스불만족
  | "H" // 품절
  | "I"; // 기타

export type OrderCancellation = {
  shop_no: number,
  order_id: string,
  status: "canceled" | "canceling",
  claim_code: string,
  items: {
    order_item_code: string,
    quantity: number
  },
  recover_inventory: "T" | "F",
  undone: "T" | "F",
  add_memo_too: "T" | "F",
  undone_reason_type?: CancelReasonType,
  undone_reason?: string,
  expose_order_detail?: "T" | "F",
  exposed_undone_reason?: string,
}