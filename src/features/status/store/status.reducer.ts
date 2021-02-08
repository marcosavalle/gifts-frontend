import { Reducer } from 'redux';
import {
  StatusState,
  StatusActionTypes,
  StatusActions,
} from '../models/status.model';

export const initialState: StatusState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<StatusState> = (
  state = initialState,
  action: StatusActions
) => {
  switch (action.type) {
    case StatusActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case StatusActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case StatusActionTypes.FETCH_ERROR: {
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

export { reducer as statusReducer };
