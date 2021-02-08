import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import moment from 'moment';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
  saveFilters,
} from './gifts-received.actions';
import { GiftService } from '../services/gift.service';
import { Gift, GiftsFilters } from '../models/gift.model';
import { GET_GIFTS_RECEIVED } from '../querys/get-gifts-received.query';

type GiftsReceivedResponse = {
  getAllGiftsReceived: Gift[];
};

export const getGiftsReceivedThunk = (
  filters: GiftsFilters
): ThunkAction<void, unknown, unknown, AnyAction> => {
  const fromDate = moment(
    `${filters.fromDate} 00:00:01`,
    'YYYY-MM-DD HH:mm:ss'
  ).toISOString();
  const toDate = moment(
    `${filters.toDate} 23:59:59`,
    'YYYY-MM-DD HH:mm:ss'
  ).toISOString();

  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    dispatch(saveFilters(filters));
    GiftService.getAll<GiftsReceivedResponse>(GET_GIFTS_RECEIVED(), {
      ...filters,
      fromDate,
      toDate,
    }).subscribe(
      (res) => {
        dispatch(fetchSuccess(res?.getAllGiftsReceived || []));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
