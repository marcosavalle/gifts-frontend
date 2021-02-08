import {
  Status,
  StatusActionTypes,
  StatusActions,
} from '../models/status.model';

export const fetchRequest = (): StatusActions => ({
  type: StatusActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: Status[]): StatusActions => ({
  type: StatusActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): StatusActions => ({
  type: StatusActionTypes.FETCH_ERROR,
  payload: message,
});
