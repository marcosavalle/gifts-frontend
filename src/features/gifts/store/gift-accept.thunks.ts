import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { saveRequest, saveSuccess, saveError } from './gift-accept.actions';
import { GiftService } from '../services/gift.service';
import { GIFT_ACCEPT } from '../mutations/gift-accept.mutation';

type GiftAcceptResponse = {
  giftAccept: {
    success: boolean;
    message: string;
  };
};

export const acceptGiftThunk = (
  id: string,
  accept: boolean,
  blocked: boolean
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(saveRequest());
    GiftService.acceptGift<GiftAcceptResponse>(GIFT_ACCEPT(), {
      id,
      accept,
      blocked,
    }).subscribe(
      (res) => {
        if (res?.giftAccept && res?.giftAccept.success) {
          dispatch(saveSuccess());
        } else {
          dispatch(saveError('error with gift transaction'));
        }
      },
      (err: Error) => {
        dispatch(saveError(err.message));
      }
    );
  };
};
