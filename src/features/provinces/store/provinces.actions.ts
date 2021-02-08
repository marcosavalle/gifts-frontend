import { Province } from '../models/province.model';
import {
  ProvincesActionTypes,
  ProvincesActions,
} from '../models/provinces.model';

export const fetchRequest = (): ProvincesActions => ({
  type: ProvincesActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: Province[]): ProvincesActions => ({
  type: ProvincesActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string): ProvincesActions => ({
  type: ProvincesActionTypes.FETCH_ERROR,
  payload: message,
});
