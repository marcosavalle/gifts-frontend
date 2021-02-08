import { Reducer } from 'redux';
import {
  ProvincesState,
  ProvincesActionTypes,
  ProvincesActions,
} from '../models/provinces.model';

export const initialState: ProvincesState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<ProvincesState> = (
  state = initialState,
  action: ProvincesActions
) => {
  switch (action.type) {
    case ProvincesActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case ProvincesActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case ProvincesActionTypes.FETCH_ERROR: {
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

export { reducer as provincesReducer };
