import { Reducer } from 'redux';
import {
  GiftBuyState,
  GiftBuyActionTypes,
  GiftBuyActions,
} from '../models/gift-buy.model';

export const initialState: GiftBuyState = {
  loading: false,
  error: undefined,
  isSaveCompleted: false,
};

const reducer: Reducer<GiftBuyState> = (
  state = initialState,
  action: GiftBuyActions
) => {
  switch (action.type) {
    case GiftBuyActionTypes.SAVE_REQUEST: {
      return {
        ...state,
        loading: true,
        isSaveCompleted: false,
        error: undefined,
      };
    }
    case GiftBuyActionTypes.SAVE_SUCCESS: {
      return {
        ...state,
        loading: false,
        isSaveCompleted: true,
      };
    }
    case GiftBuyActionTypes.SAVE_ERROR: {
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

export { reducer as giftBuyReducer };
