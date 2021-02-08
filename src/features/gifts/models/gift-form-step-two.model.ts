export interface StepTwoForm {
  typeId: string;
  reasonId: string;
  maxAmount: string;
}

export interface StepTwoErrors {
  typeId: string;
  reasonId: string;
  maxAmount: string;
  outOfRangeProducts: number;
}

export type StepTwoFormState = {
  readonly isSaveCompleted: boolean;
  readonly loading: boolean;
  readonly data: StepTwoForm;
  readonly error?: string;
};

export enum StepTwoFormActionTypes {
  SAVE_REQUEST = '@@stepTwoForm/SAVE_REQUEST',
  SAVE_SUCCESS = '@@stepTwoForm/SAVE_SUCCESS',
  SAVE_ERROR = '@@stepTwoForm/SAVE_ERROR',
  CLEAR_DATA = '@@stepTwoForm/CLEAR_DATA',
}

interface SaveRequestStepTwoAction {
  type: typeof StepTwoFormActionTypes.SAVE_REQUEST;
}

interface SaveSuccessStepTwoAction {
  type: typeof StepTwoFormActionTypes.SAVE_SUCCESS;
}

interface SaveErrorStepTwoAction {
  type: typeof StepTwoFormActionTypes.SAVE_ERROR;
  payload: string;
}

interface ClearDataStepTwoAction {
  type: typeof StepTwoFormActionTypes.CLEAR_DATA;
}

export type StepTwoFormActions =
  | SaveRequestStepTwoAction
  | SaveSuccessStepTwoAction
  | SaveErrorStepTwoAction
  | ClearDataStepTwoAction;
