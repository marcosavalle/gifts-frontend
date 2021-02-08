import {
  StepOneFormActionTypes,
  StepOneFormActions,
} from '../models/gift-form-step-one.model';

export const saveRequest = (): StepOneFormActions => ({
  type: StepOneFormActionTypes.SAVE_REQUEST,
});

export const saveSuccess = (): StepOneFormActions => ({
  type: StepOneFormActionTypes.SAVE_SUCCESS,
});

export const saveError = (message: string): StepOneFormActions => ({
  type: StepOneFormActionTypes.SAVE_ERROR,
  payload: message,
});

export const clearData = (): StepOneFormActions => ({
  type: StepOneFormActionTypes.CLEAR_DATA,
});
