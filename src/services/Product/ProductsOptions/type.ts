export type ProductsOption = {
  shop_no: number,
  product_no: number,
  has_option: "T" | "F",
  option_type: "T" | "E" | "F",
  option_list_type: "C" | "S",
  option_preset_code: string | null,
  options: {
    option_code: string,
    option_name: string,
    option_value: {
      option_image_file: string,
      option_link_image: string,
      option_color: string,
      option_text: string,
      value_no: number | null,
      additional_amount: string
    }[],
    required_option: "T" | "F",
    option_display_type: "C" | "S",
  }[],
  select_one_by_option: "T" | "F",
  option_preset_name: string,
  use_additional_option: "T" | "F",
  additional_options: {
    additional_option_name: string,
    required_additional_option: "T" | "F",
    additional_option_text_length: number,
  }[]
  use_attached_file_option: "T" | "F",
  attached_file_option: {
    option_name: string,
    required: "T" | "F",
    size_limit: number,
  }
}