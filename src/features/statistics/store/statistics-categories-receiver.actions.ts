import {
  CategoryStatistic,
  CategoriesStatisticsReceiverActionTypes,
  CategoriesStatisticsReceiverActions,
} from '../models/statistics-categories.model';

export const fetchRequest = (): CategoriesStatisticsReceiverActions => ({
  type: CategoriesStatisticsReceiverActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (
  data: CategoryStatistic[]
): CategoriesStatisticsReceiverActions => ({
  type: CategoriesStatisticsReceiverActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (
  message: string
): CategoriesStatisticsReceiverActions => ({
  type: CategoriesStatisticsReceiverActionTypes.FETCH_ERROR,
  payload: message,
});
