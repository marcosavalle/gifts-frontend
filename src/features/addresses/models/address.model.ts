/* eslint-disable import/no-cycle */
import { User } from '../../users/models/user.model';

export type Address = {
  id: string;
  street: string;
  number: string;
  apt: string;
  description: string;
  postalCode: string;
  locality: string;
  name: string;
  contactPhone: string;
  country: string;
  province: string;
  user: User;
};

export interface AddressForm {
  street: string;
  number: string;
  apt?: string;
  description?: string;
  postalCode: string;
  localityId: string;
  name: string;
  contactPhone?: string;
  province?: string;
}

export interface AddressFormErrors {
  street: string;
  number: string;
  apt: string;
  description: string;
  postalCode: string;
  localityId: string;
  name: string;
  contactPhone: string;
  province: string;
}

export type AddressFormState = {
  readonly isSaveCompleted: boolean;
  readonly loading: boolean;
  readonly data: AddressForm;
  readonly error?: string;
};

export enum AddressFormActionTypes {
  SAVE_REQUEST = '@@addressForm/SAVE_REQUEST',
  SAVE_SUCCESS = '@@addressForm/SAVE_SUCCESS',
  SAVE_ERROR = '@@addressForm/SAVE_ERROR',
  CLEAR_DATA = '@@addressForm/CLEAR_DATA',
}

interface SaveRequestAddressFormAction {
  type: typeof AddressFormActionTypes.SAVE_REQUEST;
}

interface SaveSuccessAddressFormAction {
  type: typeof AddressFormActionTypes.SAVE_SUCCESS;
}

interface SaveErrorAddressFormAction {
  type: typeof AddressFormActionTypes.SAVE_ERROR;
  payload: string;
}

interface ClearDataAddressFormAction {
  type: typeof AddressFormActionTypes.CLEAR_DATA;
}

export type AddressFormActions =
  | SaveRequestAddressFormAction
  | SaveSuccessAddressFormAction
  | SaveErrorAddressFormAction
  | ClearDataAddressFormAction;
