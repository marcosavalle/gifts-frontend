export type CategoryStatistic = {
  name: string;
  amount: number;
};

export type CategoriesStatisticsSenderState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: CategoryStatistic[];
  readonly error?: string;
};

export type CategoriesStatisticsReceiverState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: CategoryStatistic[];
  readonly error?: string;
};

export enum CategoriesStatisticsSenderActionTypes {
  FETCH_REQUEST = '@@categoriesStatisticsSender/FETCH_REQUEST',
  FETCH_SUCCESS = '@@categoriesStatisticsSender/FETCH_SUCCESS',
  FETCH_ERROR = '@@categoriesStatisticsSender/FETCH_ERROR',
}

export enum CategoriesStatisticsReceiverActionTypes {
  FETCH_REQUEST = '@@categoriesStatisticsReceiver/FETCH_REQUEST',
  FETCH_SUCCESS = '@@categoriesStatisticsReceiver/FETCH_SUCCESS',
  FETCH_ERROR = '@@categoriesStatisticsReceiver/FETCH_ERROR',
}

interface FetchCategoriesStatisticsSenderAction {
  type: typeof CategoriesStatisticsSenderActionTypes.FETCH_REQUEST;
}

interface FetchSuccessCategoriesStatisticsSenderAction {
  type: typeof CategoriesStatisticsSenderActionTypes.FETCH_SUCCESS;
  payload: CategoryStatistic[];
}

interface FetchErrorCategoriesStatisticsSenderAction {
  type: typeof CategoriesStatisticsSenderActionTypes.FETCH_ERROR;
  payload: string;
}

export type CategoriesStatisticsSenderActions =
  | FetchCategoriesStatisticsSenderAction
  | FetchSuccessCategoriesStatisticsSenderAction
  | FetchErrorCategoriesStatisticsSenderAction;

interface FetchCategoriesStatisticsReceiverAction {
  type: typeof CategoriesStatisticsReceiverActionTypes.FETCH_REQUEST;
}

interface FetchSuccessCategoriesStatisticsReceiverAction {
  type: typeof CategoriesStatisticsReceiverActionTypes.FETCH_SUCCESS;
  payload: CategoryStatistic[];
}

interface FetchErrorCategoriesStatisticsReceiverAction {
  type: typeof CategoriesStatisticsReceiverActionTypes.FETCH_ERROR;
  payload: string;
}

export type CategoriesStatisticsReceiverActions =
  | FetchCategoriesStatisticsReceiverAction
  | FetchSuccessCategoriesStatisticsReceiverAction
  | FetchErrorCategoriesStatisticsReceiverAction;
