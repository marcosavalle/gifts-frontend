import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  saveRequest,
  saveSuccess,
  saveError,
} from './gift-form-step-two.actions';
import { GiftFormService } from '../services/gift-form.service';
import { StepTwoForm } from '../models/gift-form-step-two.model';
import { CREATE_GIFT_STEP_TWO } from '../mutations/gift-form-step-two.mutation';
import { getGiftThunk } from './gift.thunks';

type CreateStepTwoResponse = {
  createGiftStepTwo: {
    success: boolean;
    message: string;
  };
};

export const saveStepTwoThunk = (
  data: StepTwoForm,
  id: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(saveRequest());
    GiftFormService.saveStep<CreateStepTwoResponse>(
      CREATE_GIFT_STEP_TWO(data, id)
    ).subscribe(
      (res) => {
        if (res?.createGiftStepTwo && res?.createGiftStepTwo.success) {
          dispatch(saveSuccess());
          dispatch(getGiftThunk(id));
        } else {
          dispatch(saveError('error creating gift step two'));
        }
      },
      (err: Error) => {
        dispatch(saveError(err.message));
      }
    );
  };
};
