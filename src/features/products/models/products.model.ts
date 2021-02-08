import { MeliProductResponse } from './product.model';

type SearchFilter = { filter: string; value: string };

export type ProductInputFilters = {
  site: string;
  maxAmount: number;
  filters: SearchFilter[];
  page: number;
};

export type ProductsState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: MeliProductResponse | null;
  readonly error?: string;
};

export enum ProductsActionTypes {
  FETCH_REQUEST = '@@products/FETCH_REQUEST',
  FETCH_SUCCESS = '@@products/FETCH_SUCCESS',
  FETCH_ERROR = '@@products/FETCH_ERROR',
  CLEAR_DATA = '@@products/CLEAR_DATA',
}

interface FetchProductsAction {
  type: typeof ProductsActionTypes.FETCH_REQUEST;
}

interface FetchSuccessProductsAction {
  type: typeof ProductsActionTypes.FETCH_SUCCESS;
  payload: MeliProductResponse | null;
}

interface FetchErrorProductsAction {
  type: typeof ProductsActionTypes.FETCH_ERROR;
  payload: string;
}

interface ClearDataAction {
  type: typeof ProductsActionTypes.CLEAR_DATA;
}

export type ProductsActions =
  | FetchProductsAction
  | FetchSuccessProductsAction
  | FetchErrorProductsAction
  | ClearDataAction;
