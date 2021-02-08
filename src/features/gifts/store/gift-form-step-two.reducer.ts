import { Reducer } from 'redux';
import {
  StepTwoFormState,
  StepTwoFormActionTypes,
  StepTwoFormActions,
} from '../models/gift-form-step-two.model';

export const initialState: StepTwoFormState = {
  loading: false,
  data: {
    typeId: '',
    reasonId: '',
    maxAmount: '',
  },
  error: undefined,
  isSaveCompleted: false,
};

const reducer: Reducer<StepTwoFormState> = (
  state = initialState,
  action: StepTwoFormActions
) => {
  switch (action.type) {
    case StepTwoFormActionTypes.SAVE_REQUEST: {
      return {
        ...state,
        loading: true,
        isSaveCompleted: false,
        error: undefined,
      };
    }
    case StepTwoFormActionTypes.SAVE_SUCCESS: {
      return {
        ...state,
        loading: false,
        isSaveCompleted: true,
      };
    }
    case StepTwoFormActionTypes.SAVE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSaveCompleted: true,
      };
    }
    case StepTwoFormActionTypes.CLEAR_DATA: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as stepTwoFormReducer };
