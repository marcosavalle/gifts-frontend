import { Gift, GiftsFilters } from '../models/gift.model';
import {
  GiftsSentActionTypes,
  GiftsSentActions,
} from '../models/gifts-sent.model';

export const fetchRequest = (): GiftsSentActions => ({
  type: GiftsSentActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: Gift[]): GiftsSentActions => ({
  type: GiftsSentActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): GiftsSentActions => ({
  type: GiftsSentActionTypes.FETCH_ERROR,
  payload: message,
});

export const saveFilters = (filters: GiftsFilters): GiftsSentActions => ({
  type: GiftsSentActionTypes.SAVE_FILTERS,
  payload: filters,
});
