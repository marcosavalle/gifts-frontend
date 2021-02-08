import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
} from './statistics-gifts-sender.actions';
import { StatisticsGiftsService } from '../services/statistics-gifts.service';

export const getStatisticsGiftsSenderThunk = (
  selector: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    StatisticsGiftsService.getStatisticsGifts(selector).subscribe(
      (statistics) => {
        dispatch(fetchSuccess(statistics || []));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
