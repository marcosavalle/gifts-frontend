import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { resetError, resetRequest, resetSuccess } from './gift-reset.actions';
import { GiftService } from '../services/gift.service';
import { RESET_GIFT } from '../mutations/reset-gift.mutation';

type GiftResetResponse = {
  resetGift: {
    success: boolean;
    message: string[];
  };
};

export const resetGiftThunk = (
  id: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(resetRequest());
    GiftService.resetGift<GiftResetResponse>(RESET_GIFT(), {
      id,
    }).subscribe(
      (res) => {
        if (res?.resetGift && res?.resetGift.success) {
          dispatch(resetSuccess());
        } else {
          dispatch(resetError('there was an error resetting the gift'));
        }
      },
      (err: Error) => {
        dispatch(resetError(err.message));
      }
    );
  };
};
