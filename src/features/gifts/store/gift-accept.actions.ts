import {
  GiftAcceptActionTypes,
  GiftAcceptFormActions,
} from '../models/gift-accept.model';

export const saveRequest = (): GiftAcceptFormActions => ({
  type: GiftAcceptActionTypes.SAVE_REQUEST,
});

export const saveSuccess = (): GiftAcceptFormActions => ({
  type: GiftAcceptActionTypes.SAVE_SUCCESS,
});

export const saveError = (message: string): GiftAcceptFormActions => ({
  type: GiftAcceptActionTypes.SAVE_ERROR,
  payload: message,
});

export const clearData = (): GiftAcceptFormActions => ({
  type: GiftAcceptActionTypes.CLEAR_DATA,
});
