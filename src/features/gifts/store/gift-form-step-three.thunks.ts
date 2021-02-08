import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  saveRequest,
  saveSuccess,
  saveError,
} from './gift-form-step-three.actions';
import { GiftFormService } from '../services/gift-form.service';
import { StepThreeForm } from '../models/gift-form-step-three.model';
import { CREATE_GIFT_STEP_THREE } from '../mutations/gift-form-step-three.mutation';
import { getGiftThunk } from './gift.thunks';
import { FProduct } from '../../products/models/product.model';

type CreateStepThreeResponse = {
  createGiftStepThree: {
    success: boolean;
    message: string;
  };
};

export const saveStepThreeThunk = (
  data: StepThreeForm,
  id: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(saveRequest());

    type CategoryType = { meliId: string; name: string };
    type StepThreeInput = {
      id: string;
      categories?: CategoryType[];
      products?: FProduct[];
    };

    const categories: CategoryType[] = data.categories.map(
      ({ meliId, name }) => ({
        meliId,
        name,
      })
    );

    const input: StepThreeInput = { id };
    if (categories.length) input.categories = categories;
    if (data.products.length) input.products = data.products;

    GiftFormService.saveStep<CreateStepThreeResponse>(
      CREATE_GIFT_STEP_THREE(),
      input
    ).subscribe(
      (res) => {
        if (res?.createGiftStepThree && res?.createGiftStepThree.success) {
          dispatch(saveSuccess());
          dispatch(getGiftThunk(id));
        } else {
          dispatch(saveError('error creating gift step three'));
        }
      },
      (err: Error) => {
        dispatch(saveError(err.message));
      }
    );
  };
};
