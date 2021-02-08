import { Category } from '../models/category.model';
import {
  CategoriesActionTypes,
  CategoriesActions,
} from '../models/categories.model';

export const fetchRequest = (): CategoriesActions => ({
  type: CategoriesActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: Category[]): CategoriesActions => ({
  type: CategoriesActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): CategoriesActions => ({
  type: CategoriesActionTypes.FETCH_ERROR,
  payload: message,
});
