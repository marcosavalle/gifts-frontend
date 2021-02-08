import { Reducer } from 'redux';
import {
  GiftsSentState,
  GiftsSentActionTypes,
  GiftsSentActions,
} from '../models/gifts-sent.model';

export const initialState: GiftsSentState = {
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

const reducer: Reducer<GiftsSentState> = (
  state = initialState,
  action: GiftsSentActions
) => {
  switch (action.type) {
    case GiftsSentActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case GiftsSentActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case GiftsSentActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isFetchCompleted: true,
      };
    }
    case GiftsSentActionTypes.SAVE_FILTERS: {
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

export { reducer as giftsSentReducer };
