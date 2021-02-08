import { Address } from './address.model';

export type AddressesState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: Address[];
  readonly error?: string;
};

export enum AddressesActionTypes {
  FETCH_REQUEST = '@@addresses/FETCH_REQUEST',
  FETCH_SUCCESS = '@@addresses/FETCH_SUCCESS',
  FETCH_ERROR = '@@addresses/FETCH_ERROR',
}

interface FetchAddressesAction {
  type: typeof AddressesActionTypes.FETCH_REQUEST;
}

interface FetchSuccessAddressesAction {
  type: typeof AddressesActionTypes.FETCH_SUCCESS;
  payload: Address[];
}

interface FetchErrorAddressesAction {
  type: typeof AddressesActionTypes.FETCH_ERROR;
  payload: string;
}

export type AddressesActions =
  | FetchAddressesAction
  | FetchSuccessAddressesAction
  | FetchErrorAddressesAction;
