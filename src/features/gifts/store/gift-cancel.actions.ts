import {
  GiftCancelActionTypes,
  GiftCancelActions,
} from '../models/gift-cancel.model';

export const saveRequest = (): GiftCancelActions => ({
  type: GiftCancelActionTypes.SAVE_REQUEST,
});

export const saveSuccess = (): GiftCancelActions => ({
  type: GiftCancelActionTypes.SAVE_SUCCESS,
});

export const saveError = (message: string): GiftCancelActions => ({
  type: GiftCancelActionTypes.SAVE_ERROR,
  payload: message,
});

export const clearData = (): GiftCancelActions => ({
  type: GiftCancelActionTypes.CLEAR_DATA,
});
