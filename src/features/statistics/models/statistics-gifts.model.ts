export type GiftStatistic = {
  month: string;
  amount: number;
};

export type GiftsStatisticsSenderState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: GiftStatistic[];
  readonly error?: string;
};

export type GiftsStatisticsReceiverState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: GiftStatistic[];
  readonly error?: string;
};

export enum GiftsStatisticsSenderActionTypes {
  FETCH_REQUEST = '@@giftsStatisticsSender/FETCH_REQUEST',
  FETCH_SUCCESS = '@@giftsStatisticsSender/FETCH_SUCCESS',
  FETCH_ERROR = '@@giftsStatisticsSender/FETCH_ERROR',
}

export enum GiftsStatisticsReceiverActionTypes {
  FETCH_REQUEST = '@@giftsStatisticsReceiver/FETCH_REQUEST',
  FETCH_SUCCESS = '@@giftsStatisticsReceiver/FETCH_SUCCESS',
  FETCH_ERROR = '@@giftsStatisticsReceiver/FETCH_ERROR',
}

interface FetchGiftsStatisticsSenderAction {
  type: typeof GiftsStatisticsSenderActionTypes.FETCH_REQUEST;
}

interface FetchSuccessGiftsStatisticsSenderAction {
  type: typeof GiftsStatisticsSenderActionTypes.FETCH_SUCCESS;
  payload: GiftStatistic[];
}

interface FetchErrorGiftsStatisticsSenderAction {
  type: typeof GiftsStatisticsSenderActionTypes.FETCH_ERROR;
  payload: string;
}

export type GiftsStatisticsSenderActions =
  | FetchGiftsStatisticsSenderAction
  | FetchSuccessGiftsStatisticsSenderAction
  | FetchErrorGiftsStatisticsSenderAction;

interface FetchGiftsStatisticsReceiverAction {
  type: typeof GiftsStatisticsReceiverActionTypes.FETCH_REQUEST;
}

interface FetchSuccessGiftsStatisticsReceiverAction {
  type: typeof GiftsStatisticsReceiverActionTypes.FETCH_SUCCESS;
  payload: GiftStatistic[];
}

interface FetchErrorGiftsStatisticsReceiverAction {
  type: typeof GiftsStatisticsReceiverActionTypes.FETCH_ERROR;
  payload: string;
}

export type GiftsStatisticsReceiverActions =
  | FetchGiftsStatisticsReceiverAction
  | FetchSuccessGiftsStatisticsReceiverAction
  | FetchErrorGiftsStatisticsReceiverAction;
