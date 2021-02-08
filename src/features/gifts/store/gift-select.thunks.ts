import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { saveRequest, saveSuccess, saveError } from './gift-select.actions';
import { GiftService } from '../services/gift.service';
import { GIFT_SELECT } from '../mutations/gift-select.mutation';
import { FProduct } from '../../products/models/product.model';

type GiftSelectResponse = {
  giftSelect: {
    success: boolean;
    message: string;
  };
};

export const selectGiftThunk = (
  id: string,
  addressId: string,
  products: FProduct[]
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(saveRequest());
    const parsedProducts = products.map((product) => {
      return {
        title: product.name,
        price: product.price,
        pictures: product.picture,
        meliCategoryId: product.meliCategoryId,
        meliProductId: product.meliId,
      };
    });
    GiftService.selectGift<GiftSelectResponse>(GIFT_SELECT(), {
      id,
      addressId,
      products: parsedProducts,
    }).subscribe(
      (res) => {
        if (res?.giftSelect && res?.giftSelect.success) {
          dispatch(saveSuccess());
        } else {
          dispatch(saveError('error with gift transaction'));
        }
      },
      (err: Error) => {
        dispatch(saveError(err.message));
      }
    );
  };
};
