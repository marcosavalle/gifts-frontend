import { Reducer } from 'redux';
import {
  BudgetStatisticsReceiverState,
  BudgetStatisticsReceiverActionTypes,
  BudgetStatisticsReceiverActions,
} from '../models/statistics-budget.model';

export const initialState: BudgetStatisticsReceiverState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<BudgetStatisticsReceiverState> = (
  state = initialState,
  action: BudgetStatisticsReceiverActions
) => {
  switch (action.type) {
    case BudgetStatisticsReceiverActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case BudgetStatisticsReceiverActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case BudgetStatisticsReceiverActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isFetchCompleted: true,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as budgetStatisticsReceiverReducer };
