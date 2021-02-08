type Attribute = {
  meliId: string;
  name: string;
  meliValueId: string;
  valueName: string;
};

type PagingType = {
  total: number;
  offset: number;
  limit: number;
  primary_results: number;
};

type IdNameType = {
  id: string;
  name: string;
};

type PathRooth = {
  id: string;
  name: string;
};

type ValueFilterType = {
  id: string;
  name: string;
  path_from_root: PathRooth[];
  results: number;
};

type FilterType = {
  id: string;
  name: string;
  type: string;
  values: ValueFilterType[];
};

type SellerType = {
  id: string;
  permalink: string;
  power_seller_status: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: string[];
};

type InstallmentsType = {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
};

type AddressType = {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
};

type Rule = {
  default: boolean;
  free_mode: string;
  free_shipping_flag: boolean;
};

type FreeMethods = {
  id: string;
  rule: Rule;
};

type SellerAddress = {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: IdNameType;
  state: IdNameType;
  city: IdNameType;
  latitude: string;
  longitude: string;
};

type Shipping = {
  mode: string;
  tags: string[];
  free_methods: FreeMethods[];
  dimensions: string;
  free_shipping: boolean;
  local_pick_up: boolean;
  logistic_type: string;
  store_pick_up: boolean;
};

type ValueStruct = {
  number: number;
  unit: string;
};

type ValueType = {
  id: string;
  name: string;
  struct: ValueStruct;
  source: string;
};

type Attributes = {
  id: string;
  name: string;
  values: ValueType[];
  source: string;
  value_id: string;
  value_name: string;
  value_struct: ValueStruct;
  attribute_group_id: string;
  attribute_group_name: string;
};

export type FProduct = {
  meliId: string;
  name: string;
  price: number;
  picture: string;
  meliCategoryId: string;
};

export type CHProduct = {
  id: string;
  title: string;
  price: number;
  pictures: string;
  meliCategoryId: string;
};

export type SProduct = {
  title: string;
  price: number;
  meliSellerId: string;
  pictures: string[];
  meliCategoryId: string;
  meliProductId: string;
  warranty: string;
  attributes: Attribute[];
  variations: Attribute[];
};

export type Product = {
  id: string;
  site_id: string;
  title: string;
  seller: SellerType;
  price: number;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail: string;
  accepts_mercadopago: boolean;
  installments: InstallmentsType;
  address: AddressType;
  shipping: Shipping;
  seller_address: SellerAddress;
  attributes: Attributes[];
  original_price: string;
  category_id: string;
  official_store_id: string;
  catalog_product_id: string;
  tags: string[];
  catalog_listing: boolean;
};

export type MeliProductResponse = {
  site_id: string;
  totalPages: number;
  actualPage: number;
  query: string;
  paging: PagingType;
  results: Product[];
  sort: IdNameType;
  available_sorts: [IdNameType];
  filters: [FilterType];
  available_filters: [FilterType];
};

export type ProductState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: Product | null;
  readonly error?: string;
};

export enum ProductActionTypes {
  FETCH_REQUEST = '@@product/FETCH_REQUEST',
  FETCH_SUCCESS = '@@product/FETCH_SUCCESS',
  FETCH_ERROR = '@@product/FETCH_ERROR',
}

interface FetchProductAction {
  type: typeof ProductActionTypes.FETCH_REQUEST;
}

interface FetchSuccessProductAction {
  type: typeof ProductActionTypes.FETCH_SUCCESS;
  payload: Product | null;
}

interface FetchErrorProductAction {
  type: typeof ProductActionTypes.FETCH_ERROR;
  payload: string;
}

export type ProductActions =
  | FetchProductAction
  | FetchSuccessProductAction
  | FetchErrorProductAction;
