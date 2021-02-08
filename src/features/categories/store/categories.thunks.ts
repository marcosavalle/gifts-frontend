import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchRequest, fetchSuccess, fetchError } from './categories.actions';
import { CategoriesService } from '../services/categories.service';

export const getCategoriesThunk = (): ThunkAction<
  void,
  unknown,
  unknown,
  AnyAction
> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    CategoriesService.getAll().subscribe(
      (categories) => {
        dispatch(fetchSuccess(categories || []));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
