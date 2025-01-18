export type PaymentMethod =
  | 'cash'
  | 'card'
  | 'cell'
  | 'tcash'
  | 'icash'
  | 'prepaid'
  | 'credit'
  | 'point'
  | 'pointfy'
  | 'cvs'
  | 'cod'
  | 'coupon'
  | 'market_discount'
  | 'giftcard'
  | 'pointcard'
  | 'etc';

export type ShippingStatus = 'F' | 'M' | 'T' | 'W' | 'X';
export type YesNo = 'T' | 'F';
export type MemberAuthentication = 'T' | 'B' | 'J';
export type LoanStatus = 'OK' | 'NG' | 'ER';
export type ShippingType = 'A' | 'B';
export type ProcessStatus = 'prepare' | 'prepareproduct' | 'hold' | 'unhold';

export type InitialOrderAmount = {
  order_price_amount: string;
  shipping_fee: string;
  points_spent_amount: string;
  credits_spent_amount: string;
  coupon_discount_price: string;
  coupon_shipping_fee_amount: string;
  membership_discount_amount: string;
  shipping_fee_discount_amount: string;
  set_product_discount_amount: string;
  app_discount_amount: string;
  point_incentive_amount: string;
  total_amount_due: string;
  payment_amount: string;
  market_other_discount_amount: string;
  tax: string;
};

export type ShippingFeeDetail = {
  shipping_group_code: number;
  supplier_code: string;
  shipping_fee: string;
  cancel_shipping_fee: string;
  additional_shipping_fee: string;
  refunded_shipping_fee: string;
  return_shpping_fee: string;
  items: string[];
};

export type RegionalSurchargeDetail = {
  shipping_group_code: number;
  supplier_code: string;
  regional_surcharge_amount: string;
  cancel_shipping_fee: string;
  additional_shipping_fee: string;
  refunded_shipping_fee: string;
  return_shpping_fee: string;
  items: string[];
};

export type AdditionalOrderInfo = {
  id: number;
  name: string;
  value: string;
  input_type: string;
  product_type: string;
  applied_product_list: string[];
};

export type TaxDetail = {
  name: string;
  amount: string;
  price_before_tax: string;
  price_before_tax_type: string;
  order_item_code: string[];
  country_tax_rate: string;
  region_tax: {
    rate: string;
    taxation_method: string;
  };
  product_tax_override: {
    rate: string | null;
    taxation_method: string | null;
  };
  shipping_tax_override: {
    rate: string | null;
    taxation_method: string | null;
  };
};

export type ServiceData = {
  key: string;
  value: string;
  title: string;
};

export type Order = {
  shop_no: number;
  currency: string;
  order_id: string;
  market_id: string;
  market_order_no?: string | null;
  member_id: string;
  member_authentication: MemberAuthentication;
  customer_group_no_when_ordering: number;
  initial_order_amount: InitialOrderAmount;
  actual_order_amount: InitialOrderAmount;
  billing_name: string;
  bank_code: string;
  bank_code_name: string;
  payment_method: PaymentMethod[];
  payment_method_name: string[];
  payment_gateway_names?: string | null;
  sub_payment_method_name?: string;
  sub_payment_method_code?: string;
  transaction_ids?: string[] | null;
  paid: YesNo | 'M';
  canceled: YesNo | 'M';
  order_date: string;
  first_order: YesNo;
  payment_date: string;
  order_from_mobile: YesNo;
  use_escrow: YesNo;
  bank_account_no: string;
  bank_account_owner_name: string;
  market_seller_id?: string | null;
  payment_amount: string;
  cancel_date?: string | null;
  order_place_name: string;
  order_place_id: string;
  payment_confirmation?: YesNo | null;
  commission: string;
  postpay: YesNo;
  admin_additional_amount: string;
  additional_shipping_fee: string;
  international_shipping_insurance: string;
  additional_handling_fee: string;
  shipping_type: ShippingType;
  shipping_type_text: string;
  shipping_status: ShippingStatus;
  shipping_fee_detail: ShippingFeeDetail[];
  regional_surcharge_detail: RegionalSurchargeDetail[];
  wished_delivery_date?: string;
  wished_delivery_time?: string | null;
  wished_carrier_id?: string | null;
  wished_carrier_name?: string | null;
  return_confirmed_date?: string | null;
  total_supply_price: string;
  naver_point: number;
  additional_order_info_list: AdditionalOrderInfo[];
  store_pickup: YesNo;
  easypay_name?: string;
  loan_status?: LoanStatus | null;
  subscription: YesNo;
  multiple_addresses: YesNo;
  exchange_rate: string;
  first_payment_methods: PaymentMethod[];
  naverpay_payment_information: 'P' | 'N';
  include_tax: YesNo;
  tax_detail: TaxDetail[];
  service_type: string;
  service_data: ServiceData[];
  show_shipping_address: YesNo;
  social_member_code?: string | null;
  social_name?: string | null;
};
