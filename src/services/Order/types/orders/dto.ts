import { PaginationParams } from "../../../commonTypes";
import { OrderEmbed, OrderWithEmbed } from "./embeds";

type OrderStatus =
  | 'N00' | 'N10' | 'N20' | 'N21' | 'N22' | 'N30' | 'N40' | 'N50'
  | 'C00' | 'C10' | 'C11' | 'C34' | 'C35' | 'C36' | 'C40' | 'C41' | 'C42' | 'C43' | 'C47' | 'C48' | 'C49'
  | 'R00' | 'R10' | 'R11' | 'R12' | 'R13' | 'R20' | 'R30' | 'R31' | 'R34' | 'R36' | 'R40' | 'R41' | 'R42' | 'R43'
  | 'E00' | 'E10' | 'N01' | 'E11' | 'E12' | 'E13' | 'E20' | 'E30' | 'E31' | 'E32' | 'E33' | 'E34' | 'E35' | 'E36' | 'E40';

type PaymentStatus = 'F' | 'M' | 'T' | 'A' | 'P';

type MemberType = '2' | '3';

type DateType =
  | 'order_date' | 'pay_date' | 'shipbegin_date' | 'shipend_date'
  | 'cancel_date' | 'place_date' | 'cancel_request_date' | 'cancel_accept_date'
  | 'cancel_complete_date' | 'exchange_request_date' | 'exchange_accept_date'
  | 'exchange_complete_date' | 'return_request_date' | 'return_accept_date'
  | 'return_complete_date' | 'purchaseconfirmation_date';

type DiscountMethod = 
  | 'point' | 'credit' | 'coupon'
  | 'market_discount' | 'discount_code'

type PaymentMethod =
  | 'cash' | 'card' | 'tcash' | 'icash' | 'cell' | 'deferpay'
  | 'cvs' | 'point' | 'mileage' | 'deposit' | 'giftcard'
  | 'pointcard' | 'etc';

type RefundStatus = 'F' | 'T' | 'M';

export type RetrieveAListOfOrdersOptions<E extends OrderEmbed[]> = {
  embed?: E;
  multiple_addresses?: 'T';
  shop_no?: number;
  start_date?: string;
  end_date?: string;
  order_id?: string[];
  order_status?: OrderStatus[];
  payment_status?: PaymentStatus;
  member_type?: MemberType;
  group_no?: number;
  buyer_name?: string;
  receiver_name?: string;
  name_furigana?: string;
  receiver_address?: string;
  member_id?: string;
  member_email?: string;
  product_no?: string[];
  product_code?: string[];
  date_type?: DateType;
  supplier_id?: string[];
  order_place_id?: string[];
  buyer_cellphone?: string;
  buyer_phone?: string;
  buyer_email?: string;
  inflow_path?: string;
  subscription?: 'T' | 'F';
  market_order_no?: string[];
  market_cancel_request?: 'T';
  payment_method?: PaymentMethod[];
  payment_gateway_name?: string[];
  market_seller_id?: string;
  discount_method?: DiscountMethod[];
  discount_code?: string;
  carrier_id?: number;
  wished_carrier_id?: number[];
  labels?: string[];
  refund_status?: RefundStatus[];
} & Partial<PaginationParams>


export type RetrieveAListOfOrdersResponse<E extends OrderEmbed[]> = {
  orders: OrderWithEmbed<E>[];
}


export type RetrieveAnOrderOptions<E extends OrderEmbed[]> = {
  embed?: E;
}

export type RetrieveAnOrderResponse<E extends OrderEmbed[]> = {
  order: OrderWithEmbed<E>;
}


export type RetrieveACountOfOrdersOptions = {
  multiple_addresses?: "T" | "F"; // 멀티 배송지 여부 (T: true, F: false)
  shop_no?: number; // 멀티쇼핑몰 번호 (최소값: 1, 기본값: 1)
  start_date?: string; // 검색 시작일 (YYYY-MM-DD)
  end_date?: string; // 검색 종료일 (YYYY-MM-DD)
  order_id?: string[]; // 주문번호 (여러 건 조회 가능)
  order_status?: string[]; // 주문상태 코드 (여러 건 조회 가능)
  payment_status?: 'F' | 'M' | 'T' | 'A' | 'P'; // 결제상태
  member_type?: '2' | '3'; // 회원여부 (2: 회원, 3: 비회원)
  group_no?: number; // 회원등급번호
  buyer_name?: string; // 주문자명
  receiver_name?: string; // 수령자명
  name_furigana?: string; // 수령자명 (발음)
  receiver_address?: string; // 수령자주소
  member_id?: string; // 회원아이디
  member_email?: string; // 회원 이메일
  product_no?: string[]; // 상품번호 (여러 건 조회 가능)
  product_code?: string; // 상품코드 (검색어 포함 검색, 대소문자 구분)
  date_type?: DateType;
  supplier_id?: string[]; // 공급사 아이디 (여러 건 조회 가능)
  order_place_id?: string[]; // 주문경로 (여러 건 조회 가능)
  buyer_cellphone?: string; // 주문자 휴대 전화
  buyer_phone?: string; // 주문자 일반 전화
  buyer_email?: string; // 주문자 이메일
  inflow_path?: string; // 유입경로
  subscription?: "T" | "F"; // 정기결제 여부 (T: true, F: false)
  market_order_no?: string[]; // 마켓 주문 번호 (여러 건 조회 가능)
  market_cancel_request?: "T" | "F"; // 마켓 취소요청 여부 (T: true, F: false)
  payment_method?: (
    | 'cash'
    | 'card'
    | 'tcash'
    | 'icash'
    | 'cell'
    | 'deferpay'
    | 'cvs'
    | 'point'
    | 'mileage'
    | 'deposit'
    | 'giftcard'
    | 'pointcard'
    | 'etc'
  )[]; // 결제수단 코드 (여러 건 조회 가능)
  payment_gateway_name?: string[]; // PG 이름 (여러 건 조회 가능)
  market_seller_id?: string[]; // 마켓 판매자 아이디 (여러 건 조회 가능)
  discount_method?: DiscountMethod[]; // 할인수단 (여러 건 조회 가능)
  discount_code?: string; // 할인코드
  carrier_id?: number; // 배송사 아이디 (최소값: 1)
  wished_carrier_id?: number[]; // 희망배송사 아이디 (여러 건 조회 가능)
  labels?: string[]; // 주문 라벨 (여러 건 조회 가능)
  refund_status?: ('F' | 'T' | 'M')[]; // 환불상태 (여러 건 조회 가능)
}


type ProcessStatus = 'prepare' | 'prepareproduct' | 'hold' | 'unhold';

export type OrderUpdate = {
  shop_no: number,
  order_id: string,
  process_status: ProcessStatus,
  order_item_code: string[],
  purchase_confirmation: "T" | "F" | null,
  collect_points: "T" | "F",
  show_shipping_address: "T" | "F" | null
}
export type OrderUpdateWithOrderId = Partial<Omit<OrderUpdate, 'order_id'>> & { order_id: string }

export type OrdersUpdateReq = {
  shop_no?: number,
  requests: OrderUpdateWithOrderId[]
}
export type OrdersUpdateRes = {
  orders: OrderUpdate[]
}

export type OrderUpdateReq = {
  shop_no?: number,
  requests: OrderUpdateWithOrderId
}
export type OrderUpdateRes = {
  order: OrderUpdate
}