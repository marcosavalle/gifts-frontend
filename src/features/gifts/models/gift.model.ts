/* eslint-disable import/no-cycle */
import { Category } from '../../categories/models/category.model';
import { Delivery } from '../../deliveries/models/delivery.model';
import { Payment } from '../../payments/models/payment.model';
import { CHProduct, FProduct } from '../../products/models/product.model';
import { Status } from '../../status/models/status.model';
import { User } from '../../users/models/user.model';

type ProductsChosen = {
  id: string;
  products: CHProduct[];
  chosenDate: string;
};

type ProductFilter = {
  maxAmount: number;
  categories: Category[];
  products: FProduct[];
};

export type Gift = {
  id: string;
  userSender: User;
  userReceiver: User;
  createdDate: string;
  reason: string;
  type: string;
  senderName: string;
  receiverName: string;
  productsChosen: ProductsChosen;
  productFilter: ProductFilter;
  delivery: Delivery;
  payment: Payment;
  status: Status;
};

export type GiftsFilters = {
  fromDate: string;
  toDate: string;
  statusId: string;
};

export type GiftState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: Gift | null;
  readonly error?: string;
};

export enum GiftActionTypes {
  FETCH_REQUEST = '@@gift/FETCH_REQUEST',
  FETCH_SUCCESS = '@@gift/FETCH_SUCCESS',
  FETCH_ERROR = '@@gift/FETCH_ERROR',
  CLEAR_DATA = '@@gift/CLEAR_DATA',
}

interface FetchGiftAction {
  type: typeof GiftActionTypes.FETCH_REQUEST;
}

interface FetchSuccessGiftAction {
  type: typeof GiftActionTypes.FETCH_SUCCESS;
  payload: Gift | null;
}

interface FetchErrorGiftAction {
  type: typeof GiftActionTypes.FETCH_ERROR;
  payload: string;
}

interface ClearDataGiftAction {
  type: typeof GiftActionTypes.CLEAR_DATA;
}

export type GiftActions =
  | FetchGiftAction
  | FetchSuccessGiftAction
  | FetchErrorGiftAction
  | ClearDataGiftAction;
