import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { saveRequest, saveSuccess, saveError } from './address.actions';
import { AddressFormService } from '../services/address.service';
import { AddressForm } from '../models/address.model';
import { CREATE_ADDRESS } from '../mutations/create-address';
import { getAddressesThunk } from './addresses.thunks';

type CreateAddressResponse = {
  createOrUpdateAddress: {
    success: boolean;
    message: string;
    id?: string;
  };
};

export const saveAddressThunk = (
  data: AddressForm
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(saveRequest());

    const {
      name,
      localityId,
      street,
      number,
      postalCode,
      apt,
      description,
      contactPhone,
      province,
    } = data;

    const variables: AddressForm = {
      name,
      localityId,
      street,
      number,
      postalCode,
    };

    if (apt) variables.apt = apt;
    if (description) variables.description = description;
    if (contactPhone) variables.contactPhone = contactPhone;
    if (province) variables.province = province;

    AddressFormService.saveAddress<CreateAddressResponse>(
      CREATE_ADDRESS(),
      variables
    ).subscribe(
      (res) => {
        if (res?.createOrUpdateAddress && res?.createOrUpdateAddress.success) {
          dispatch(saveSuccess());
          dispatch(getAddressesThunk());
        } else {
          dispatch(saveError('error creating address'));
        }
      },
      (err: Error) => {
        dispatch(saveError(err.message));
      }
    );
  };
};
