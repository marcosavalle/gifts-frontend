import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
} from './statistics-categories-receiver.actions';
import { StatisticsCategoriesService } from '../services/statistics-categories.service';

export const getStatisticsCategoriesReceiverThunk = (
  selector: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    StatisticsCategoriesService.getStatisticsCategories(selector).subscribe(
      (statistics) => {
        dispatch(fetchSuccess(statistics || []));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
