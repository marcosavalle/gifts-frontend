import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchRequest, fetchSuccess, fetchError } from './gift.actions';
import { GiftService } from '../services/gift.service';

export const getGiftThunk = (
  id: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    GiftService.getById(id).subscribe(
      (gift) => {
        dispatch(fetchSuccess(gift || null));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};

export const getFullGiftThunk = (
  id: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    GiftService.getByIdFull(id).subscribe(
      (gift) => {
        dispatch(fetchSuccess(gift || null));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
