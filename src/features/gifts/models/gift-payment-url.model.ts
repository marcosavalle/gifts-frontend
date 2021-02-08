export type GiftPaymentUrlState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: string;
  readonly error?: string;
};

export enum GiftPaymentUrlActionTypes {
  FETCH_REQUEST = '@@giftPaymentUrl/FETCH_REQUEST',
  FETCH_SUCCESS = '@@giftPaymentUrl/FETCH_SUCCESS',
  FETCH_ERROR = '@@giftPaymentUrl/FETCH_ERROR',
}

interface FetchPaymentUrlAction {
  type: typeof GiftPaymentUrlActionTypes.FETCH_REQUEST;
}

interface FetchSuccessPaymentUrlAction {
  type: typeof GiftPaymentUrlActionTypes.FETCH_SUCCESS;
  payload: string;
}

interface FetchErrorPaymentUrlAction {
  type: typeof GiftPaymentUrlActionTypes.FETCH_ERROR;
  payload: string;
}

export type GiftPaymentUrlActions =
  | FetchPaymentUrlAction
  | FetchSuccessPaymentUrlAction
  | FetchErrorPaymentUrlAction;
