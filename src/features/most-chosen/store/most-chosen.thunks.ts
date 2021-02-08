import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  fetchCategoriesReceiverError,
  fetchCategoriesReceiverRequest,
  fetchCategoriesReceiverSuccess,
  fetchCategoriesSenderError,
  fetchCategoriesSenderRequest,
  fetchCategoriesSenderSuccess,
  fetchProductsReceiverError,
  fetchProductsReceiverRequest,
  fetchProductsReceiverSuccess,
  fetchProductsSenderError,
  fetchProductsSenderRequest,
  fetchProductsSenderSuccess,
} from './most-chosen.actions';
import { MostChosenService } from '../services/most-chosen.service';

export const getMostChosenCategoriesReceiverThunk = (
  limit = 5
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchCategoriesReceiverRequest());
    MostChosenService.getMostChosen({
      chosenBy: 'RECEIVERS',
      filter: 'CATEGORIES',
      periodActivity: 'FOUR_WEEKS',
      limit,
    }).subscribe(
      (mostChosen) => {
        dispatch(fetchCategoriesReceiverSuccess(mostChosen || []));
      },
      (err: Error) => {
        dispatch(fetchCategoriesReceiverError(err.message));
      }
    );
  };
};

export const getMostChosenCategoriesSenderThunk = (
  limit = 5
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchCategoriesSenderRequest());
    MostChosenService.getMostChosen({
      chosenBy: 'SENDERS',
      filter: 'CATEGORIES',
      periodActivity: 'FOUR_WEEKS',
      limit,
    }).subscribe(
      (mostChosen) => {
        dispatch(fetchCategoriesSenderSuccess(mostChosen || []));
      },
      (err: Error) => {
        dispatch(fetchCategoriesSenderError(err.message));
      }
    );
  };
};

export const getMostChosenProductsReceiverThunk = (
  limit = 4
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchProductsReceiverRequest());
    MostChosenService.getMostChosen({
      chosenBy: 'RECEIVERS',
      filter: 'PRODUCTS',
      periodActivity: 'FOUR_WEEKS',
      limit,
    }).subscribe(
      (mostChosen) => {
        dispatch(fetchProductsReceiverSuccess(mostChosen || []));
      },
      (err: Error) => {
        dispatch(fetchProductsReceiverError(err.message));
      }
    );
  };
};

export const getMostChosenProductsSenderThunk = (
  limit = 4
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchProductsSenderRequest());
    MostChosenService.getMostChosen({
      chosenBy: 'SENDERS',
      filter: 'PRODUCTS',
      periodActivity: 'FOUR_WEEKS',
      limit,
    }).subscribe(
      (mostChosen) => {
        dispatch(fetchProductsSenderSuccess(mostChosen || []));
      },
      (err: Error) => {
        dispatch(fetchProductsSenderError(err.message));
      }
    );
  };
};
