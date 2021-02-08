import {
  Category,
  CategoryActionTypes,
  CategoryActions,
} from '../models/category.model';

export const fetchRequest = (): CategoryActions => ({
  type: CategoryActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: Category | null): CategoryActions => ({
  type: CategoryActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): CategoryActions => ({
  type: CategoryActionTypes.FETCH_ERROR,
  payload: message,
});
