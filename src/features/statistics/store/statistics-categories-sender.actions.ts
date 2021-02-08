import {
  CategoryStatistic,
  CategoriesStatisticsSenderActionTypes,
  CategoriesStatisticsSenderActions,
} from '../models/statistics-categories.model';

export const fetchRequest = (): CategoriesStatisticsSenderActions => ({
  type: CategoriesStatisticsSenderActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (
  data: CategoryStatistic[]
): CategoriesStatisticsSenderActions => ({
  type: CategoriesStatisticsSenderActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (
  message: string
): CategoriesStatisticsSenderActions => ({
  type: CategoriesStatisticsSenderActionTypes.FETCH_ERROR,
  payload: message,
});
