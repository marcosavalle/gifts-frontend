import {
  GiftReason,
  GiftReasonsActionTypes,
  GiftReasonsActions,
} from '../models/gift-reason.model';

export const fetchRequest = (): GiftReasonsActions => ({
  type: GiftReasonsActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: GiftReason[]): GiftReasonsActions => ({
  type: GiftReasonsActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): GiftReasonsActions => ({
  type: GiftReasonsActionTypes.FETCH_ERROR,
  payload: message,
});
