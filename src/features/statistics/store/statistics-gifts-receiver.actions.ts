import {
  GiftStatistic,
  GiftsStatisticsReceiverActionTypes,
  GiftsStatisticsReceiverActions,
} from '../models/statistics-gifts.model';

export const fetchRequest = (): GiftsStatisticsReceiverActions => ({
  type: GiftsStatisticsReceiverActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (
  data: GiftStatistic[]
): GiftsStatisticsReceiverActions => ({
  type: GiftsStatisticsReceiverActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (
  message: string
): GiftsStatisticsReceiverActions => ({
  type: GiftsStatisticsReceiverActionTypes.FETCH_ERROR,
  payload: message,
});
