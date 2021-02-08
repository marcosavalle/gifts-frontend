import { Reducer } from 'redux';
import {
  LocalitiesState,
  LocalitiesActionTypes,
  LocalitiesActions,
} from '../models/localities.model';

export const initialState: LocalitiesState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<LocalitiesState> = (
  state = initialState,
  action: LocalitiesActions
) => {
  switch (action.type) {
    case LocalitiesActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case LocalitiesActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case LocalitiesActionTypes.FETCH_ERROR: {
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

export { reducer as localitiesReducer };
