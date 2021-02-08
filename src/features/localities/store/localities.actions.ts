import { Locality } from '../models/locality.model';
import {
  LocalitiesActionTypes,
  LocalitiesActions,
} from '../models/localities.model';

export const fetchRequest = (): LocalitiesActions => ({
  type: LocalitiesActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: Locality[]): LocalitiesActions => ({
  type: LocalitiesActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): LocalitiesActions => ({
  type: LocalitiesActionTypes.FETCH_ERROR,
  payload: message,
});
