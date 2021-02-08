import { Reducer } from 'redux';
import {
  ProductState,
  ProductActionTypes,
  ProductActions,
} from '../models/product.model';

export const initialState: ProductState = {
  loading: false,
  data: null,
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<ProductState> = (
  state = initialState,
  action: ProductActions
) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case ProductActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case ProductActionTypes.FETCH_ERROR: {
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

export { reducer as productReducer };
