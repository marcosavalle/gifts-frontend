import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
} from './gift-payment-url.actions';
import { GiftService } from '../services/gift.service';
import { GET_PAYMENT_URL } from '../querys/get-payment-url.query';
import { FProduct } from '../../products/models/product.model';

type GiftPreparePaymentResponse = {
  getPaymentUrl: string;
};

export const getGiftPaymentUrlThunk = (
  id: string,
  products: FProduct[],
  addressId: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(fetchRequest());
    GiftService.getPaymentUrl<GiftPreparePaymentResponse>(GET_PAYMENT_URL(), {
      id,
      products,
      addressId,
    }).subscribe(
      (res) => {
        dispatch(fetchSuccess(res?.getPaymentUrl || ''));
      },
      (err: Error) => {
        dispatch(fetchError(err.message));
      }
    );
  };
};
