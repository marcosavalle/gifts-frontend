import { Reducer } from 'redux';
import { GiftState, GiftActionTypes, GiftActions } from '../models/gift.model';

export const initialState: GiftState = {
  loading: false,
  data: null,
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<GiftState> = (
  state = initialState,
  action: GiftActions
) => {
  switch (action.type) {
    case GiftActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case GiftActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case GiftActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isFetchCompleted: true,
      };
    }
    case GiftActionTypes.CLEAR_DATA: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as giftReducer };
