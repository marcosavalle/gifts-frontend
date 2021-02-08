import {
  GiftResetActionTypes,
  GiftResetActions,
} from '../models/gift-reset.model';

export const resetRequest = (): GiftResetActions => ({
  type: GiftResetActionTypes.RESET_REQUEST,
});

export const resetSuccess = (): GiftResetActions => ({
  type: GiftResetActionTypes.RESET_SUCCESS,
});

export const resetError = (message: string): GiftResetActions => ({
  type: GiftResetActionTypes.RESET_ERROR,
  payload: message,
});

export const clearData = (): GiftResetActions => ({
  type: GiftResetActionTypes.CLEAR_DATA,
});
