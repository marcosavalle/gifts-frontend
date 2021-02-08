import { Reducer } from 'redux';
import {
  GiftsStatisticsSenderState,
  GiftsStatisticsSenderActionTypes,
  GiftsStatisticsSenderActions,
} from '../models/statistics-gifts.model';

export const initialState: GiftsStatisticsSenderState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<GiftsStatisticsSenderState> = (
  state = initialState,
  action: GiftsStatisticsSenderActions
) => {
  switch (action.type) {
    case GiftsStatisticsSenderActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case GiftsStatisticsSenderActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case GiftsStatisticsSenderActionTypes.FETCH_ERROR: {
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

export { reducer as giftsStatisticsSenderReducer };
