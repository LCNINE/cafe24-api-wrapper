import { CancelReasonType, OrderCancellation } from "./types"

type RefundMethodCode =
  | "T" // 현금
  | "F" // 신용카드
  | "M" // 적립금
  | "G" // 계좌이체
  | "C" // 휴대폰
  | "D" // 예치금
  | "Z" // 후불
  | "O" // 선불금
  | "V" // 편의점
  | "J" // 제휴상품권
  | "K" // 제휴포인트
  | "I"; // 기타

export type CreateAnOrderCancellationReq = {
  shop_no?: number,
  request: {
    payment_gateway_cancel?: "T" | "F",
    status: "canceled" | "canceling",
    recover_inventory?: "T" | "F",
    recover_coupon?: "T" | "F",
    recover_coupon_no?: number[],
    add_memo_too?: "T" | "F",
    reason?: string,
    claim_reason_type?: CancelReasonType,
    naverpay_cancel_reason_type?: string,
    kakaopay_cancel_reason_type?: string,
    refund_method_code?: RefundMethodCode,
    refund_bank_code?: string,
    refund_bank_name?: string,
    refund_bank_account_no?: string,
    refund_bank_account_holder?: string,
    items?: {
      order_item_code: string,
      quantity: number,
    }[]
  }
}

export type CreateAnOrderCancellationRes = {
  cancellation: OrderCancellation
}


export type ChangeCancellationDetailsReq = {
  shop_no?: number,
  request: {
    recover_inventory: "T" | "F";
    undone: "T";
    add_memo_too: "T" | "F";
    undone_reason_type: CancelReasonType;
    undone_reason?: string; // 최대 2000자
    expose_order_detail: "T" | "F";
    exposed_undone_reason?: string; // 최대 2000자
  }
}

export type ChangeCancellationDetailsRes = {
  cancellation: OrderCancellation
}