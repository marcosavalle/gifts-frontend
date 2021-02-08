export type Status = {
  id: string;
  name: string;
};

export type StatusState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: Status[];
  readonly error?: string;
};

export enum StatusActionTypes {
  FETCH_REQUEST = '@@status/FETCH_REQUEST',
  FETCH_SUCCESS = '@@status/FETCH_SUCCESS',
  FETCH_ERROR = '@@status/FETCH_ERROR',
}

interface FetchStatusAction {
  type: typeof StatusActionTypes.FETCH_REQUEST;
}

interface FetchSuccessStatusAction {
  type: typeof StatusActionTypes.FETCH_SUCCESS;
  payload: Status[];
}

interface FetchErrorStatusAction {
  type: typeof StatusActionTypes.FETCH_ERROR;
  payload: string;
}

export type StatusActions =
  | FetchStatusAction
  | FetchSuccessStatusAction
  | FetchErrorStatusAction;
