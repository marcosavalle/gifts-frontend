import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
} from './gift-status-history.actions';
import { StatusService } from '../services/status.service';

export const getGiftStatusesHistoryThunk = (
  id: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());    
    StatusService.getGiftStatusesHistory(id).subscribe(
      (giftStatusesHistory) => {
        dispatch(fetchSuccess(giftStatusesHistory || []));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
