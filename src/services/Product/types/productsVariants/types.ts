interface Option {
  name: string;
  value: string;
}

export interface ProductVariant {
  shop_no: number;
  variant_code: string;
  options: Option[];
  custom_variant_code: string;
  display: 'T' | 'F';
  selling: 'T' | 'F';
  additional_amount: string;
  use_inventory: 'T' | 'F';
  important_inventory: 'A' | 'B';
  inventory_control_type: 'A' | 'B';
  display_soldout: 'T' | 'F';
  quantity: number;
  safety_inventory: number;
  image?: string;
  inventories?: any;
  duplicated_custom_variant_code?: 'T' | 'F';
}
