import { Reducer } from 'redux';
import {
  StepThreeFormState,
  StepThreeFormActionTypes,
  StepThreeFormActions,
} from '../models/gift-form-step-three.model';

export const initialState: StepThreeFormState = {
  loading: false,
  data: {
    categories: [],
    products: [],
  },
  error: undefined,
  isSaveCompleted: false,
};

const reducer: Reducer<StepThreeFormState> = (
  state = initialState,
  action: StepThreeFormActions
) => {
  switch (action.type) {
    case StepThreeFormActionTypes.SAVE_REQUEST: {
      return {
        ...state,
        loading: true,
        isSaveCompleted: false,
        error: undefined,
      };
    }
    case StepThreeFormActionTypes.SAVE_SUCCESS: {
      return {
        ...state,
        loading: false,
        isSaveCompleted: true,
      };
    }
    case StepThreeFormActionTypes.SAVE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSaveCompleted: true,
      };
    }
    case StepThreeFormActionTypes.CLEAR_DATA: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as stepThreeFormReducer };
