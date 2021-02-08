import { Gift, GiftsFilters } from './gift.model';

export type GiftsSentState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: Gift[];
  readonly error?: string;
  readonly filters: GiftsFilters;
};

export enum GiftsSentActionTypes {
  FETCH_REQUEST = '@@giftsSent/FETCH_REQUEST',
  FETCH_SUCCESS = '@@giftsSent/FETCH_SUCCESS',
  FETCH_ERROR = '@@giftsSent/FETCH_ERROR',
  SAVE_FILTERS = '@@giftsSent/SAVE_FILTERS',
}

interface FetchGiftsSentAction {
  type: typeof GiftsSentActionTypes.FETCH_REQUEST;
}

interface FetchSuccessGiftsSentAction {
  type: typeof GiftsSentActionTypes.FETCH_SUCCESS;
  payload: Gift[];
}

interface FetchErrorGiftsSentAction {
  type: typeof GiftsSentActionTypes.FETCH_ERROR;
  payload: string;
}

interface SaveFiltersGiftsSentAction {
  type: typeof GiftsSentActionTypes.SAVE_FILTERS;
  payload: GiftsFilters;
}

export type GiftsSentActions =
  | FetchGiftsSentAction
  | FetchSuccessGiftsSentAction
  | FetchErrorGiftsSentAction
  | SaveFiltersGiftsSentAction;
