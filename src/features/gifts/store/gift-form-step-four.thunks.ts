import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  saveRequest,
  saveSuccess,
  saveError,
} from './gift-form-step-four.actions';
import { GiftFormService } from '../services/gift-form.service';
import { CREATE_GIFT_STEP_FOUR } from '../mutations/gift-form-step-four.mutation';
import { getGiftThunk } from './gift.thunks';

type CreateStepFourResponse = {
  createGiftStepFour: {
    success: boolean;
    message: string;
  };
};

export const saveStepFourThunk = (
  id: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(saveRequest());
    GiftFormService.saveStep<CreateStepFourResponse>(CREATE_GIFT_STEP_FOUR(), {
      id,
    }).subscribe(
      (res) => {
        if (res?.createGiftStepFour && res?.createGiftStepFour.success) {
          dispatch(saveSuccess());
          dispatch(getGiftThunk(id));
        } else {
          dispatch(saveError('error creating gift step four'));
        }
      },
      (err: Error) => {
        dispatch(saveError(err.message));
      }
    );
  };
};
