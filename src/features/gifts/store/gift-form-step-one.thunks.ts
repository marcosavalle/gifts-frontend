import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  saveRequest,
  saveSuccess,
  saveError,
} from './gift-form-step-one.actions';
import { GiftFormService } from '../services/gift-form.service';
import { StepOneForm } from '../models/gift-form-step-one.model';
import { CREATE_GIFT_STEP_ONE } from '../mutations/gift-form-step-one.mutation';
import { getGiftThunk } from './gift.thunks';

type CreateStepOneResponse = {
  createGiftStepOne: {
    success: boolean;
    message: string;
    id?: string;
  };
};

export const saveStepOneThunk = (
  data: StepOneForm,
  id?: string
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<unknown, unknown, AnyAction>): void => {
    dispatch(saveRequest());
    GiftFormService.saveStep<CreateStepOneResponse>(
      CREATE_GIFT_STEP_ONE(data, id)
    ).subscribe(
      (res) => {
        if (res?.createGiftStepOne && res?.createGiftStepOne.success) {
          dispatch(saveSuccess());
          if (res?.createGiftStepOne.id) {
            dispatch(getGiftThunk(res?.createGiftStepOne.id));
          } else {
            dispatch(getGiftThunk(id as string));
          }
        } else {
          dispatch(saveError('error creating gift step one'));
        }
      },
      (err: Error) => {
        dispatch(saveError(err.message));
      }
    );
  };
};
