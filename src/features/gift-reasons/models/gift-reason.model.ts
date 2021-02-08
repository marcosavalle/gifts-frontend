export interface GiftReason {
  id: string;
  name: string;
}

export type GiftReasonState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: GiftReason[];
  readonly error?: string;
};

export enum GiftReasonsActionTypes {
  FETCH_REQUEST = '@@giftReasons/FETCH_REQUEST',
  FETCH_SUCCESS = '@@giftReasons/FETCH_SUCCESS',
  FETCH_ERROR = '@@giftReasons/FETCH_ERROR',
}

interface FetchGiftReasonsAction {
  type: typeof GiftReasonsActionTypes.FETCH_REQUEST;
}

interface FetchSuccessGiftReasonsAction {
  type: typeof GiftReasonsActionTypes.FETCH_SUCCESS;
  payload: GiftReason[];
}

interface FetchErrorGiftReasonsAction {
  type: typeof GiftReasonsActionTypes.FETCH_ERROR;
  payload: string;
}

export type GiftReasonsActions =
  | FetchGiftReasonsAction
  | FetchSuccessGiftReasonsAction
  | FetchErrorGiftReasonsAction;
