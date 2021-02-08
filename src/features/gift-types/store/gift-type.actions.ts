import {
  GiftType,
  GiftTypesActionTypes,
  GiftTypesActions,
} from '../models/gift-type.model';

export const fetchRequest = (): GiftTypesActions => ({
  type: GiftTypesActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: GiftType[]): GiftTypesActions => ({
  type: GiftTypesActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): GiftTypesActions => ({
  type: GiftTypesActionTypes.FETCH_ERROR,
  payload: message,
});
