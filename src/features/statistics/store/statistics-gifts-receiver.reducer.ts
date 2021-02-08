import { Reducer } from 'redux';
import {
  GiftsStatisticsReceiverState,
  GiftsStatisticsReceiverActionTypes,
  GiftsStatisticsReceiverActions,
} from '../models/statistics-gifts.model';

export const initialState: GiftsStatisticsReceiverState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<GiftsStatisticsReceiverState> = (
  state = initialState,
  action: GiftsStatisticsReceiverActions
) => {
  switch (action.type) {
    case GiftsStatisticsReceiverActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case GiftsStatisticsReceiverActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case GiftsStatisticsReceiverActionTypes.FETCH_ERROR: {
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

export { reducer as giftsStatisticsReceiverReducer };
