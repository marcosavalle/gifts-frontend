import { Reducer } from 'redux';
import {
  GiftAcceptState,
  GiftAcceptActionTypes,
  GiftAcceptFormActions,
} from '../models/gift-accept.model';

export const initialState: GiftAcceptState = {
  loading: false,
  error: undefined,
  isSaveCompleted: false,
};

const reducer: Reducer<GiftAcceptState> = (
  state = initialState,
  action: GiftAcceptFormActions
) => {
  switch (action.type) {
    case GiftAcceptActionTypes.SAVE_REQUEST: {
      return {
        ...state,
        loading: true,
        isSaveCompleted: false,
        error: undefined,
      };
    }
    case GiftAcceptActionTypes.SAVE_SUCCESS: {
      return {
        ...state,
        loading: false,
        isSaveCompleted: true,
      };
    }
    case GiftAcceptActionTypes.SAVE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSaveCompleted: true,
      };
    }
    case GiftAcceptActionTypes.CLEAR_DATA: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as giftAcceptReducer };
