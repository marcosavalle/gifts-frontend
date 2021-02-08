import {
  StepTwoFormActionTypes,
  StepTwoFormActions,
} from '../models/gift-form-step-two.model';

export const saveRequest = (): StepTwoFormActions => ({
  type: StepTwoFormActionTypes.SAVE_REQUEST,
});

export const saveSuccess = (): StepTwoFormActions => ({
  type: StepTwoFormActionTypes.SAVE_SUCCESS,
});

export const saveError = (message: string): StepTwoFormActions => ({
  type: StepTwoFormActionTypes.SAVE_ERROR,
  payload: message,
});

export const clearData = (): StepTwoFormActions => ({
  type: StepTwoFormActionTypes.CLEAR_DATA,
});
