import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchRequest, fetchSuccess, fetchError } from './gift-type.actions';
import { GiftTypesService } from '../services/gift-type.service';

export const getGiftTypesThunk = (): ThunkAction<
  void,
  unknown,
  unknown,
  AnyAction
> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    GiftTypesService.getAll().subscribe(
      (giftTypes) => {
        dispatch(fetchSuccess(giftTypes || []));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
