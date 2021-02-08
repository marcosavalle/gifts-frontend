import {
  GiftsReceivedActionTypes,
  GiftsReceivedActions,
} from '../models/gifts-received.model';
import { Gift, GiftsFilters } from '../models/gift.model';

export const fetchRequest = (): GiftsReceivedActions => ({
  type: GiftsReceivedActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: Gift[]): GiftsReceivedActions => ({
  type: GiftsReceivedActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): GiftsReceivedActions => ({
  type: GiftsReceivedActionTypes.FETCH_ERROR,
  payload: message,
});

export const saveFilters = (filters: GiftsFilters): GiftsReceivedActions => ({
  type: GiftsReceivedActionTypes.SAVE_FILTERS,
  payload: filters,
});
