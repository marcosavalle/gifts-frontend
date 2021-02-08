import { Reducer } from 'redux';
import {
  CategoriesState,
  CategoriesActionTypes,
  CategoriesActions,
} from '../models/categories.model';

export const initialState: CategoriesState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<CategoriesState> = (
  state = initialState,
  action: CategoriesActions
) => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case CategoriesActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case CategoriesActionTypes.FETCH_ERROR: {
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

export { reducer as categoriesReducer };
