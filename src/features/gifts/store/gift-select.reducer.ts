import { Reducer } from 'redux';
import {
  GiftSelectState,
  GiftSelectActionTypes,
  GiftSelectActions,
} from '../models/gift-select.model';

export const initialState: GiftSelectState = {
  loading: false,
  error: undefined,
  isSaveCompleted: false,
};

const reducer: Reducer<GiftSelectState> = (
  state = initialState,
  action: GiftSelectActions
) => {
  switch (action.type) {
    case GiftSelectActionTypes.SAVE_REQUEST: {
      return {
        ...state,
        loading: true,
        isSaveCompleted: false,
        error: undefined,
      };
    }
    case GiftSelectActionTypes.SAVE_SUCCESS: {
      return {
        ...state,
        loading: false,
        isSaveCompleted: true,
      };
    }
    case GiftSelectActionTypes.SAVE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSaveCompleted: true,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as giftSelectReducer };
