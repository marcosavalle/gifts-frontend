import { Reducer } from 'redux';
import {
  CategoriesStatisticsSenderState,
  CategoriesStatisticsSenderActionTypes,
  CategoriesStatisticsSenderActions,
} from '../models/statistics-categories.model';

export const initialState: CategoriesStatisticsSenderState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<CategoriesStatisticsSenderState> = (
  state = initialState,
  action: CategoriesStatisticsSenderActions
) => {
  switch (action.type) {
    case CategoriesStatisticsSenderActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case CategoriesStatisticsSenderActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case CategoriesStatisticsSenderActionTypes.FETCH_ERROR: {
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

export { reducer as categoriesStatisticsSenderReducer };
