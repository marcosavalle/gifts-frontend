export interface GiftType {
  id: string;
  name: string;
  description: string;
}

export type GiftTypeState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: GiftType[];
  readonly error?: string;
};

export enum GiftTypesActionTypes {
  FETCH_REQUEST = '@@giftTypes/FETCH_REQUEST',
  FETCH_SUCCESS = '@@giftTypes/FETCH_SUCCESS',
  FETCH_ERROR = '@@giftTypes/FETCH_ERROR',
}

interface FetchGiftTypesAction {
  type: typeof GiftTypesActionTypes.FETCH_REQUEST;
}

interface FetchSuccessGiftTypesAction {
  type: typeof GiftTypesActionTypes.FETCH_SUCCESS;
  payload: GiftType[];
}

interface FetchErrorGiftTypesAction {
  type: typeof GiftTypesActionTypes.FETCH_ERROR;
  payload: string;
}

export type GiftTypesActions =
  | FetchGiftTypesAction
  | FetchSuccessGiftTypesAction
  | FetchErrorGiftTypesAction;
