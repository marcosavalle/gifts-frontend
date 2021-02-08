import {
  GiftSelectActionTypes,
  GiftSelectActions,
} from '../models/gift-select.model';

export const saveRequest = (): GiftSelectActions => ({
  type: GiftSelectActionTypes.SAVE_REQUEST,
});

export const saveSuccess = (): GiftSelectActions => ({
  type: GiftSelectActionTypes.SAVE_SUCCESS,
});

export const saveError = (message: string): GiftSelectActions => ({
  type: GiftSelectActionTypes.SAVE_ERROR,
  payload: message,
});
