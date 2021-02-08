import { Reducer } from 'redux';
import {
  GiftTypeState,
  GiftTypesActionTypes,
  GiftTypesActions,
} from '../models/gift-type.model';

export const initialState: GiftTypeState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<GiftTypeState> = (
  state = initialState,
  action: GiftTypesActions
) => {
  switch (action.type) {
    case GiftTypesActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case GiftTypesActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case GiftTypesActionTypes.FETCH_ERROR: {
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

export { reducer as giftTypesReducer };
