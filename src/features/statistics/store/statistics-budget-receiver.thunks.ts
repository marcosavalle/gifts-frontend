import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
} from './statistics-budget-receiver.actions';
import { StatisticsBudgetService } from '../services/statistics-budget.service';

export const getStatisticsBudgetReceiverThunk = (
  selector: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    StatisticsBudgetService.getStatisticsBudget(selector).subscribe(
      (statistics) => {
        dispatch(fetchSuccess(statistics || []));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
