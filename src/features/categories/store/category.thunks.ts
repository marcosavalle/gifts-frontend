import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchRequest, fetchSuccess, fetchError } from './category.actions';
import { CategoriesService } from '../services/categories.service';

export const getCategoryThunk = (
  id: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    CategoriesService.getById(id).subscribe(
      (category) => {
        dispatch(fetchSuccess(category || null));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
