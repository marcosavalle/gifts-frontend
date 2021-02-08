import {
  AddressFormActionTypes,
  AddressFormActions,
} from '../models/address.model';

export const saveRequest = (): AddressFormActions => ({
  type: AddressFormActionTypes.SAVE_REQUEST,
});

export const saveSuccess = (): AddressFormActions => ({
  type: AddressFormActionTypes.SAVE_SUCCESS,
});

export const saveError = (message: string): AddressFormActions => ({
  type: AddressFormActionTypes.SAVE_ERROR,
  payload: message,
});

export const clearData = (): AddressFormActions => ({
  type: AddressFormActionTypes.CLEAR_DATA,
});
