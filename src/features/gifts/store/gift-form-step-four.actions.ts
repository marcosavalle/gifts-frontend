import {
  StepFourFormActionTypes,
  StepFourFormActions,
} from '../models/gift-form-step-four.model';

export const saveRequest = (): StepFourFormActions => ({
  type: StepFourFormActionTypes.SAVE_REQUEST,
});

export const saveSuccess = (): StepFourFormActions => ({
  type: StepFourFormActionTypes.SAVE_SUCCESS,
});

export const saveError = (message: string): StepFourFormActions => ({
  type: StepFourFormActionTypes.SAVE_ERROR,
  payload: message,
});

export const clearData = (): StepFourFormActions => ({
  type: StepFourFormActionTypes.CLEAR_DATA,
});
