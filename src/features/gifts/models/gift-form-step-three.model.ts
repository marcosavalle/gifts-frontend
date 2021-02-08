import { Category } from '../../categories/models/category.model';
import { FProduct } from '../../products/models/product.model';

export type StepThreeForm = {
  categories: Category[];
  products: FProduct[];
};

export interface StepThreeErrors {
  error: string;
}

export type StepThreeFormState = {
  readonly isSaveCompleted: boolean;
  readonly loading: boolean;
  readonly data: StepThreeForm;
  readonly error?: string;
};

export enum StepThreeFormActionTypes {
  SAVE_REQUEST = '@@stepThreeForm/SAVE_REQUEST',
  SAVE_SUCCESS = '@@stepThreeForm/SAVE_SUCCESS',
  SAVE_ERROR = '@@stepThreeForm/SAVE_ERROR',
  CLEAR_DATA = '@@stepThreeForm/CLEAR_DATA',
}

interface SaveRequestStepThreeAction {
  type: typeof StepThreeFormActionTypes.SAVE_REQUEST;
}

interface SaveSuccessStepThreeAction {
  type: typeof StepThreeFormActionTypes.SAVE_SUCCESS;
}

interface SaveErrorStepThreeAction {
  type: typeof StepThreeFormActionTypes.SAVE_ERROR;
  payload: string;
}

interface ClearDataStepThreeAction {
  type: typeof StepThreeFormActionTypes.CLEAR_DATA;
}

export type StepThreeFormActions =
  | SaveRequestStepThreeAction
  | SaveSuccessStepThreeAction
  | SaveErrorStepThreeAction
  | ClearDataStepThreeAction;
