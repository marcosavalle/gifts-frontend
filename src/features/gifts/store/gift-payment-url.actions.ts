import {
  GiftPaymentUrlActionTypes,
  GiftPaymentUrlActions,
} from '../models/gift-payment-url.model';

export const fetchRequest = (): GiftPaymentUrlActions => ({
  type: GiftPaymentUrlActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: string): GiftPaymentUrlActions => ({
  type: GiftPaymentUrlActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): GiftPaymentUrlActions => ({
  type: GiftPaymentUrlActionTypes.FETCH_ERROR,
  payload: message,
});
