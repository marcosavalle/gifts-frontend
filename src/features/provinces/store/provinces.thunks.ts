import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchRequest, fetchSuccess, fetchError } from './provinces.actions';
import { ProvincesService } from '../services/provinces.service';

export const getProvincesThunk = (): ThunkAction<
  void,
  unknown,
  unknown,
  AnyAction
> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    ProvincesService.getAll().subscribe(
      (addresses) => {
        dispatch(fetchSuccess(addresses || []));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
