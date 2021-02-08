import { Reducer } from 'redux';
import {
  GiftResetState,
  GiftResetActionTypes,
  GiftResetActions,
} from '../models/gift-reset.model';

export const initialState: GiftResetState = {
  loading: false,
  error: undefined,
  isResetCompleted: false,
};

const reducer: Reducer<GiftResetState> = (
  state = initialState,
  action: GiftResetActions
) => {
  switch (action.type) {
    case GiftResetActionTypes.RESET_REQUEST: {
      return {
        ...state,
        loading: true,
        isResetCompleted: false,
        error: undefined,
      };
    }
    case GiftResetActionTypes.RESET_SUCCESS: {
      return {
        ...state,
        loading: false,
        isResetCompleted: true,
      };
    }
    case GiftResetActionTypes.RESET_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isResetCompleted: true,
      };
    }
    case GiftResetActionTypes.CLEAR_DATA: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as giftResetReducer };
