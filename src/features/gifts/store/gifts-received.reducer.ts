import { Reducer } from 'redux';
import {
  GiftsReceivedState,
  GiftsReceivedActionTypes,
  GiftsReceivedActions,
} from '../models/gifts-received.model';

export const initialState: GiftsReceivedState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
  filters: {
    fromDate: '',
    toDate: '',
    statusId: '',
  },
};

const reducer: Reducer<GiftsReceivedState> = (
  state = initialState,
  action: GiftsReceivedActions
) => {
  switch (action.type) {
    case GiftsReceivedActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case GiftsReceivedActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case GiftsReceivedActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isFetchCompleted: true,
      };
    }
    case GiftsReceivedActionTypes.SAVE_FILTERS: {
      return {
        ...state,
        filters: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as giftsReceivedReducer };
