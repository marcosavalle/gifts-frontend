import { Address } from '../models/address.model';
import {
  AddressesActionTypes,
  AddressesActions,
} from '../models/addresses.model';

export const fetchRequest = (): AddressesActions => ({
  type: AddressesActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: Address[]): AddressesActions => ({
  type: AddressesActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): AddressesActions => ({
  type: AddressesActionTypes.FETCH_ERROR,
  payload: message,
});
