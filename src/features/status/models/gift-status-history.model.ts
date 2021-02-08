import { StatusHistoryItem } from './status-history.model';

export type GiftStatusesHistoryState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: StatusHistoryItem[];
  readonly error?: string;
};

export enum GiftStatusesHistoryActionTypes {
  FETCH_REQUEST = '@@giftStatusesHistory/FETCH_REQUEST',
  FETCH_SUCCESS = '@@giftStatusesHistory/FETCH_SUCCESS',
  FETCH_ERROR = '@@giftStatusesHistory/FETCH_ERROR',
}

interface FetchGiftStatusesHistoryAction {
  type: typeof GiftStatusesHistoryActionTypes.FETCH_REQUEST;
}

interface FetchSuccessGiftStatusesHistoryAction {
  type: typeof GiftStatusesHistoryActionTypes.FETCH_SUCCESS;
  payload: StatusHistoryItem[];
}

interface FetchErrorGiftStatusesHistoryAction {
  type: typeof GiftStatusesHistoryActionTypes.FETCH_ERROR;
  payload: string;
}

export type GiftStatusesHistoryActions =
  | FetchGiftStatusesHistoryAction
  | FetchSuccessGiftStatusesHistoryAction
  | FetchErrorGiftStatusesHistoryAction;
