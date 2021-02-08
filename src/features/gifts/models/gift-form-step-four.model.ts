export type StepFourFormState = {
  readonly isSaveCompleted: boolean;
  readonly loading: boolean;
  readonly error?: string;
};

export enum StepFourFormActionTypes {
  SAVE_REQUEST = '@@stepFourForm/SAVE_REQUEST',
  SAVE_SUCCESS = '@@stepFourForm/SAVE_SUCCESS',
  SAVE_ERROR = '@@stepFourForm/SAVE_ERROR',
  CLEAR_DATA = '@@stepFourForm/CLEAR_DATA',
}

interface SaveRequestStepFourAction {
  type: typeof StepFourFormActionTypes.SAVE_REQUEST;
}

interface SaveSuccessStepFourAction {
  type: typeof StepFourFormActionTypes.SAVE_SUCCESS;
}

interface SaveErrorStepFourAction {
  type: typeof StepFourFormActionTypes.SAVE_ERROR;
  payload: string;
}

interface ClearDataStepFourAction {
  type: typeof StepFourFormActionTypes.CLEAR_DATA;
}

export type StepFourFormActions =
  | SaveRequestStepFourAction
  | SaveSuccessStepFourAction
  | SaveErrorStepFourAction
  | ClearDataStepFourAction;
