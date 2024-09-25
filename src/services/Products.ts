import { AxiosInstance } from "axios"
import { UnionToIntersection } from "../utils/helperTypes"
import { queryMapToString } from "../utils/query"
import { AbstractService } from "."

export class ProductService extends AbstractService {
  constructor(client: AxiosInstance) {
    super(client)
  }

  public async getOne<E extends Embed[]>(productNo: number, options: ProductGetOneOptions<E>) {
    const queryMap = new Map(Object.entries(options))
    const url = `/products/${productNo}` + queryMapToString(queryMap)

    const res = await this.client.get<{ product: ProductWithEmbed<E> }>(url)
    return res.data.product
  }

  public async getList<E extends Embed[]>(options: ProductGetListOptions<E>) {
    const queryMap = new Map(Object.entries(options))
    const url = `/products` + queryMapToString(queryMap)

    const res = await this.client.get<{ products: ProductWithEmbed<E>[] }>(url)
    return res.data.products
  }
}



type ProductGetOneOptions<E extends Embed[]> = {
  embed?: E
}

type ProductGetListOptions<E extends Embed[]> = {
  embed?: E
  shop_no?: number,
  product_no?: number | number[],
  display?: string,
  selling?: string,
  product_name?: string | string[],
  product_code?: string | string[],
  brand_code?: string | string[],
  manufacturer_code?: string | string[],
  supplier_code?: string | string[],
  trend_code?: string | string[],
  product_tag?: string | string[],
  custom_product_code?: string | string[],
  custom_variant_code?: string | string[],
  price_min?: number,
  price_max?: number,
  retail_price_min?: number,
  retail_price_max?: number,
  supply_price_min?: number,
  supply_price_max?: number,
  created_start_date?: string,
  created_end_date?: string,
  updated_start_date?: string,
  updated_end_date?: string,
  category?: string,
  eng_product_name?: string | string[],
  supply_product_name?: string | string[],
  internal_product_name?: string | string[],
  model_name?: string | string[],
  product_condition?: string | string[],
  origin_place_value?: string | string[],
  stock_quantity_max?: number,
  stock_quantity_min?: number,
  stock_safety_max?: number,
  stock_safety_min?: number,
  product_weight?: number | number[],
  classification_code?: string | string[],
  use_inventory?: 'T' | 'F',
  category_unapplied?: 'T',
  include_sub_category?: 'T',
  additional_information_key?: string,
  additional_information_value?: string,
  approve_status?: 'N' | 'E' | 'C' | 'R' | 'I',
  since_product_no?: number,
  product_bundle?: 'T' | 'F',
  option_type?: string | string[],
  market_sync?: 'T' | 'F',
  sort?: 'created_date' | 'updated_date' | 'product_name',
  order?: 'asc' | 'desc',
  offset?: number,
  limit?: number
}


interface Product {
  shop_no: number,
  product_no: number,
  category: Category[],
  project_no: number | null,
  product_code: string,
  custom_product_code: string,
  product_name: string,
  eng_product_name: string,
  supply_product_name: string,
  internal_product_name: string,
  model_name: string,
  price_excluding_tax: string,
  price: string,
  retail_price: string,
  supply_price: string,
  display: 'T' | 'F',
  description: string,
  mobile_description: string,
  separated_mobile_description: 'T' | 'F',
  translated: 'T' | 'F',
  translated_description: string,
  payment_info: string,
  shipping_info: string,
  exchange_info: string,
  service_info: string,
  product_tax_type_text: string | null,
  set_product_type: 'C' | 'S' | null,
  country_hscode: any, // null
  selling: 'T' | 'F',
  product_condition: 'N' | 'B' | 'R' | 'U' | 'E' | 'F' | 'S',
  product_used_month: number,
  simple_description: string,
  summary_description: string,
  product_tag: string,
  margin_rate: string,
  tax_type: 'A' | 'B' | 'C',
  tax_amount: number,
  price_content: string | null,
  buy_limit_by_product: 'T' | 'F',
  buy_limit_type: 'N' | 'M' | 'F' | 'O' | 'D' | null,
  repurchase_restriction: 'T' | 'F',
  buy_group_list: number[] | null,
  single_purchase_restriction: 'T' | 'F',
  buy_unit_type: 'P' | 'O',
  buy_unit: number,
  order_quantity_limit_type: 'P' | 'O',
  minimum_quantity: number,
  maximum_quantity: number,
  points_by_product: 'T' | 'F',
  points_setting_by_payment: 'B' | 'C' | null,
  points_amount: PointsAmount[] | null,
  except_member_points: 'T' | 'F',
  product_volume: ProductVolume,
  adult_certification: 'T' | 'F',
  detail_image: string,
  list_image: string,
  tiny_image: string,
  small_image: string,
  has_option: 'T' | 'F',
  option_type: 'C' | 'S' | 'E' | 'F',
  use_naverpay: 'T' | 'F' | null,
  naverpay_type: 'C' | 'O' | null,
  manufacturer_code: string,
  trend_code: string,
  brand_code: string,
  supplier_code: string,
  made_date: string,
  release_date: string,
  expiration_date: ExpirationDate,
  origin_classification: 'F' | 'T' | 'E',
  origin_place_no: number,
  origin_place_value: string,
  made_in_code: string,
  icon_show_period: IconShowPeriod,
  icon: string[],
  hscode: string,
  product_weight: string,
  product_material: string,
  shipping_fee_by_product: 'T' | 'F',
  shipping_method: string | null,
  prepaid_shipping_fee: 'C' | 'P' | 'B' | null,
  shipping_period: ShippingPeriod | null,
  shipping_scope: 'A' | 'C' | 'B',
  shipping_area: string | null,
  shipping_fee_type: 'T' | 'R' | 'M' | 'D' | 'W' | 'C' | 'N' | null,
  shipping_rates: ShippingRate[] | null,
  created_date: string,
  updated_date: string,
  english_product_material: string,
  clearance_category_eng: string,
  clearance_category_kor: string,
  clearance_category_code: string,
  cloth_fabric: 'woven' | 'knit' | null,
  origin_place_code: number,
  list_icon: ListIcon,
  additional_information: AdditionalInformation[],
  image_upload_type: 'A' | 'B' | 'C',
  classification_code: string,
  main: number[] | null,
  relational_product: RelationalProduct[],
  select_one_by_option: 'T' | 'F',
  approve_status: 'N' | 'E' | 'C' | 'R' | 'I' | '',
  edibot: 'T' | 'F',
  edibot_code: string | null,
  sold_out: 'T' | 'F',
  additional_price: string,
  translated_additional_description: string,
  exposure_limit_type: 'A' | 'M',
  exposure_group_list: number[] | null,
}

interface Variant {
  shop_no: number,
  variant_code: string,
  options: VariantOption[],
  custom_variant_code: string,
  display: 'T' | 'F',
  selling: 'T' | 'F',
  additional_amount: string,
  use_inventory: 'T' | 'F',
  important_inventory: 'A' | 'B' | 'C',
  inventory_control_type: 'A' | 'B' | 'C',
  display_soldout: 'T' | 'F',
  quantity: number,
  safety_inventory: number,
}

interface VariantOption {
  name: string,
  value: string,
}

interface Seo {
  shop_no: number,
  meta_title: string,
  meta_author: string,
  meta_description: string,
  meta_keywords: string,
  meta_alt: string,
  search_engine_exposure: 'T' | 'F',
}

interface Category {
  category_no: number,
  recommend: 'T' | 'F',
  new: 'T' | 'F',
}

interface Tags {
  shop_no: number,
  tags: string[],
}

interface Options {
  has_option: 'T' | 'F',
  option_type: 'C' | 'S' | 'E' | 'F',
  option_list_type: 'S' | 'E',
  option_preset_code: string,
  options: ProductOption[],
  select_one_by_option: 'T' | 'F',
  option_preset_name: string | null,
  use_additional_option: 'T' | 'F',
  additional_options: AdditionalOption[],
  use_attached_file_option: 'T' | 'F',
  attached_file_option: AttachedFileOption[],
}

interface ProductOption {
  option_code: string,
  option_name: string,
  required_option: 'T' | 'F',
  option_display_type: string,
  option_value: OptionValue[],
}

interface OptionValue {
  option_image_file: string,
  option_link_image: string,
  option_color: string,
  option_text: string,
  value_no: number | null,
  additional_amount: string | null,
}

interface AdditionalOption {
  option_name: string,
  option_value: string,
}

interface AttachedFileOption {
  
}

interface PointsAmount {
  payment_method: string,
  points_rate: string,
}

interface ProductVolume {
  use_product_volume: 'T' | 'F',
  product_width?: string,
  product_height?: string,
  product_length?: string,
}

interface ExpirationDate {
  start_date: string,
  end_date: string,
}

interface IconShowPeriod {
  start_date: string,
  end_date: string,
}

interface ShippingPeriod {
  minimum: number,
  maximum: number,
}

interface ShippingRate {
  shipping_rates_min: string,
  shipping_rates_max: string,
  shipping_fee: string,
}

interface ListIcon {
  soldout_icon: boolean,
  recommend_icon: boolean,
  new_icon: boolean,
}

interface AdditionalInformation {
  key: string,
  name: string,
  value: string,
}

interface RelationalProduct {
  product_no: number,
  interrelated: 'T' | 'F',
}

interface AdditionalImage {
  big: string,
  medium: string,
  small: string,
}

interface DecorationImages {
  use_show_date: "T" | "F",
  show_start_date: string,
  show_end_date: string,
  image_list: {
    code: string,
    path: string,
    image_vertical_position: "T" | "C" | "B",
    image_horizontal_position: "L" | "C" | "R",
  }[]
}

interface DiscountPrice {
  pc_discount_price: string,
  mobile_discount_price: string,
  app_discount_price: string,
}


type Embed = 'variants' | 'options' | 'memos' | 'hits' | 'seo' | 'tags' | 'additionalimages' | 'decorationimages' | 'discountprice'// | 'benefits';

type EmbedFields = {
  variants: { variants: Variant[] },
  options: { options: Options },  
  memos: { memos: string | null },
  hits: { hits: number },
  seo: { seo: Seo },
  tags: { tags: Tags },
  additionalimages: { additionalimages: AdditionalImage[] },
  decorationimages: { decorationimages: DecorationImages },
  discountprice: { discountprice: DiscountPrice },
  // benefits: { benefits: Benefit[] }
}

type EmbedIncludes<E extends Embed[]> = UnionToIntersection<
  {
    [K in E[number]]: K extends keyof EmbedFields ? EmbedFields[K] : {}
  }[E[number]]
>

type ProductWithEmbed<E extends Embed[]> = Product & EmbedIncludes<E>
