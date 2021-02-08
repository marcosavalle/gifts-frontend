import {
  StepThreeFormActionTypes,
  StepThreeFormActions,
} from '../models/gift-form-step-three.model';

export const saveRequest = (): StepThreeFormActions => ({
  type: StepThreeFormActionTypes.SAVE_REQUEST,
});

export const saveSuccess = (): StepThreeFormActions => ({
  type: StepThreeFormActionTypes.SAVE_SUCCESS,
});

export const saveError = (message: string): StepThreeFormActions => ({
  type: StepThreeFormActionTypes.SAVE_ERROR,
  payload: message,
});

export const clearData = (): StepThreeFormActions => ({
  type: StepThreeFormActionTypes.CLEAR_DATA,
});
