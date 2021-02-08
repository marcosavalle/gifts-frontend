export type BudgetStatistic = {
  month: string;
  amount: number;
};

export type BudgetStatisticsSenderState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: BudgetStatistic[];
  readonly error?: string;
};

export type BudgetStatisticsReceiverState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: BudgetStatistic[];
  readonly error?: string;
};

export enum BudgetStatisticsSenderActionTypes {
  FETCH_REQUEST = '@@budgetStatisticsSender/FETCH_REQUEST',
  FETCH_SUCCESS = '@@budgetStatisticsSender/FETCH_SUCCESS',
  FETCH_ERROR = '@@budgetStatisticsSender/FETCH_ERROR',
}

export enum BudgetStatisticsReceiverActionTypes {
  FETCH_REQUEST = '@@budgetStatisticsReceiver/FETCH_REQUEST',
  FETCH_SUCCESS = '@@budgetStatisticsReceiver/FETCH_SUCCESS',
  FETCH_ERROR = '@@budgetStatisticsReceiver/FETCH_ERROR',
}

interface FetchBudgetStatisticsSenderAction {
  type: typeof BudgetStatisticsSenderActionTypes.FETCH_REQUEST;
}

interface FetchSuccessBudgetStatisticsSenderAction {
  type: typeof BudgetStatisticsSenderActionTypes.FETCH_SUCCESS;
  payload: BudgetStatistic[];
}

interface FetchErrorBudgetStatisticsSenderAction {
  type: typeof BudgetStatisticsSenderActionTypes.FETCH_ERROR;
  payload: string;
}

export type BudgetStatisticsSenderActions =
  | FetchBudgetStatisticsSenderAction
  | FetchSuccessBudgetStatisticsSenderAction
  | FetchErrorBudgetStatisticsSenderAction;

interface FetchBudgetStatisticsReceiverAction {
  type: typeof BudgetStatisticsReceiverActionTypes.FETCH_REQUEST;
}

interface FetchSuccessBudgetStatisticsReceiverAction {
  type: typeof BudgetStatisticsReceiverActionTypes.FETCH_SUCCESS;
  payload: BudgetStatistic[];
}

interface FetchErrorBudgetStatisticsReceiverAction {
  type: typeof BudgetStatisticsReceiverActionTypes.FETCH_ERROR;
  payload: string;
}

export type BudgetStatisticsReceiverActions =
  | FetchBudgetStatisticsReceiverAction
  | FetchSuccessBudgetStatisticsReceiverAction
  | FetchErrorBudgetStatisticsReceiverAction;
