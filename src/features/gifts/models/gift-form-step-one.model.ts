export interface StepOneForm {
  senderName: string;
  receiverName: string;
}

export interface StepOneErrors {
  senderName: string;
  receiverName: string;
}

export type StepOneFormState = {
  readonly isSaveCompleted: boolean;
  readonly loading: boolean;
  readonly data: StepOneForm;
  readonly error?: string;
};

export enum StepOneFormActionTypes {
  SAVE_REQUEST = '@@stepOneForm/SAVE_REQUEST',
  SAVE_SUCCESS = '@@stepOneForm/SAVE_SUCCESS',
  SAVE_ERROR = '@@stepOneForm/SAVE_ERROR',
  CLEAR_DATA = '@@stepOneForm/CLEAR_DATA',
}

interface SaveRequestStepOneAction {
  type: typeof StepOneFormActionTypes.SAVE_REQUEST;
}

interface SaveSuccessStepOneAction {
  type: typeof StepOneFormActionTypes.SAVE_SUCCESS;
}

interface SaveErrorStepOneAction {
  type: typeof StepOneFormActionTypes.SAVE_ERROR;
  payload: string;
}

interface ClearDataStepOneAction {
  type: typeof StepOneFormActionTypes.CLEAR_DATA;
}

export type StepOneFormActions =
  | SaveRequestStepOneAction
  | SaveSuccessStepOneAction
  | SaveErrorStepOneAction
  | ClearDataStepOneAction;
