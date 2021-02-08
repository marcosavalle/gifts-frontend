import { Reducer } from 'redux';
import {
  ProductsState,
  ProductsActionTypes,
  ProductsActions,
} from '../models/products.model';

export const initialState: ProductsState = {
  loading: false,
  data: null,
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<ProductsState> = (
  state = initialState,
  action: ProductsActions
) => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case ProductsActionTypes.FETCH_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.isFetchCompleted = true;

      if (action.payload) {
        if (action.payload.actualPage === 1) {
          newState.data = { ...action.payload };
        } else {
          newState.data = { ...action.payload };

          const currentProducts = state.data
            ? state.data?.results.map((p) => ({ ...p }))
            : [];

          const newProducts = action.payload
            ? action.payload?.results.map((p) => ({ ...p }))
            : [];

          newState.data.results = [...currentProducts, ...newProducts];
        }
      }

      return newState;
    }
    case ProductsActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isFetchCompleted: true,
      };
    }
    case ProductsActionTypes.CLEAR_DATA: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export { reducer as productsReducer };
