import {
  GiftStatistic,
  GiftsStatisticsSenderActionTypes,
  GiftsStatisticsSenderActions,
} from '../models/statistics-gifts.model';

export const fetchRequest = (): GiftsStatisticsSenderActions => ({
  type: GiftsStatisticsSenderActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (
  data: GiftStatistic[]
): GiftsStatisticsSenderActions => ({
  type: GiftsStatisticsSenderActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): GiftsStatisticsSenderActions => ({
  type: GiftsStatisticsSenderActionTypes.FETCH_ERROR,
  payload: message,
});
