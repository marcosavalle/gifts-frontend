import { Reducer } from 'redux';
import {
  StepFourFormState,
  StepFourFormActionTypes,
  StepFourFormActions,
} from '../models/gift-form-step-four.model';

export const initialState: StepFourFormState = {
  loading: false,
  error: undefined,
  isSaveCompleted: false,
};

const reducer: Reducer<StepFourFormState> = (
  state = initialState,
  action: StepFourFormActions
) => {
  switch (action.type) {
    case StepFourFormActionTypes.SAVE_REQUEST: {
      return {
        ...state,
        loading: true,
        isSaveCompleted: false,
        error: undefined,
      };
    }
    case StepFourFormActionTypes.SAVE_SUCCESS: {
      return {
        ...state,
        loading: false,
        isSaveCompleted: true,
      };
    }
    case StepFourFormActionTypes.SAVE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSaveCompleted: true,
      };
    }
    case StepFourFormActionTypes.CLEAR_DATA: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as stepFourFormReducer };
