import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchRequest, fetchSuccess, fetchError } from './addresses.actions';
import { AddressesService } from '../services/addresses.service';

export const getAddressesThunk = (): ThunkAction<
  void,
  unknown,
  unknown,
  AnyAction
> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    AddressesService.getAll().subscribe(
      (res) => {
        dispatch(fetchSuccess(res?.address || []));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
