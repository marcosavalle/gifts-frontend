import {
  Product,
  ProductActionTypes,
  ProductActions,
} from '../models/product.model';

export const fetchRequest = (): ProductActions => ({
  type: ProductActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: Product | null): ProductActions => ({
  type: ProductActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): ProductActions => ({
  type: ProductActionTypes.FETCH_ERROR,
  payload: message,
});
