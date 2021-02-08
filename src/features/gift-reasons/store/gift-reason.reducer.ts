import { Reducer } from 'redux';
import {
  GiftReasonState,
  GiftReasonsActionTypes,
  GiftReasonsActions,
} from '../models/gift-reason.model';

export const initialState: GiftReasonState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<GiftReasonState> = (
  state = initialState,
  action: GiftReasonsActions
) => {
  switch (action.type) {
    case GiftReasonsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case GiftReasonsActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case GiftReasonsActionTypes.FETCH_ERROR: {
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

export { reducer as giftReasonsReducer };
