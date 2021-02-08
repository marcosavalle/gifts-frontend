/* eslint-disable import/no-cycle */
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AplicationState } from '../../../../core/store/state.model';
import {
  ProductInputFilters,
  ProductsState,
} from '../../../products/models/products.model';
import { getProductsThunk } from '../../../products/store/products.thunks';
import { GiftsFilters, GiftState } from '../../models/gift.model';
import GiftSelect from './GiftSelect';
import { getGiftThunk } from '../../store/gift.thunks';
import { GiftSelectState } from '../../models/gift-select.model';
import { FProduct } from '../../../products/models/product.model';
import { selectGiftThunk } from '../../store/gift-select.thunks';
import { clearData as clearProductData } from '../../../products/store/products.actions';
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
import { GiftsReceivedState } from '../../models/gifts-received.model';
import { getGiftsReceivedThunk } from '../../store/gifts-received.thunks';
import { clearData as clearAddressData } from '../../../addresses/store/address.actions';

export interface IGiftSelectReduxProps {
  gift: GiftState;
  products: ProductsState;
  giftSelect: GiftSelectState;
  addresses: AddressesState;
  address: AddressFormState;
  provinces: ProvincesState;
  localities: LocalitiesState;
  giftsReceived: GiftsReceivedState;
}

export interface IGiftSelectReduxActions {
  getProducts: (filters: ProductInputFilters) => void;
  getGift: (id: string) => void;
  selectGift: (id: string, addressId: string, products: FProduct[]) => void;
  clearProductsData: () => void;
  getAddresses: () => void;
  createAddress: (data: AddressForm) => void;
  getProvinces: () => void;
  getLocalities: (provinceId: string) => void;
  getGiftsReceived: (filters: GiftsFilters) => void;
  clearAddressData: () => void;
}

const mapStateToProps = ({
  gift,
  products,
  giftSelect,
  addresses,
  address,
  provinces,
  localities,
  giftsReceived,
}: AplicationState): IGiftSelectReduxProps => {
  return {
    gift,
    products,
    giftSelect,
    addresses,
    address,
    provinces,
    localities,
    giftsReceived,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AplicationState, undefined, Action>
): IGiftSelectReduxActions => ({
  getProducts: (filters: ProductInputFilters) =>
    dispatch(getProductsThunk(filters)),
  getGift: (id: string) => dispatch(getGiftThunk(id)),
  selectGift: (id: string, addressId: string, products: FProduct[]) =>
    dispatch(selectGiftThunk(id, addressId, products)),
  clearProductsData: () => dispatch(clearProductData()),
  getAddresses: () => dispatch(getAddressesThunk()),
  createAddress: (data: AddressForm) => dispatch(saveAddressThunk(data)),
  getProvinces: () => dispatch(getProvincesThunk()),
  getLocalities: (provinceId: string) =>
    dispatch(getLocalitiesThunk(provinceId)),
  getGiftsReceived: (filters: GiftsFilters) =>
    dispatch(getGiftsReceivedThunk(filters)),
  clearAddressData: () => dispatch(clearAddressData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GiftSelect);
