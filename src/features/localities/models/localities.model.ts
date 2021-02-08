import { Locality } from './locality.model';

export type LocalitiesState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: Locality[];
  readonly error?: string;
};

export enum LocalitiesActionTypes {
  FETCH_REQUEST = '@@localities/FETCH_REQUEST',
  FETCH_SUCCESS = '@@localities/FETCH_SUCCESS',
  FETCH_ERROR = '@@localities/FETCH_ERROR',
}

interface FetchLocalitiesAction {
  type: typeof LocalitiesActionTypes.FETCH_REQUEST;
}

interface FetchSuccessLocalitiesAction {
  type: typeof LocalitiesActionTypes.FETCH_SUCCESS;
  payload: Locality[];
}

interface FetchErrorLocalitiesAction {
  type: typeof LocalitiesActionTypes.FETCH_ERROR;
  payload: string;
}

export type LocalitiesActions =
  | FetchLocalitiesAction
  | FetchSuccessLocalitiesAction
  | FetchErrorLocalitiesAction;
