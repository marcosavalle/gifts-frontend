import { Reducer } from 'redux';
import {
  AddressesState,
  AddressesActionTypes,
  AddressesActions,
} from '../models/addresses.model';

export const initialState: AddressesState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
};

const reducer: Reducer<AddressesState> = (
  state = initialState,
  action: AddressesActions
) => {
  switch (action.type) {
    case AddressesActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case AddressesActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case AddressesActionTypes.FETCH_ERROR: {
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

export { reducer as addressesReducer };
