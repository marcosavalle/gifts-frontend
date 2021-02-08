import { Gift, GiftsFilters } from './gift.model';

export type GiftsReceivedState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: Gift[];
  readonly error?: string;
  readonly filters: GiftsFilters;
};

export enum GiftsReceivedActionTypes {
  FETCH_REQUEST = '@@giftsReceived/FETCH_REQUEST',
  FETCH_SUCCESS = '@@giftsReceived/FETCH_SUCCESS',
  FETCH_ERROR = '@@giftsReceived/FETCH_ERROR',
  SAVE_FILTERS = '@@giftsReceived/SAVE_FILTERS',
}

interface FetchGiftsReceivedAction {
  type: typeof GiftsReceivedActionTypes.FETCH_REQUEST;
}

interface FetchSuccessGiftsReceivedAction {
  type: typeof GiftsReceivedActionTypes.FETCH_SUCCESS;
  payload: Gift[];
}

interface FetchErrorGiftsReceivedAction {
  type: typeof GiftsReceivedActionTypes.FETCH_ERROR;
  payload: string;
}

interface SaveFiltersGiftsReceivedAction {
  type: typeof GiftsReceivedActionTypes.SAVE_FILTERS;
  payload: GiftsFilters;
}

export type GiftsReceivedActions =
  | FetchGiftsReceivedAction
  | FetchSuccessGiftsReceivedAction
  | FetchErrorGiftsReceivedAction
  | SaveFiltersGiftsReceivedAction;
