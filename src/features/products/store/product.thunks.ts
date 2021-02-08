import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchRequest, fetchSuccess, fetchError } from './product.actions';
import { ProductService } from '../services/product.service';

export const getProductThunk = (
  id: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    ProductService.getById(id).subscribe(
      (product) => {
        dispatch(fetchSuccess(product || null));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
