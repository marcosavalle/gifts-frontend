import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { saveRequest, saveSuccess, saveError } from './gift-cancel.actions';
import { GiftService } from '../services/gift.service';
import { GIFT_DISCARD_BY_RECEIVER } from '../mutations/gift-discard-by-receiver.mutation';
import { GIFT_DISCARD_BY_SENDER } from '../mutations/gift-discard-by-sender.mutation';

type GiftCancelSenderResponse = {
  giftDiscardBySender: {
    success: boolean;
    message: string;
  };
};

type GiftCancelReceiverResponse = {
  giftDiscardByReceiver: {
    success: boolean;
    message: string;
  };
};

export const cancelGiftSenderThunk = (
  id: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(saveRequest());
    GiftService.cancelGift<GiftCancelSenderResponse>(GIFT_DISCARD_BY_SENDER(), {
      id,
    }).subscribe(
      (res) => {
        if (res?.giftDiscardBySender && res?.giftDiscardBySender.success) {
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

export const cancelGiftReceiverThunk = (
  id: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(saveRequest());
    GiftService.cancelGift<GiftCancelReceiverResponse>(
      GIFT_DISCARD_BY_RECEIVER(),
      {
        id,
      }
    ).subscribe(
      (res) => {
        if (res?.giftDiscardByReceiver && res?.giftDiscardByReceiver.success) {
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
