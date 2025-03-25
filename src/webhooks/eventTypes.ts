/**
 * Cafe24 Webhook Event Numbers
 */
export enum Cafe24WebhookEventNo {
  // 앱 이벤트
  APP_UNINSTALLED = 90077,                   // 쇼핑몰에 설치된 앱이 삭제된 경우
  APP_EXPIRED = 90078,                       // 쇼핑몰에 설치된 앱이 만료된 경우
  APP_EXPIRY_EXTENDED = 90079,               // 쇼핑몰에 설치된 앱의 만료일이 연장된 경우
  APP_PAYMENT_COMPLETED = 90157,             // 쇼핑몰에 설치된 앱이 결제된 경우
  APP_REFUND_REQUESTED = 90158,              // 쇼핑몰에 설치된 앱의 결제 환불을 요청한 경우
  APP_REFUND_COMPLETED = 90159,              // 쇼핑몰에 설치된 앱의 결제 환불이 완료된 경우
  ORDER_RETURN_COMPLETED = 90160,            // 쇼핑몰에 접수된 주문의 반품이 완료된 경우 (취소번호별)

  // 쇼핑몰 > 상품 이벤트
  PRODUCT_CREATED = 90001,                   // 쇼핑몰에 상품이 등록된 경우
  PRODUCT_UPDATED = 90002,                   // 쇼핑몰 상품이 수정된 경우
  PRODUCT_BATCH_UPDATED = 90041,             // 쇼핑몰 상품이 일괄 수정된 경우
  PRODUCT_DELETED = 90003,                   // 쇼핑몰 상품이 삭제된 경우
  PRODUCT_RESTORED = 90022,                  // 쇼핑몰에서 상품을 복구한 경우
  PRODUCT_ITEM_STOCK_CHANGED = 90075,        // 품목의 재고가 품절되었거나, 품절이 해제된 경우
  PRODUCT_SOLDOUT_STATUS_CHANGED = 90150,    // 쇼핑몰에 등록된 상품의 품절상태가 변경된 경우

  // 쇼핑몰 > 주문 이벤트
  ORDER_CREATED = 90023,                     // 쇼핑몰에 주문이 접수된 경우
  ORDER_SHIPPING_STATUS_CHANGED = 90024,     // 쇼핑몰에 접수된 주문의 배송상태가 변경된 경우
  ORDER_SHIPPING_STATUS_BATCH_CHANGED = 90071, // 쇼핑몰에 접수된 주문의 배송상태가 변경된 경우 (일괄)
  ORDER_PAYMENT_STATUS_CHANGED = 90025,      // 쇼핑몰에 접수된 주문의 입금상태가 변경된 경우
  ORDER_CANCEL_STATUS_CHANGED = 90026,       // 쇼핑몰에 접수된 주문의 취소상태가 변경된 경우
  ORDER_CANCEL_STATUS_BATCH_CHANGED = 90072, // 쇼핑몰에 접수된 주문의 취소상태가 변경된 경우 (일괄)
  ORDER_RETURN_STATUS_CHANGED = 90027,       // 쇼핑몰에 접수된 주문의 반품상태가 변경된 경우
  ORDER_RETURN_STATUS_BATCH_CHANGED = 90074, // 쇼핑몰에 접수된 주문의 반품상태가 변경된 경우 (일괄)
  ORDER_EXCHANGE_STATUS_CHANGED = 90028,     // 쇼핑몰에 접수된 주문의 교환상태가 변경된 경우
  ORDER_REFUND_STATUS_CHANGED = 90029,       // 쇼핑몰에 접수된 주문의 환불상태가 변경된 경우
  ORDER_REFUND_STATUS_BATCH_CHANGED = 90073, // 쇼핑몰에 접수된 주문의 환불상태가 변경된 경우 (일괄)
  ORDER_PRODUCT_ADDED = 90031,               // 쇼핑몰에 접수된 주문에 상품을 추가한 경우
  ORDER_RECIPIENT_CHANGED = 90064,           // 쇼핑몰에 접수된 주문의 수령자정보가 변경된 경우
  ORDER_ADMIN_MEMO_ADDED = 90066,            // 쇼핑몰에 접수된 주문에 관리자메모가 등록된 경우
  ORDER_ADMIN_MEMO_UPDATED = 90068,          // 쇼핑몰에 접수된 주문에 관리자메모가 수정된 경우
  ORDER_ADMIN_MEMO_DELETED = 90069,          // 쇼핑몰에 접수된 주문에 관리자메모가 삭제된 경우
  ORDER_DELETED = 90070,                     // 쇼핑몰에서 주문서가 삭제된 경우
  PRODUCT_ADDED_TO_CART = 90084,             // 쇼핑몰 상품이 장바구니에 담긴 경우
  ORDER_INVOICE_CHANGED = 90162,             // 쇼핑몰에 접수된 주문의 송장번호가 변경된 경우

  // 쇼핑몰 > 회원 이벤트
  MEMBER_JOINED = 90032,                     // 쇼핑몰에 신규 회원이 가입한 경우
  MEMBER_SNS_LINKED = 90063,                 // 쇼핑몰 회원이 SNS 계정을 연동한 경우
  MEMBER_INFORMATION_CHANGED = 90080,        // 쇼핑몰 회원정보가 변경된 경우
  MEMBER_LOGGED_IN = 90143,                  // 쇼핑몰 회원이 로그인한 경우
  MEMBER_GRADE_CHANGED = 90144,              // 쇼핑몰 회원 등급이 변경된 경우
  MEMBER_DORMANT = 90145,                    // 쇼핑몰에 회원이 휴면회원으로 변경된 경우
  MEMBER_DORMANT_RELEASED = 90146,           // 쇼핑몰에 회원이 휴면회원 해제된 경우
  MEMBER_WITHDRAWN = 90147,                  // 쇼핑몰에 회원이 탈퇴한 경우
  MEMBER_MILEAGE_CHANGED = 90148,            // 쇼핑몰 회원의 적립금이 변동된 경우

  // 쇼핑몰 > 게시판 이벤트
  BOARD_POST_CREATED = 90033,                // 쇼핑몰에 게시물이 등록된 경우
  BOARD_COMMENT_CREATED = 90034,             // 쇼핑몰 게시물에 댓글이 등록된 경우
  BOARD_URGENT_INQUIRY_CREATED = 90035,      // 쇼핑몰에 긴급문의가 접수된 경우
  BOARD_POST_DELETED = 90036,                // 쇼핑몰의 게시물이 삭제된 경우
  BOARD_COMMENT_DELETED = 90037,             // 쇼핑몰 게시물의 댓글이 삭제된 경우
  BOARD_URGENT_INQUIRY_DELETED = 90038,      // 쇼핑몰에 접수된 긴급문의가 삭제된 경우
  BOARD_POST_UPDATED = 90039,                // 쇼핑몰의 게시물이 수정된 경우

  // 쇼핑몰 > 상품분류 이벤트
  CATEGORY_CREATED = 90042,                  // 쇼핑몰에 상품분류가 추가된 경우
  CATEGORY_UPDATED = 90043,                  // 쇼핑몰의 상품분류가 수정된 경우
  CATEGORY_PRODUCT_DISPLAY_BATCH_UPDATED = 90046, // 쇼핑몰에서 상품분류의 상품 진열 설정을 일괄변경한 경우
  CATEGORY_DELETED = 90044,                  // 쇼핑몰에서 상품분류가 삭제된 경우
  CATEGORY_ORDER_CHANGED = 90045,            // 쇼핑몰 상품분류의 순서가 변경된 경우

  // 쇼핑몰 > 공급사 이벤트
  SUPPLIER_CREATED = 90090,                  // 쇼핑몰에 공급사가 등록된 경우
  SUPPLIER_UPDATED = 90091,                  // 쇼핑몰에 등록된 공급사가 수정된 경우
  SUPPLIER_BATCH_UPDATED = 90092,            // 쇼핑몰에 등록된 공급사가 일괄 수정된 경우
  SUPPLIER_DELETED = 90093,                  // 쇼핑몰에 등록된 공급사가 삭제된 경우

  // 쇼핑몰 > 배송 이벤트
  SHIPPING_COMPANY_CREATED = 90100,          // 쇼핑몰에 배송업체가 등록된 경우
  SHIPPING_COMPANY_UPDATED = 90101,          // 쇼핑몰에 등록된 배송업체가 수정된 경우
  SHIPPING_COMPANY_DELETED = 90102,          // 쇼핑몰에 등록된 배송업체가 삭제된 경우

  // 쇼핑몰 > 상점 이벤트
  MULTISHOP_CREATED = 90110,                 // 쇼핑몰에 멀티쇼핑몰이 추가된 경우
  MULTISHOP_UPDATED = 90111,                 // 쇼핑몰에 등록된 멀티쇼핑몰이 수정된 경우
  MULTISHOP_DELETED = 90112,                 // 쇼핑몰에 등록된 멀티쇼핑몰이 삭제된 경우
  SUB_ADMIN_CREATED = 90113,                 // 쇼핑몰에 부운영자가 등록된 경우
  SUB_ADMIN_UPDATED = 90114,                 // 쇼핑몰에 등록된 부운영자가 수정된 경우
  SUB_ADMIN_DELETED = 90115,                 // 쇼핑몰에 등록된 부운영자가 삭제된 경우
  PRIVACY_SETTINGS_CHANGED = 90116,          // 개인정보제공 설정이 변경된 경우
  DOMAIN_ADDED = 90117,                      // 쇼핑몰 도메인이 추가된 경우
  DOMAIN_DELETED = 90119,                    // 쇼핑몰 도메인이 삭제된 경우
  SHOP_INFORMATION_UPDATED = 90121,          // 내 쇼핑몰 정보 설정이 수정된 경우
  SHOP_DELETED = 90166,                      // 쇼핑몰이 삭제처리된 경우
  SHOP_DORMANT = 90167,                      // 쇼핑몰이 휴면처리된 경우
  SHOP_DORMANT_RELEASED = 90168,             // 쇼핑몰이 휴면해제된 경우
  SHOP_BLOCKED = 90169,                      // 쇼핑몰이 차단된 경우

  // 쇼핑몰 > 운영설정 이벤트
  KAKAOSYNC_SETTINGS_CHANGED = 90142,        // 카카오싱크 설정이 변경된 경우

  // 쇼핑몰 > 혜택 이벤트
  BENEFIT_CREATED = 90047,                   // 쇼핑몰에 혜택이 등록된 경우
  BENEFIT_UPDATED = 90048,                   // 쇼핑몰에 등록된 혜택이 수정된 경우
  BENEFIT_DELETED = 90050,                   // 혜택이 삭제된 경우

  // 쇼핑몰 > 쿠폰 이벤트
  COUPON_UPDATED = 90151,                    // 쇼핑몰에 등록된 쿠폰이 수정된 경우
  COUPON_DELETED = 90152,                    // 쇼핑몰에 등록된 쿠폰이 삭제된 경우
  COUPON_CREATED = 90153,                    // 쇼핑몰에 쿠폰이 등록된 경우
  COUPON_ISSUE_STATUS_CHANGED = 90154        // 쇼핑몰 쿠폰의 발급 상태가 변경된 경우
}

/**
 * 회원 휴면 변경 이벤트 리소스 (90145)
 */
export interface MemberDormantResource {
  mall_id: string;
  event_shop_no: string;
  member_id: string;
}

/**
 * 회원 휴면 해제 이벤트 리소스 (90146)
 */
export interface MemberDormantReleasedResource {
  mall_id: string;
  event_shop_no: string;
  member_id: string;
}

/**
 * 회원 탈퇴 이벤트 리소스 (90147)
 */
export interface MemberWithdrawnResource {
  mall_id: string;
  event_shop_no: string;
  member_id: string;
}

/**
 * 회원 적립금 변동 이벤트 리소스 (90148)
 */
export interface MemberMileageChangedResource {
  mall_id: string;
  shop_no: string;
  member_id: string;
  mileage_money: number;
  avail_mileage: number;
  issue_datetime: string;
  case: string;
  case_text: string;
  reason: string | null;
}

/**
 * 게시물 등록 이벤트 리소스 (90033)
 */
export interface BoardPostCreatedResource {
  mall_id: string;
  event_shop_no: string;
  board_no: number;
  no: number;
  has_parent: string;
  member_id: string;
  writer: string;
}

/**
 * 게시물 댓글 등록 이벤트 리소스 (90034)
 */
export interface BoardCommentCreatedResource {
  mall_id: string;
  event_shop_no: string;
  board_no: number;
  member_id: string;
  writer: string;
  comment_member_id: string;
  comment_writer: string;
}

/**
 * 긴급문의 접수 이벤트 리소스 (90035)
 */
export interface BoardUrgentInquiryCreatedResource {
  mall_id: string;
  event_shop_no: string;
  member_id: string | null;
  writer: string;
}

/**
 * 게시물 삭제 이벤트 리소스 (90036)
 */
export interface BoardPostDeletedResource {
  mall_id: string;
  event_shop_no: string;
  board_no: number;
  no: number;
  member_id: string;
  writer: string;
}

/**
 * 게시물 댓글 삭제 이벤트 리소스 (90037)
 */
export interface BoardCommentDeletedResource {
  mall_id: string;
  event_shop_no: string;
  board_no: number;
  member_id: string;
  writer: string;
  comment_member_id: string;
  comment_writer: string;
}

/**
 * 긴급문의 삭제 이벤트 리소스 (90038)
 */
export interface BoardUrgentInquiryDeletedResource {
  mall_id: string;
  event_shop_no: string;
  member_id: string;
  writer: string;
}

/**
 * 게시물 수정 이벤트 리소스 (90039)
 */
export interface BoardPostUpdatedResource {
  mall_id: string;
  event_shop_no: string;
  board_no: number;
  no: number;
  has_parent: string;
  member_id: string;
  writer: string;
}

/**
 * 상품분류 추가 이벤트 리소스 (90042)
 */
export interface CategoryCreatedResource {
  mall_id: string;
  event_shop_no: string;
  category_no: number;
  category_name: string;
  use_display: string;
  use_main: string;
  display_type: string;
  product_display_scope: string;
  product_display_type: string;
  product_display_key: string;
  product_display_sort: string;
  soldout_product_display: string;
  sub_category_product_display: string;
}

/**
 * 상품분류 수정 이벤트 리소스 (90043)
 */
export interface CategoryUpdatedResource {
  mall_id: string;
  event_shop_no: string;
  category_no: number;
  category_name: string;
  use_display: string;
  use_main: string;
  display_type: string;
  product_display_scope: string;
  product_display_type: string;
  product_display_key: string;
  product_display_sort: string;
  soldout_product_display: string;
  sub_category_product_display: string;
}

/**
 * 상품분류 상품 진열 설정 일괄변경 이벤트 리소스 (90046)
 */
export interface CategoryProductDisplayBatchUpdatedResource {
  mall_id: string;
  event_shop_no: string;
  product_display_scope: string;
  product_display_type: string;
  product_display_key: string;
  product_display_sort: string;
}

/**
 * 상품분류 삭제 이벤트 리소스 (90044)
 */
export interface CategoryDeletedResource {
  mall_id: string;
  event_shop_no: string;
  category_no: number;
}

/**
 * 상품분류 순서 변경 이벤트 리소스 (90045)
 */
export interface CategoryOrderChangedResource {
  mall_id: string;
  event_shop_no: string;
}

/**
 * 공급사 등록 이벤트 리소스 (90090)
 */
export interface SupplierCreatedResource {
  mall_id: string;
  event_shop_no: string;
  supplier_code: string;
  supplier_name: string;
  use_supplier: string;
  trading_type: string;
  supplier_type: string;
  status: string;
  payment_type: string;
  commission: string;
  payment_period: string;
}

/**
 * 공급사 수정 이벤트 리소스 (90091)
 */
export interface SupplierUpdatedResource {
  mall_id: string;
  event_shop_no: string;
  supplier_code: string;
  supplier_name: string;
  use_supplier: string;
  trading_type: string;
  supplier_type: string;
  status: string;
  payment_type: string;
  commission: string;
  payment_period: string;
}

/**
 * 공급사 일괄 수정 이벤트 리소스 (90092)
 */
export interface SupplierBatchUpdatedResource {
  mall_id: string;
  event_shop_no: string;
  supplier_code: string;
}

/**
 * 공급사 삭제 이벤트 리소스 (90093)
 */
export interface SupplierDeletedResource {
  mall_id: string;
  event_shop_no: string;
  supplier_code: string;
}

/**
 * 배송업체 등록 이벤트 리소스 (90100)
 */
export interface ShippingCompanyCreatedResource {
  mall_id: string;
  event_shop_no: string;
  sc_id: string;
  sc_name: string;
  is_basic: string;
  phone1: string;
  phone2: string;
  email: string;
  shipping_money: string;
  homepage: string;
  trace_url: string;
  sender_name: string;
  sender_phone: string;
  sender_cellphone: string;
  weight: string;
  volume: string;
  shipping_type: string;
  box_type: string;
  sender_zipcode: string;
  sender_address1: string;
  sender_address2: string;
  executor_id: string;
  execute_method: string;
}

/**
 * 배송업체 수정 이벤트 리소스 (90101)
 */
export interface ShippingCompanyUpdatedResource {
  mall_id: string;
  event_shop_no: string;
  sc_id: string;
  sc_name: string;
  is_basic: string;
  phone1: string;
  phone2: string;
  email: string;
  shipping_money: string;
  homepage: string;
  trace_url: string;
  executor_id: string;
  execute_method: string;
}

/**
 * 배송업체 삭제 이벤트 리소스 (90102)
 */
export interface ShippingCompanyDeletedResource {
  mall_id: string;
  event_shop_no: string;
  sc_id: string;
  executor_id: string;
  execute_method: string;
}

/**
 * 멀티쇼핑몰 추가 이벤트 리소스 (90110)
 */
export interface MultishopCreatedResource {
  mall_id: string;
  shop_no: string;
  shop_name: string;
  language: string;
  currency: string;
  is_active: string;
}

/**
 * 멀티쇼핑몰 수정 이벤트 리소스 (90111)
 */
export interface MultishopUpdatedResource {
  mall_id: string;
  shop_no: string;
  shop_name: string;
  is_active: string;
}

/**
 * 멀티쇼핑몰 삭제 이벤트 리소스 (90112)
 */
export interface MultishopDeletedResource {
  mall_id: string;
  event_shop_no: string;
}

/**
 * 부운영자 등록 이벤트 리소스 (90113)
 */
export interface SubAdminCreatedResource {
  mall_id: string;
  sub_admin_id: string;
  sub_admin_type: string;
  user_name: string;
  available: string;
}

/**
 * 부운영자 수정 이벤트 리소스 (90114)
 */
export interface SubAdminUpdatedResource {
  mall_id: string;
  sub_admin_id: string;
  sub_admin_type: string;
  user_name: string;
  available: string;
  multishop_access_authority: string;
}

/**
 * 부운영자 삭제 이벤트 리소스 (90115)
 */
export interface SubAdminDeletedResource {
  mall_id: string;
  sub_admin_id: string;
}

/**
 * 개인정보제공 설정 변경 이벤트 리소스 (90116)
 */
export interface PrivacySettingsChangedResource {
  mall_id: string;
  event_shop_no: string;
  use_information_agreement: string;
  use_consignment_agreement: string;
}

/**
 * 도메인 추가 이벤트 리소스 (90117)
 */
export interface DomainAddedResource {
  mall_id: string;
  domain: string;
}

/**
 * 도메인 삭제 이벤트 리소스 (90119)
 */
export interface DomainDeletedResource {
  mall_id: string;
  domain: string;
}

/**
 * 쇼핑몰 정보 설정 수정 이벤트 리소스 (90121)
 */
export interface ShopInformationUpdatedResource {
  mall_id: string;
  event_shop_no: string;
  shop_name: string;
  country: string;
  zipcode: string;
  address1: string;
  address2: string;
  president_phone: string;
}

/**
 * 쇼핑몰 삭제 이벤트 리소스 (90166)
 */
export interface ShopDeletedResource {
  mall_id: string;
  event_shop_no: string;
  trigger_name: string;
}

/**
 * 쇼핑몰 휴면 이벤트 리소스 (90167)
 */
export interface ShopDormantResource {
  trigger_name: string;
  sample: {
    event_shop_no: string;
    mall_id: string;
  };
}

/**
 * 쇼핑몰 휴면 해제 이벤트 리소스 (90168)
 */
export interface ShopDormantReleasedResource {
  mall_id: string;
  event_shop_no: string;
  trigger_name: string;
}

/**
 * 쇼핑몰 차단 이벤트 리소스 (90169)
 */
export interface ShopBlockedResource {
  mall_id: string;
  event_shop_no: string;
  trigger_name: string;
}

/**
 * 카카오싱크 설정 변경 이벤트 리소스 (90142)
 */
export interface KakaosyncSettingsChangedResource {
  mall_id: string;
  event_shop_no: string;
  kakaosync_used: string;
  client_id: string;
}

/**
 * 혜택 등록 이벤트 리소스 (90047)
 */
export interface BenefitCreatedResource {
  mall_id: string;
  shop_no: number;
  benefit_no: number;
  use_benefit: string;
  benefit_name: string;
  benefit_start_date: string;
  benefit_end_date: string;
  customer_group_list: number[];
  product_binding_type: string;
  product_list: number[];
  add_category_list: number[] | null;
  except_category_list: number[] | null;
}

/**
 * 혜택 수정 이벤트 리소스 (90048)
 */
export interface BenefitUpdatedResource {
  mall_id: string;
  shop_no: number;
  benefit_no: number;
  use_benefit: string;
  benefit_name: string;
  benefit_start_date: string;
  benefit_end_date: string;
  customer_group_list: number[];
  product_binding_type: string;
  product_list: number[];
  add_category_list: number[] | null;
  except_category_list: number[] | null;
}

/**
 * 혜택 삭제 이벤트 리소스 (90050)
 */
export interface BenefitDeletedResource {
  mall_id: string;
  shop_no: number;
  benefit_no: number;
}

/**
 * 쿠폰 수정 이벤트 리소스 (90151)
 */
export interface CouponUpdatedResource {
  mall_id: string;
  event_shop_no: number;
  coupon_type: string;
  coupon_no: number;
  coupon_name: string;
  issue_status_code: string;
  issue_status: string;
}

/**
 * 쿠폰 삭제 이벤트 리소스 (90152)
 */
export interface CouponDeletedResource {
  mall_id: string;
  event_shop_no: number;
  coupon_type: string;
  coupon_no: number;
}

/**
 * 쿠폰 등록 이벤트 리소스 (90153)
 */
export interface CouponCreatedResource {
  mall_id: string;
  event_shop_no: number;
  coupon_type: string;
  coupon_no: number;
  coupon_name: string;
  issue_status_code: string;
  issue_status: string;
}

/**
 * 쿠폰 발급 상태 변경 이벤트 리소스 (90154)
 */
export interface CouponIssueStatusChangedResource {
  mall_id: string;
  event_shop_no: number;
  coupon_no: number;
  coupon_name: string;
  issue_status_code: string;
  issue_status: string;
  mode: string;
  type: string;
  start_date: string;
  end_date: string;
}


/**
 * 앱 삭제 이벤트 리소스 (90077)
 */
export interface AppUninstalledResource {
  mall_id: string;
  client_id: string;
  app_name: string;
  deleted_date: string;
}

/**
 * 앱 만료 이벤트 리소스 (90078)
 */
export interface AppExpiredResource {
  mall_id: string;
  client_id: string;
  app_name: string;
  expired_date: string;
}

/**
 * 앱 만료일 연장 이벤트 리소스 (90079)
 */
export interface AppExpiryExtendedResource {
  mall_id: string;
  client_id: string;
  app_name: string;
  expire_date: string;
  previous_expire_date: string;
  updated_date: string;
}

/**
 * 앱 결제 완료 이벤트 리소스 (90157)
 */
export interface AppPaymentCompletedResource {
  mall_id: string;
  client_id: string;
  order_id: string;
  payed_date: string;
  currency: string;
  amount: string;
  channel: string;
}

/**
 * 앱 환불 요청 이벤트 리소스 (90158)
 */
export interface AppRefundRequestedResource {
  mall_id: string;
  client_id: string;
  order_id: string;
  reason_code: string;
  reason_detail: string;
  request_date: string;
}

/**
 * 앱 환불 완료 이벤트 리소스 (90159)
 */
export interface AppRefundCompletedResource {
  mall_id: string;
  client_id: string;
  order_id: string;
  currency: string;
  refunded_amount: string;
  expire_date: string;
  refunded_date: string;
}

/**
 * 주문 반품 완료 이벤트 리소스 (90160)
 */
export interface OrderReturnCompletedResource {
  mall_id: string;
  event_shop_no: string;
  order_id: string;
  claim_code: string;
  claim_reason_type: string;
  claim_reason_type_text: string;
  claim_reason: string;
  order_price_amount: string;
  refund_amount: string;
  shipping_fee: string;
  refund_shipping_fee: string;
  refund_regional_surcharge: string;
  return_shipping_fee: string;
  return_regional_surcharge: string;
  add_discount_amount: string;
  member_grade_discount_amount: string;
  shipping_discount_amount: string;
  coupon_discount_amount: string;
  point_used: string;
  credit_used: string;
}

/**
 * 상품 등록/수정 이벤트 리소스 (90001, 90002)
 */
export interface ProductResource {
  mall_id: string;
  event_shop_no: string;
  product_no: number;
  product_code: string;
  created_date: string;
  updated_date: string;
  product_name: string;
  eng_product_name: string;
  supply_product_name: string;
  model_name: string;
  custom_product_code: string;
  product_condition: string;
  summary_description: string;
  simple_description: string;
  description: string;
  display: string;
  selling: string;
  retail_price: string;
  supply_price: string;
  price: string;
  price_content: string | null;
  adult_certification: string;
  manufacturer_code: string;
  supplier_code: string;
  brand_code: string;
  trend_code: string;
  made_date: string;
  release_date: string;
  origin_place_code: number;
  shipping_scope: string;
  translated: string;
}

/**
 * 상품 일괄 수정 이벤트 리소스 (90041)
 */
export interface ProductBatchUpdatedResource {
  mall_id: string;
  event_shop_no: string;
  product_no: string;
  action: string;
}

/**
 * 상품 삭제 이벤트 리소스 (90003)
 */
export interface ProductDeletedResource {
  mall_id: string;
  event_shop_no: string;
  product_no: number;
  product_code: string;
}

/**
 * 상품 복구 이벤트 리소스 (90022)
 */
export interface ProductRestoredResource {
  mall_id: string;
  event_shop_no: string;
  product_no: number;
}

/**
 * 품목 재고 변경 이벤트 리소스 (90075)
 */
export interface ProductItemStockChangedResource extends ProductResource {
  status_text: string;
  variant_code: string;
  use_soldout: string;
}

/**
 * 상품 품절상태 변경 이벤트 리소스 (90150)
 */
export interface ProductSoldoutStatusChangedResource {
  mall_id: string;
  event_shop_no: string;
  sold_out_by_current_shop: string;
  product_no: string;
  sold_out: {
    [key: string]: string;
  };
}

/**
 * 주문 접수 이벤트 리소스 (90023)
 */
export interface OrderCreatedResource {
  mall_id: string;
  event_shop_no: string;
  event_code: string;
  order_id: string;
  payment_gateway_name: string;
  currency: string;
  order_date: string;
  order_place_name: string;
  member_id: string | null;
  member_authentication: string | null;
  buyer_name: string;
  buyer_email: string;
  buyer_phone: string;
  buyer_cellphone: string;
  group_no_when_ordering: string;
  first_order: string | null;
  order_from_mobile: string;
  paid: string;
  payment_date: string;
  billing_name: string;
  bank_code: string | null;
  payment_method: string;
  easypay_name: string;
  use_escrow: string;
  bank_account_no: string;
  order_price_amount: string;
  membership_discount_amount: string;
  actual_payment_amount: string;
  mileage_spent_amount: string;
  shipping_fee: string;
  shipping_type: string;
  shipping_status: string;
  wished_delivery_date: string;
  wished_delivery_time: string | null;
  store_pickup: string;
  shipping_message: string;
  order_place_id: string;
  ordering_product_code: string;
  ordering_product_name: string;
}

/**
 * 주문 배송상태 변경 이벤트 리소스 (90024)
 */
export interface OrderShippingStatusChangedResource extends OrderCreatedResource {
  cancel_date: string | null;
  return_confirmed_date: string | null;
  included_deferpay_order: string;
  deferpay_order_id: string;
  withdraw: string;
  withdraw_type: string;
}

/**
 * 주문 배송상태 일괄 변경 이벤트 리소스 (90071)
 */
export interface OrderShippingStatusBatchChangedResource {
  mall_id: string;
  event_shop_no: string;
  event_code: string;
  order_id: string;
  included_deferpay_order: string;
  deferpay_order_id: string;
}

/**
 * 주문 입금상태 변경 이벤트 리소스 (90025)
 */
export interface OrderPaymentStatusChangedResource extends OrderCreatedResource {
  withdraw: string;
  withdraw_type: string;
}

/**
 * 주문 취소상태 변경 이벤트 리소스 (90026)
 */
export interface OrderCancelStatusChangedResource extends OrderCreatedResource {
  cancel_date: string | null;
}

/**
 * 주문 취소상태 일괄 변경 이벤트 리소스 (90072)
 */
export interface OrderCancelStatusBatchChangedResource {
  mall_id: string;
  event_shop_no: string;
  event_code: string;
  order_id: string;
}

/**
 * 주문 반품상태 변경 이벤트 리소스 (90027)
 */
export interface OrderReturnStatusChangedResource extends OrderCreatedResource {
  cancel_date: string | null;
  claim_reason_type: string;
  claim_reason: string;
  claim_reason_type_text: string;
}

/**
 * 주문 반품상태 일괄 변경 이벤트 리소스 (90074)
 */
export interface OrderReturnStatusBatchChangedResource {
  mall_id: string;
  event_shop_no: string;
  event_code: string;
  order_id: string;
}

/**
 * 주문 교환상태 변경 이벤트 리소스 (90028)
 */
export interface OrderExchangeStatusChangedResource extends OrderCreatedResource {
  cancel_date: string | null;
}

/**
 * 주문 환불상태 변경 이벤트 리소스 (90029)
 */
export interface OrderRefundStatusChangedResource extends OrderCreatedResource {
  cancel_date: string | null;
  return_confirmed_date: string | null;
}

/**
 * 주문 환불상태 일괄 변경 이벤트 리소스 (90073)
 */
export interface OrderRefundStatusBatchChangedResource {
  mall_id: string;
  event_shop_no: string;
  event_code: string;
  order_id: string;
}

/**
 * 주문 상품 추가 이벤트 리소스 (90031)
 */
export interface OrderProductAddedResource extends OrderCreatedResource {
  cancel_date: string | null;
}

/**
 * 주문 수령자 정보 변경 이벤트 리소스 (90064)
 */
export interface OrderRecipientChangedResource {
  mall_id: string;
  event_shop_no: string;
  event_code: string;
  order_id: string;
  order_place_id: string;
}

/**
 * 주문 관리자 메모 등록 이벤트 리소스 (90066)
 */
export interface OrderAdminMemoAddedResource {
  mall_id: string;
  event_shop_no: string;
  event_code: string;
  order_id: string;
  requested_date: string;
  order_place_id: string;
  ordering_product_code: string;
  ordering_product_name: string;
  executor_id: string;
  execute_method: string;
}

/**
 * 주문 관리자 메모 수정 이벤트 리소스 (90068)
 */
export interface OrderAdminMemoUpdatedResource {
  mall_id: string;
  event_shop_no: string;
  event_code: string;
  order_id: string;
  requested_date: string;
  order_place_id: string;
  executor_id: string;
  execute_method: string;
}

/**
 * 주문 관리자 메모 삭제 이벤트 리소스 (90069)
 */
export interface OrderAdminMemoDeletedResource {
  mall_id: string;
  event_shop_no: string;
  event_code: string;
  order_id: string;
  requested_date: string;
  order_place_id: string;
  executor_id: string;
  execute_method: string;
}

/**
 * 주문서 삭제 이벤트 리소스 (90070)
 */
export interface OrderDeletedResource {
  mall_id: string;
  event_shop_no: string;
  event_code: string;
  order_id: string;
}

/**
 * 상품 장바구니 담기 이벤트 리소스 (90084)
 */
export interface ProductAddedToCartResource {
  mall_id: string;
  event_shop_no: string;
  member_id: string;
  shipping_type: string;
  product_no: number;
  variant_code: string;
  quantity: number;
  product_bundle: string;
}

/**
 * 주문 송장번호 변경 이벤트 리소스 (90162)
 */
export interface OrderInvoiceChangedResource {
  mall_id: string;
  event_shop_no: string;
  event_code: string;
  order_id: string;
  shipping_code: string;
  shipping_company_code: string;
  tracking_no: string;
}

/**
 * 회원 가입 이벤트 리소스 (90032)
 */
export interface MemberJoinedResource {
  mall_id: string;
  event_shop_no: string;
  member_id: string;
  group_no: number;
  name: string;
  nick_name: string;
  name_english: string;
  name_phonetic: string;
  created_date: string;
  member_authentication: string;
  birthday: string;
  gender: string;
  phone: string;
  cellphone: string;
  sms: string;
  email: string;
  news_mail: string;
  total_mileage: string;
  available_mileage: string;
  recommend_id: string;
  residence: string;
  use_mobile_app: string;
  member_type: string;
}

/**
 * 회원 SNS 연동 이벤트 리소스 (90063)
 */
export interface MemberSnsLinkedResource {
  mall_id: string;
  event_shop_no: string;
  member_id: string;
  social_name: string;
  social_member_code: number;
}

/**
 * 회원 정보 변경 이벤트 리소스 (90080)
 */
export interface MemberInformationChangedResource {
  mall_id: string;
  event_shop_no: string;
  member_id: string;
  diff_key: string[];
  sub_event_code: string;
}

/**
 * 회원 로그인 이벤트 리소스 (90143)
 */
export interface MemberLoggedInResource {
  mall_id: string;
  event_shop_no: string;
  member_id: string;
  group_name: string;
  inflow_name: string;
}

/**
 * 회원 등급 변경 이벤트 리소스 (90144)
 */
export interface MemberGradeChangedResource {
  mall_id: string;
  event_shop_no: string;
  member_id: string;
  after_member_group_name: string;
}



/**
 * 이벤트 번호(enum)를 리소스 타입에 매핑하는 타입 정의
 */
export type Cafe24WebhookEventMap = {
  // 앱 이벤트
  [Cafe24WebhookEventNo.APP_UNINSTALLED]: AppUninstalledResource;
  [Cafe24WebhookEventNo.APP_EXPIRED]: AppExpiredResource;
  [Cafe24WebhookEventNo.APP_EXPIRY_EXTENDED]: AppExpiryExtendedResource;
  [Cafe24WebhookEventNo.APP_PAYMENT_COMPLETED]: AppPaymentCompletedResource;
  [Cafe24WebhookEventNo.APP_REFUND_REQUESTED]: AppRefundRequestedResource;
  [Cafe24WebhookEventNo.APP_REFUND_COMPLETED]: AppRefundCompletedResource;
  [Cafe24WebhookEventNo.ORDER_RETURN_COMPLETED]: OrderReturnCompletedResource;

  // 쇼핑몰 > 상품 이벤트
  [Cafe24WebhookEventNo.PRODUCT_CREATED]: ProductResource;
  [Cafe24WebhookEventNo.PRODUCT_UPDATED]: ProductResource;
  [Cafe24WebhookEventNo.PRODUCT_BATCH_UPDATED]: ProductBatchUpdatedResource;
  [Cafe24WebhookEventNo.PRODUCT_DELETED]: ProductDeletedResource;
  [Cafe24WebhookEventNo.PRODUCT_RESTORED]: ProductRestoredResource;
  [Cafe24WebhookEventNo.PRODUCT_ITEM_STOCK_CHANGED]: ProductItemStockChangedResource;
  [Cafe24WebhookEventNo.PRODUCT_SOLDOUT_STATUS_CHANGED]: ProductSoldoutStatusChangedResource;

  // 쇼핑몰 > 주문 이벤트
  [Cafe24WebhookEventNo.ORDER_CREATED]: OrderCreatedResource;
  [Cafe24WebhookEventNo.ORDER_SHIPPING_STATUS_CHANGED]: OrderShippingStatusChangedResource;
  [Cafe24WebhookEventNo.ORDER_SHIPPING_STATUS_BATCH_CHANGED]: OrderShippingStatusBatchChangedResource;
  [Cafe24WebhookEventNo.ORDER_PAYMENT_STATUS_CHANGED]: OrderPaymentStatusChangedResource;
  [Cafe24WebhookEventNo.ORDER_CANCEL_STATUS_CHANGED]: OrderCancelStatusChangedResource;
  [Cafe24WebhookEventNo.ORDER_CANCEL_STATUS_BATCH_CHANGED]: OrderCancelStatusBatchChangedResource;
  [Cafe24WebhookEventNo.ORDER_RETURN_STATUS_CHANGED]: OrderReturnStatusChangedResource;
  [Cafe24WebhookEventNo.ORDER_RETURN_STATUS_BATCH_CHANGED]: OrderReturnStatusBatchChangedResource;
  [Cafe24WebhookEventNo.ORDER_EXCHANGE_STATUS_CHANGED]: OrderExchangeStatusChangedResource;
  [Cafe24WebhookEventNo.ORDER_REFUND_STATUS_CHANGED]: OrderRefundStatusChangedResource;
  [Cafe24WebhookEventNo.ORDER_REFUND_STATUS_BATCH_CHANGED]: OrderRefundStatusBatchChangedResource;
  [Cafe24WebhookEventNo.ORDER_PRODUCT_ADDED]: OrderProductAddedResource;
  [Cafe24WebhookEventNo.ORDER_RECIPIENT_CHANGED]: OrderRecipientChangedResource;
  [Cafe24WebhookEventNo.ORDER_ADMIN_MEMO_ADDED]: OrderAdminMemoAddedResource;
  [Cafe24WebhookEventNo.ORDER_ADMIN_MEMO_UPDATED]: OrderAdminMemoUpdatedResource;
  [Cafe24WebhookEventNo.ORDER_ADMIN_MEMO_DELETED]: OrderAdminMemoDeletedResource;
  [Cafe24WebhookEventNo.ORDER_DELETED]: OrderDeletedResource;
  [Cafe24WebhookEventNo.PRODUCT_ADDED_TO_CART]: ProductAddedToCartResource;
  [Cafe24WebhookEventNo.ORDER_INVOICE_CHANGED]: OrderInvoiceChangedResource;

  // 쇼핑몰 > 회원 이벤트
  [Cafe24WebhookEventNo.MEMBER_JOINED]: MemberJoinedResource;
  [Cafe24WebhookEventNo.MEMBER_SNS_LINKED]: MemberSnsLinkedResource;
  [Cafe24WebhookEventNo.MEMBER_INFORMATION_CHANGED]: MemberInformationChangedResource;
  [Cafe24WebhookEventNo.MEMBER_LOGGED_IN]: MemberLoggedInResource;
  [Cafe24WebhookEventNo.MEMBER_GRADE_CHANGED]: MemberGradeChangedResource;
  [Cafe24WebhookEventNo.MEMBER_DORMANT]: MemberDormantResource;
  [Cafe24WebhookEventNo.MEMBER_DORMANT_RELEASED]: MemberDormantReleasedResource;
  [Cafe24WebhookEventNo.MEMBER_WITHDRAWN]: MemberWithdrawnResource;
  [Cafe24WebhookEventNo.MEMBER_MILEAGE_CHANGED]: MemberMileageChangedResource;

  // 쇼핑몰 > 게시판 이벤트
  [Cafe24WebhookEventNo.BOARD_POST_CREATED]: BoardPostCreatedResource;
  [Cafe24WebhookEventNo.BOARD_COMMENT_CREATED]: BoardCommentCreatedResource;
  [Cafe24WebhookEventNo.BOARD_URGENT_INQUIRY_CREATED]: BoardUrgentInquiryCreatedResource;
  [Cafe24WebhookEventNo.BOARD_POST_DELETED]: BoardPostDeletedResource;
  [Cafe24WebhookEventNo.BOARD_COMMENT_DELETED]: BoardCommentDeletedResource;
  [Cafe24WebhookEventNo.BOARD_URGENT_INQUIRY_DELETED]: BoardUrgentInquiryDeletedResource;
  [Cafe24WebhookEventNo.BOARD_POST_UPDATED]: BoardPostUpdatedResource;

  // 쇼핑몰 > 상품분류 이벤트
  [Cafe24WebhookEventNo.CATEGORY_CREATED]: CategoryCreatedResource;
  [Cafe24WebhookEventNo.CATEGORY_UPDATED]: CategoryUpdatedResource;
  [Cafe24WebhookEventNo.CATEGORY_PRODUCT_DISPLAY_BATCH_UPDATED]: CategoryProductDisplayBatchUpdatedResource;
  [Cafe24WebhookEventNo.CATEGORY_DELETED]: CategoryDeletedResource;
  [Cafe24WebhookEventNo.CATEGORY_ORDER_CHANGED]: CategoryOrderChangedResource;

  // 쇼핑몰 > 공급사 이벤트
  [Cafe24WebhookEventNo.SUPPLIER_CREATED]: SupplierCreatedResource;
  [Cafe24WebhookEventNo.SUPPLIER_UPDATED]: SupplierUpdatedResource;
  [Cafe24WebhookEventNo.SUPPLIER_BATCH_UPDATED]: SupplierBatchUpdatedResource;
  [Cafe24WebhookEventNo.SUPPLIER_DELETED]: SupplierDeletedResource;

  // 쇼핑몰 > 배송 이벤트
  [Cafe24WebhookEventNo.SHIPPING_COMPANY_CREATED]: ShippingCompanyCreatedResource;
  [Cafe24WebhookEventNo.SHIPPING_COMPANY_UPDATED]: ShippingCompanyUpdatedResource;
  [Cafe24WebhookEventNo.SHIPPING_COMPANY_DELETED]: ShippingCompanyDeletedResource;

  // 쇼핑몰 > 상점 이벤트
  [Cafe24WebhookEventNo.MULTISHOP_CREATED]: MultishopCreatedResource;
  [Cafe24WebhookEventNo.MULTISHOP_UPDATED]: MultishopUpdatedResource;
  [Cafe24WebhookEventNo.MULTISHOP_DELETED]: MultishopDeletedResource;
  [Cafe24WebhookEventNo.SUB_ADMIN_CREATED]: SubAdminCreatedResource;
  [Cafe24WebhookEventNo.SUB_ADMIN_UPDATED]: SubAdminUpdatedResource;
  [Cafe24WebhookEventNo.SUB_ADMIN_DELETED]: SubAdminDeletedResource;
  [Cafe24WebhookEventNo.PRIVACY_SETTINGS_CHANGED]: PrivacySettingsChangedResource;
  [Cafe24WebhookEventNo.DOMAIN_ADDED]: DomainAddedResource;
  [Cafe24WebhookEventNo.DOMAIN_DELETED]: DomainDeletedResource;
  [Cafe24WebhookEventNo.SHOP_INFORMATION_UPDATED]: ShopInformationUpdatedResource;
  [Cafe24WebhookEventNo.SHOP_DELETED]: ShopDeletedResource;
  [Cafe24WebhookEventNo.SHOP_DORMANT]: ShopDormantResource;
  [Cafe24WebhookEventNo.SHOP_DORMANT_RELEASED]: ShopDormantReleasedResource;
  [Cafe24WebhookEventNo.SHOP_BLOCKED]: ShopBlockedResource;

  // 쇼핑몰 > 운영설정 이벤트
  [Cafe24WebhookEventNo.KAKAOSYNC_SETTINGS_CHANGED]: KakaosyncSettingsChangedResource;

  // 쇼핑몰 > 혜택 이벤트
  [Cafe24WebhookEventNo.BENEFIT_CREATED]: BenefitCreatedResource;
  [Cafe24WebhookEventNo.BENEFIT_UPDATED]: BenefitUpdatedResource;
  [Cafe24WebhookEventNo.BENEFIT_DELETED]: BenefitDeletedResource;

  // 쇼핑몰 > 쿠폰 이벤트
  [Cafe24WebhookEventNo.COUPON_UPDATED]: CouponUpdatedResource;
  [Cafe24WebhookEventNo.COUPON_DELETED]: CouponDeletedResource;
  [Cafe24WebhookEventNo.COUPON_CREATED]: CouponCreatedResource;
  [Cafe24WebhookEventNo.COUPON_ISSUE_STATUS_CHANGED]: CouponIssueStatusChangedResource;
}

export type Cafe24Webhook<N extends Cafe24WebhookEventNo = Cafe24WebhookEventNo> = 
  Cafe24WebhookBody<N, Cafe24WebhookEventMap[N]>;


/**
 * 공통 웹훅 구조
 * @template N 이벤트 번호 (Cafe24WebhookEventNo)
 * @template T 리소스 타입 (해당 이벤트의 리소스 구조)
 */
export interface Cafe24WebhookBody<N extends Cafe24WebhookEventNo, T> {
  event_no: N;
  resource: T;
}