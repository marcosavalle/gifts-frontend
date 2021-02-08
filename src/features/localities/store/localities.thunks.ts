import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchRequest, fetchSuccess, fetchError } from './localities.actions';
import { LocalitiesService } from '../services/localities.service';

export const getLocalitiesThunk = (
  provinceId: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    LocalitiesService.getAll(provinceId).subscribe(
      (localities) => {
        dispatch(fetchSuccess(localities || []));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
