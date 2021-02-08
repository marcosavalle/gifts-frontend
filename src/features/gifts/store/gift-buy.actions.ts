import { GiftBuyActionTypes, GiftBuyActions } from '../models/gift-buy.model';

export const saveRequest = (): GiftBuyActions => ({
  type: GiftBuyActionTypes.SAVE_REQUEST,
});

export const saveSuccess = (): GiftBuyActions => ({
  type: GiftBuyActionTypes.SAVE_SUCCESS,
});

export const saveError = (message: string): GiftBuyActions => ({
  type: GiftBuyActionTypes.SAVE_ERROR,
  payload: message,
});
