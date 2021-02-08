import { Reducer } from 'redux';
import {
  CategoriesStatisticsReceiverState,
  CategoriesStatisticsReceiverActionTypes,
  CategoriesStatisticsReceiverActions,
} from '../models/statistics-categories.model';

export const initialState: CategoriesStatisticsReceiverState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<CategoriesStatisticsReceiverState> = (
  state = initialState,
  action: CategoriesStatisticsReceiverActions
) => {
  switch (action.type) {
    case CategoriesStatisticsReceiverActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case CategoriesStatisticsReceiverActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case CategoriesStatisticsReceiverActionTypes.FETCH_ERROR: {
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

export { reducer as categoriesStatisticsReceiverReducer };
