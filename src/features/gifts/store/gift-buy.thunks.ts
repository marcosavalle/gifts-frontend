import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { saveRequest, saveSuccess, saveError } from './gift-buy.actions';
import { GiftService } from '../services/gift.service';
import { GIFT_BUY } from '../mutations/gift-buy.mutation';
import { GiftBuyData } from '../models/gift-buy.model';

type GiftBuyResponse = {
  giftBuy: {
    success: boolean;
    message: string;
  };
};

export const buyGiftThunk = (
  giftBuyData: GiftBuyData,
  giftType: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  const data = { ...giftBuyData };
  if (giftType === 'Remoto') delete data.addressId;

  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(saveRequest());
    GiftService.buyGift<GiftBuyResponse>(GIFT_BUY(), data).subscribe(
      (res) => {
        if (res?.giftBuy && res?.giftBuy.success) {
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
