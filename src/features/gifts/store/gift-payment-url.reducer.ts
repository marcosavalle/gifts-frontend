import { Reducer } from 'redux';
import {
  GiftPaymentUrlState,
  GiftPaymentUrlActionTypes,
  GiftPaymentUrlActions,
} from '../models/gift-payment-url.model';

export const initialState: GiftPaymentUrlState = {
  loading: false,
  data: '',
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<GiftPaymentUrlState> = (
  state = initialState,
  action: GiftPaymentUrlActions
) => {
  switch (action.type) {
    case GiftPaymentUrlActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case GiftPaymentUrlActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case GiftPaymentUrlActionTypes.FETCH_ERROR: {
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

export { reducer as giftPaymentUrlReducer };
