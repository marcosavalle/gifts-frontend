/* eslint-disable import/no-cycle */
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AplicationState } from '../../../../core/store/state.model';
import { GiftState } from '../../models/gift.model';
import { getGiftThunk } from '../../store/gift.thunks';
import { getAddressesThunk } from '../../../addresses/store/addresses.thunks';
import { AddressesState } from '../../../addresses/models/addresses.model';
import {
  AddressForm,
  AddressFormState,
} from '../../../addresses/models/address.model';
import { saveAddressThunk } from '../../../addresses/store/address.thunks';
import { ProvincesState } from '../../../provinces/models/provinces.model';
import { LocalitiesState } from '../../../localities/models/localities.model';
import { getProvincesThunk } from '../../../provinces/store/provinces.thunks';
import { getLocalitiesThunk } from '../../../localities/store/localities.thunks';
import GiftPay from './GiftPay';
import { GiftPaymentUrlState } from '../../models/gift-payment-url.model';
import { FProduct } from '../../../products/models/product.model';
import { getGiftPaymentUrlThunk } from '../../store/gift-payment-url.thunks';
import { GiftBuyData, GiftBuyState } from '../../models/gift-buy.model';
import { buyGiftThunk } from '../../store/gift-buy.thunks';
import { clearData as clearAddressData } from '../../../addresses/store/address.actions';

export interface IGiftPayReduxProps {
  gift: GiftState;
  addresses: AddressesState;
  address: AddressFormState;
  provinces: ProvincesState;
  localities: LocalitiesState;
  giftPaymentUrl: GiftPaymentUrlState;
  giftBuy: GiftBuyState;
}

export interface IGiftPayReduxActions {
  getGift: (id: string) => void;
  getAddresses: () => void;
  createAddress: (data: AddressForm) => void;
  getProvinces: () => void;
  getLocalities: (provinceId: string) => void;
  getPaymentUrl: (id: string, products: FProduct[], addressId: string) => void;
  buyGift: (giftBuyData: GiftBuyData, giftType: string) => void;
  clearAddressData: () => void;
}

const mapStateToProps = ({
  gift,
  addresses,
  address,
  provinces,
  localities,
  giftPaymentUrl,
  giftBuy,
}: AplicationState): IGiftPayReduxProps => {
  return {
    gift,
    addresses,
    address,
    provinces,
    localities,
    giftPaymentUrl,
    giftBuy,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AplicationState, undefined, Action>
): IGiftPayReduxActions => ({
  getGift: (id: string) => dispatch(getGiftThunk(id)),
  getAddresses: () => dispatch(getAddressesThunk()),
  createAddress: (data: AddressForm) => dispatch(saveAddressThunk(data)),
  getProvinces: () => dispatch(getProvincesThunk()),
  getLocalities: (provinceId: string) =>
    dispatch(getLocalitiesThunk(provinceId)),
  getPaymentUrl: (id: string, products: FProduct[], addressId: string) =>
    dispatch(getGiftPaymentUrlThunk(id, products, addressId)),
  buyGift: (giftBuyData: GiftBuyData, giftType: string) =>
    dispatch(buyGiftThunk(giftBuyData, giftType)),
  clearAddressData: () => dispatch(clearAddressData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GiftPay);
