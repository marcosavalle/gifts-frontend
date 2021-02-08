import {
  BudgetStatistic,
  BudgetStatisticsReceiverActionTypes,
  BudgetStatisticsReceiverActions,
} from '../models/statistics-budget.model';

export const fetchRequest = (): BudgetStatisticsReceiverActions => ({
  type: BudgetStatisticsReceiverActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (
  data: BudgetStatistic[]
): BudgetStatisticsReceiverActions => ({
  type: BudgetStatisticsReceiverActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (
  message: string
): BudgetStatisticsReceiverActions => ({
  type: BudgetStatisticsReceiverActionTypes.FETCH_ERROR,
  payload: message,
});
