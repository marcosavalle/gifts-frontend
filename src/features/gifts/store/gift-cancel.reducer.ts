import { Reducer } from 'redux';
import {
  GiftCancelState,
  GiftCancelActionTypes,
  GiftCancelActions,
} from '../models/gift-cancel.model';

export const initialState: GiftCancelState = {
  loading: false,
  error: undefined,
  isSaveCompleted: false,
};

const reducer: Reducer<GiftCancelState> = (
  state = initialState,
  action: GiftCancelActions
) => {
  switch (action.type) {
    case GiftCancelActionTypes.SAVE_REQUEST: {
      return {
        ...state,
        loading: true,
        isSaveCompleted: false,
        error: undefined,
      };
    }
    case GiftCancelActionTypes.SAVE_SUCCESS: {
      return {
        ...state,
        loading: false,
        isSaveCompleted: true,
      };
    }
    case GiftCancelActionTypes.SAVE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSaveCompleted: true,
      };
    }
    case GiftCancelActionTypes.CLEAR_DATA: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as giftCancelReducer };
