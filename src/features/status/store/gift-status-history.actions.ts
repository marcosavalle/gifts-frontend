import {
  GiftStatusesHistoryActionTypes,
  GiftStatusesHistoryActions,
} from '../models/gift-status-history.model';
import { StatusHistoryItem } from '../models/status-history.model';

export const fetchRequest = (): GiftStatusesHistoryActions => ({
  type: GiftStatusesHistoryActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (
  data: StatusHistoryItem[]
): GiftStatusesHistoryActions => ({
  type: GiftStatusesHistoryActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): GiftStatusesHistoryActions => ({
  type: GiftStatusesHistoryActionTypes.FETCH_ERROR,
  payload: message,
});
