import { Reducer } from 'redux';
import {
  StepOneFormState,
  StepOneFormActionTypes,
  StepOneFormActions,
} from '../models/gift-form-step-one.model';

export const initialState: StepOneFormState = {
  loading: false,
  data: {
    senderName: '',
    receiverName: '',
  },
  error: undefined,
  isSaveCompleted: false,
};

const reducer: Reducer<StepOneFormState> = (
  state = initialState,
  action: StepOneFormActions
) => {
  switch (action.type) {
    case StepOneFormActionTypes.SAVE_REQUEST: {
      return {
        ...state,
        loading: true,
        isSaveCompleted: false,
        error: undefined,
      };
    }
    case StepOneFormActionTypes.SAVE_SUCCESS: {
      return {
        ...state,
        loading: false,
        isSaveCompleted: true,
      };
    }
    case StepOneFormActionTypes.SAVE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSaveCompleted: true,
      };
    }
    case StepOneFormActionTypes.CLEAR_DATA: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as stepOneFormReducer };
