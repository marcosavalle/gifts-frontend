import { Reducer } from 'redux';
import {
  AddressFormState,
  AddressFormActionTypes,
  AddressFormActions,
} from '../models/address.model';

export const initialState: AddressFormState = {
  loading: false,
  data: {
    street: '',
    number: '',
    apt: '',
    description: '',
    postalCode: '',
    localityId: '',
    name: '',
    contactPhone: '',
    province: '',
  },
  error: undefined,
  isSaveCompleted: false,
};

const reducer: Reducer<AddressFormState> = (
  state = initialState,
  action: AddressFormActions
) => {
  switch (action.type) {
    case AddressFormActionTypes.SAVE_REQUEST: {
      return {
        ...state,
        loading: true,
        isSaveCompleted: false,
        error: undefined,
      };
    }
    case AddressFormActionTypes.SAVE_SUCCESS: {
      return {
        ...state,
        loading: false,
        isSaveCompleted: true,
      };
    }
    case AddressFormActionTypes.SAVE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSaveCompleted: true,
      };
    }
    case AddressFormActionTypes.CLEAR_DATA: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as addressFormReducer };
