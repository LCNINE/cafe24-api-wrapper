/***************************************************
 * 리터럴 값이 4개를 초과하는 경우 별도 타입으로 분리
 ***************************************************/

/** claim_reason_type에서 가능한 값(구매자·판매자 취소/교환/반품 사유) */
export type ClaimReasonType =
  | "A" // 고객변심(구매자 취소) or 고객변심(판매자 취소)
  | "G" // 서비스불만족(구매자 취소)
  | "B" // 배송지연(구매자 취소)
  | "I" // 기타(구매자 취소)
  | "O" // 고객변심(구매자 교환/반품)
  | "P" // 상품 불만족(구매자 교환/반품)
  | "V" // 상품불량(구매자 교환/반품)
  | "W" // 배송오류(구매자 교환/반품)
  | "J" // 배송오류(판매자 취소)
  | "C" // 배송불가지역(판매자 취소)
  | "L" // 수출/통관 불가(판매자 취소)
  | "D" // 포장불량(판매자 취소)
  | "E" // 상품 불만족(판매자 취소)
  | "F" // 상품정보상이(판매자 취소)
  | "K" // 상품불량(판매자 취소)
  | "H"; // 품절(판매자 취소)

/** naver_pay_claim_status에서 가능한 값 */
export type NaverPayClaimStatus =
  | "PAYMENT_WAITING"
  | "PAYED"
  | "DELIVERING"
  | "DELIVERED"
  | "PURCHASE_DECIDED"
  | "EXCHANGED"
  | "CANCELED"
  | "RETURNED"
  | "CANCELED_BY_NOPAYMENT"
  | "NOT_YET"
  | "OK"
  | "CANCEL"
  | "CANCEL_REQUEST"
  | "CANCELING"
  | "CANCEL_DONE"
  | "CANCEL_REJECT"
  | "RETURN_REQUEST"
  | "COLLECTING" // 중복으로 쓰이지만 한 번만 선언
  | "COLLECT_DONE"
  | "RETURN_DONE"
  | "RETURN_REJECT"
  | "EXCHANGE_REQUEST"
  | "EXCHANGE_REDELIVERING"
  | "EXCHANGE_DONE"
  | "EXCHANGE_REJECT"
  | "PURCHASE_DECISION_HOLDBACK"
  | "PURCHASE_DECISION_HOLDBACK_REDELIVERING"
  | "PURCHASE_DECISION_REQUEST"
  | "PURCHASE_DECISION_HOLDBACK_RELEASE"
  | "ADMIN_CANCELING"
  | "ADMIN_CANCEL_DONE";

/** status_code에서 가능한 값 */
export type StatusCode = 
  | "N1" // 정상
  | "N2" // 교환상품
  | "C1" // 입금전취소
  | "C2" // 배송전취소
  | "C3" // 반품
  | "E1"; // 교환

/** shipping_fee_type에서 가능한 값 (9가지) */
export type ShippingFeeType =
  | "T" // 무료
  | "F" // 착불
  | "D" // 차등(금액)
  | "M" // 조건(금액)
  | "I" // 고정
  | "N" // 비례(수량)
  | "W" // 차등(무게)
  | "C" // 차등(수량)
  | "X"; // 기본배송

/***************************************************
 * 배열 내부에 객체 구조가 필요한 경우를 위한 타입
 ***************************************************/

/** 추가입력 옵션(additional_option_values)의 아이템 구조 */
export interface AdditionalOptionValue {
  key: string;
  type: string;
  name: string;
  value: string;
}

/** 세트상품 목록(product_bundle_list)의 아이템 구조 */
export interface ProductBundleItem {
  product_no: number;
  product_code: string;
  variant_code: string;
  product_name: string;
  product_name_default: string;
  option_id: string;
  option_value: string;
  option_value_default: string;
  additional_option_value: string;
  additional_option_values: AdditionalOptionValue[];
  quantity: number;
  supplier_id: string;
  eng_product_name: string | null;
  hs_code: string;
  /** 가격 관련 필드는 모두 string */
  product_price: string;
  option_price: string;
  custom_product_code: string;
  custom_variant_code: string | null;
}

/** 옵션 배열(options)의 아이템 구조 */
export interface ItemOption {
  option_code: string;
  option_name: string | null;
  option_value: {
    option_text: string | null;
    value_no: number;
  };
}

/** 멀티 송장(multi_invoice)의 아이템 구조 */
export interface MultiInvoice {
  /** 예: "M"(합포장), "S"(단독포장) 등으로 추정 */
  type: string; 
  tracking_no: string;
  /** 본문 샘플에선 number로 나왔지만, 상위 필드는 string이므로 혼동되어 union 처리 */
  shipping_company_id: string | number;
  shipping_company_name: string;
  shipping_company_code: string;
  quantity: number;
}

/***************************************************
 * 메인 OrderItem 인터페이스
 ***************************************************/
export interface OrderItem {
  shop_no: number;
  item_no: number;
  order_item_code: string;
  variant_code: string;
  product_no: number;
  product_code: string;
  internal_product_name: string;
  custom_product_code: string;
  custom_variant_code: string;
  eng_product_name: string | null;
  option_id: string;
  option_value: string;
  option_value_default: string;
  additional_option_value: string;
  additional_option_values: AdditionalOptionValue[];

  product_name: string;
  product_name_default: string;
  /** 가격(숫자) 관련 필드는 string */
  product_price: string;
  option_price: string;
  additional_discount_price: string;
  coupon_discount_price: string;
  app_item_discount_amount: string;
  payment_amount: string;

  quantity: number;
  /** A=과세, B=면세, C=비과세 */
  product_tax_type: "A" | "B" | "C";
  tax_rate: number;

  supplier_product_name: string;
  /** D=직등록형, P=수수료형 */
  supplier_transaction_type: "D" | "P";
  supplier_id: string;
  supplier_name: string;

  tracking_no: string;
  shipping_code: string;
  claim_code: string;
  claim_reason_type: ClaimReasonType;
  claim_reason: string;

  refund_bank_name: string;
  refund_bank_account_no: string;
  refund_bank_account_holder: string;

  /** 우체국 택배연동 상태 (샘플 상 null 가능) */
  post_express_flag: "T" | "F" | null;

  order_status: string;
  /** 샘플 상 null 가능 */
  request_undone: "Cancellation" | "Exchange" | "Return" | null;
  /** 샘플 상 null 가능 */
  order_status_additional_info: string | null;
  claim_quantity: number;

  status_code: StatusCode;
  status_text: string;
  open_market_status: string;
  /** 묶음배송 타입 (N=단일, C=복합) */
  bundled_shipping_type: "N" | "C";

  /** 샘플에선 상위에는 string "2", 멀티송장 내부엔 number 2 → 혼동으로 union 처리 */
  shipping_company_id: string | number;
  shipping_company_name: string;
  shipping_company_code: string;

  /** 세트상품 여부 (T/F) */
  product_bundle: "T" | "F";
  /** 세트상품 번호(샘플은 "0" → string으로 판단) */
  product_bundle_no: string;
  product_bundle_name: string | null;
  product_bundle_name_default: string | null;
  /** 일체형(C) / 분리형(S) */
  product_bundle_type: "C" | "S";
  /** T이면 분리되었던 적 있음, 샘플에서 null 확인 */
  was_product_bundle: "T" | null;
  /** 분리된 기존 품목 번호, 샘플에서 null */
  original_bundle_item_no: number | null;

  naver_pay_order_id: string | null;
  naver_pay_claim_status: NaverPayClaimStatus;

  /** 개별배송비 */
  individual_shipping_fee: string;
  shipping_fee_type: ShippingFeeType;
  shipping_fee_type_text: string;
  /** 선/착불/무료 구분 (C/P/F) */
  shipping_payment_option: "C" | "P" | "F";

  payment_info_id: string;

  /** 기존 품주 아이디 배열 예: [242, 473] */
  original_item_no: number[];

  /** 매장수령 여부 */
  store_pickup: "T" | "F";

  ordered_date: string;
  shipped_date: string | null;
  delivered_date: string | null;
  purchaseconfirmation_date: string | null;
  cancel_date: string | null;
  return_confirmed_date: string | null;
  return_request_date: string | null;
  return_collected_date: string | null;
  cancel_request_date: string | null;
  refund_date: string | null;
  exchange_request_date: string | null;
  exchange_date: string | null;

  product_material: string | null;
  product_material_eng: string | null;
  cloth_fabric: string | null;

  /** 중량, 부피, 부피무게 등도 string (샘플 참고) */
  product_weight: string;
  volume_size: string | null;
  volume_size_weight: string | null;

  clearance_category: string | null;
  clearance_category_info: string | null;
  clearance_category_code: string | null;
  hs_code: string;

  /** 1+N 이벤트 여부 (샘플에서 null 확인) */
  one_plus_n_event: "T" | "F" | null;

  origin_place: string;
  origin_place_no: number;
  made_in_code: string;
  origin_place_value: string;

  /** 사은품 여부 (T/F) */
  gift: "T" | "F";
  /** 사은품증정 조건품주목록(샘플 null) → 구체적 구조 알 수 없어 string|null 가정 */
  item_granting_gift: string | null;

  /** 정기결제 여부 (T/F) */
  subscription: "T" | "F";

  product_bundle_list: ProductBundleItem[];

  /** 마켓 취소요청 여부 T/F, 샘플에서 null 가능 */
  market_cancel_request: "T" | "F" | null;
  market_cancel_request_quantity: number | null;
  market_fail_reason: string | null;
  market_fail_reason_guide: string | null;
  market_item_no: string | null;
  market_custom_variant_code: string | null;

  /** 옵션 구성 방식 (T/E/F) */
  option_type: "T" | "E" | "F";
  options: ItemOption[];

  /** 상품별 마켓 할인금액 */
  market_discount_amount: string;

  labels: string | null;
  order_status_before_cs: string | null;

  /** 공급가 */
  supply_price: string;

  multi_invoice: MultiInvoice[];

  order_id: string;

  /** 취소/교환/반품 타입 (문서에 구체 예시 없어서 임의 추정) */
  claim_type: string | null;
  /** 취소/교환/반품 요청 상태 (구체 예시 없어 string|null 처리) */
  claim_status: string | null;
}
