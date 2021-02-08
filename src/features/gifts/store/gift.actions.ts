import { Gift, GiftActionTypes, GiftActions } from '../models/gift.model';

export const fetchRequest = (): GiftActions => ({
  type: GiftActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: Gift | null): GiftActions => ({
  type: GiftActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): GiftActions => ({
  type: GiftActionTypes.FETCH_ERROR,
  payload: message,
});

export const clearData = (): GiftActions => ({
  type: GiftActionTypes.CLEAR_DATA,
});
