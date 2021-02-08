import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchRequest, fetchSuccess, fetchError } from './products.actions';
import { ProductService } from '../services/product.service';
import { ProductInputFilters } from '../models/products.model';

export const getProductsThunk = (
  filters: ProductInputFilters
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    ProductService.getAll(filters).subscribe(
      (res) => {
        dispatch(fetchSuccess(res || null));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
