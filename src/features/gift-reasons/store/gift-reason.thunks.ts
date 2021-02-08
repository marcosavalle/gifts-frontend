import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchRequest, fetchSuccess, fetchError } from './gift-reason.actions';
import { GiftReasonsService } from '../services/gift-reason.service';

export const getGiftReasonsThunk = (): ThunkAction<
  void,
  unknown,
  unknown,
  AnyAction
> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    GiftReasonsService.getAll().subscribe(
      (giftReasons) => {
        dispatch(fetchSuccess(giftReasons || []));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
