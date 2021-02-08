import { Reducer } from 'redux';
import {
  BudgetStatisticsSenderState,
  BudgetStatisticsSenderActionTypes,
  BudgetStatisticsSenderActions,
} from '../models/statistics-budget.model';

export const initialState: BudgetStatisticsSenderState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<BudgetStatisticsSenderState> = (
  state = initialState,
  action: BudgetStatisticsSenderActions
) => {
  switch (action.type) {
    case BudgetStatisticsSenderActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case BudgetStatisticsSenderActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case BudgetStatisticsSenderActionTypes.FETCH_ERROR: {
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

export { reducer as budgetStatisticsSenderReducer };
