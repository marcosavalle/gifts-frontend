import { Category } from './category.model';

export type CategoriesState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: Category[];
  readonly error?: string;
};

export enum CategoriesActionTypes {
  FETCH_REQUEST = '@@categories/FETCH_REQUEST',
  FETCH_SUCCESS = '@@categories/FETCH_SUCCESS',
  FETCH_ERROR = '@@categories/FETCH_ERROR',
}

interface FetchCategoriesAction {
  type: typeof CategoriesActionTypes.FETCH_REQUEST;
}

interface FetchSuccessCategoriesAction {
  type: typeof CategoriesActionTypes.FETCH_SUCCESS;
  payload: Category[];
}

interface FetchErrorCategoriesAction {
  type: typeof CategoriesActionTypes.FETCH_ERROR;
  payload: string;
}

export type CategoriesActions =
  | FetchCategoriesAction
  | FetchSuccessCategoriesAction
  | FetchErrorCategoriesAction;
