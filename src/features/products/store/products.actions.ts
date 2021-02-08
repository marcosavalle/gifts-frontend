import { MeliProductResponse } from '../models/product.model';
import { ProductsActionTypes, ProductsActions } from '../models/products.model';

export const fetchRequest = (): ProductsActions => ({
  type: ProductsActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (
  data: MeliProductResponse | null
): ProductsActions => ({
  type: ProductsActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): ProductsActions => ({
  type: ProductsActionTypes.FETCH_ERROR,
  payload: message,
});

export const clearData = (): ProductsActions => ({
  type: ProductsActionTypes.CLEAR_DATA,
});
