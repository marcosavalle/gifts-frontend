import {
  BudgetStatistic,
  BudgetStatisticsSenderActionTypes,
  BudgetStatisticsSenderActions,
} from '../models/statistics-budget.model';

export const fetchRequest = (): BudgetStatisticsSenderActions => ({
  type: BudgetStatisticsSenderActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (
  data: BudgetStatistic[]
): BudgetStatisticsSenderActions => ({
  type: BudgetStatisticsSenderActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): BudgetStatisticsSenderActions => ({
  type: BudgetStatisticsSenderActionTypes.FETCH_ERROR,
  payload: message,
});
