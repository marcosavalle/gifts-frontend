import { Province } from './province.model';

export type ProvincesState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: Province[];
  readonly error?: string;
};

export enum ProvincesActionTypes {
  FETCH_REQUEST = '@@provinces/FETCH_REQUEST',
  FETCH_SUCCESS = '@@provinces/FETCH_SUCCESS',
  FETCH_ERROR = '@@provinces/FETCH_ERROR',
}

interface FetchProvincesAction {
  type: typeof ProvincesActionTypes.FETCH_REQUEST;
}

interface FetchSuccessProvincesAction {
  type: typeof ProvincesActionTypes.FETCH_SUCCESS;
  payload: Province[];
}

interface FetchErrorProvincesAction {
  type: typeof ProvincesActionTypes.FETCH_ERROR;
  payload: string;
}

export type ProvincesActions =
  | FetchProvincesAction
  | FetchSuccessProvincesAction
  | FetchErrorProvincesAction;
