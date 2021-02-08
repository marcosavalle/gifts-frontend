import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchRequest, fetchSuccess, fetchError } from './status.actions';
import { StatusService } from '../services/status.service';

export const getStatusThunk = (): ThunkAction<
  void,
  unknown,
  unknown,
  AnyAction
> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    StatusService.getAll().subscribe(
      (status) => {
        dispatch(fetchSuccess(status || []));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
