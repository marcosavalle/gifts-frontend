import { Reducer } from 'redux';
import {
  CategoryState,
  CategoryActionTypes,
  CategoryActions,
} from '../models/category.model';

export const initialState: CategoryState = {
  loading: false,
  data: null,
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<CategoryState> = (
  state = initialState,
  action: CategoryActions
) => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case CategoryActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case CategoryActionTypes.FETCH_ERROR: {
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

export { reducer as categoryReducer };
