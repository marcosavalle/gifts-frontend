import {
  MostChosen,
  MostChosenCategoriesReceiverActionTypes,
  MostChosenCategoriesReceiverActions,
  MostChosenCategoriesSenderActionTypes,
  MostChosenCategoriesSenderActions,
  MostChosenProductsReceiverActionTypes,
  MostChosenProductsReceiverActions,
  MostChosenProductsSenderActionTypes,
  MostChosenProductsSenderActions,
} from '../models/most-chosen.model';

export const fetchCategoriesReceiverRequest = (): MostChosenCategoriesReceiverActions => ({
  type: MostChosenCategoriesReceiverActionTypes.FETCH_REQUEST,
});

export const fetchCategoriesReceiverSuccess = (
  data: MostChosen[]
): MostChosenCategoriesReceiverActions => ({
  type: MostChosenCategoriesReceiverActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchCategoriesReceiverError = (
  message: string
): MostChosenCategoriesReceiverActions => ({
  type: MostChosenCategoriesReceiverActionTypes.FETCH_ERROR,
  payload: message,
});

export const fetchCategoriesSenderRequest = (): MostChosenCategoriesSenderActions => ({
  type: MostChosenCategoriesSenderActionTypes.FETCH_REQUEST,
});

export const fetchCategoriesSenderSuccess = (
  data: MostChosen[]
): MostChosenCategoriesSenderActions => ({
  type: MostChosenCategoriesSenderActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchCategoriesSenderError = (
  message: string
): MostChosenCategoriesSenderActions => ({
  type: MostChosenCategoriesSenderActionTypes.FETCH_ERROR,
  payload: message,
});

export const fetchProductsReceiverRequest = (): MostChosenProductsReceiverActions => ({
  type: MostChosenProductsReceiverActionTypes.FETCH_REQUEST,
});

export const fetchProductsReceiverSuccess = (
  data: MostChosen[]
): MostChosenProductsReceiverActions => ({
  type: MostChosenProductsReceiverActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchProductsReceiverError = (
  message: string
): MostChosenProductsReceiverActions => ({
  type: MostChosenProductsReceiverActionTypes.FETCH_ERROR,
  payload: message,
});

export const fetchProductsSenderRequest = (): MostChosenProductsSenderActions => ({
  type: MostChosenProductsSenderActionTypes.FETCH_REQUEST,
});

export const fetchProductsSenderSuccess = (
  data: MostChosen[]
): MostChosenProductsSenderActions => ({
  type: MostChosenProductsSenderActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchProductsSenderError = (
  message: string
): MostChosenProductsSenderActions => ({
  type: MostChosenProductsSenderActionTypes.FETCH_ERROR,
  payload: message,
});
