import { Reducer } from 'redux';
import {
  MostChosenState,
  MostChosenCategoriesReceiverActionTypes,
  MostChosenCategoriesReceiverActions,
  MostChosenCategoriesSenderActionTypes,
  MostChosenCategoriesSenderActions,
  MostChosenProductsReceiverActionTypes,
  MostChosenProductsReceiverActions,
  MostChosenProductsSenderActionTypes,
  MostChosenProductsSenderActions,
} from '../models/most-chosen.model';

export const initialState: MostChosenState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,
};

const mostChosenCategoriesReceiverReducer: Reducer<MostChosenState> = (
  state = initialState,
  action: MostChosenCategoriesReceiverActions
) => {
  switch (action.type) {
    case MostChosenCategoriesReceiverActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case MostChosenCategoriesReceiverActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case MostChosenCategoriesReceiverActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isFetchCompleted: true,
      };
    }
    default: {
      return state;
    }
  }
};

const mostChosenCategoriesSenderReducer: Reducer<MostChosenState> = (
  state = initialState,
  action: MostChosenCategoriesSenderActions
) => {
  switch (action.type) {
    case MostChosenCategoriesSenderActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case MostChosenCategoriesSenderActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case MostChosenCategoriesSenderActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isFetchCompleted: true,
      };
    }
    default: {
      return state;
    }
  }
};

const mostChosenProductsReceiverReducer: Reducer<MostChosenState> = (
  state = initialState,
  action: MostChosenProductsReceiverActions
) => {
  switch (action.type) {
    case MostChosenProductsReceiverActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case MostChosenProductsReceiverActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case MostChosenProductsReceiverActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isFetchCompleted: true,
      };
    }
    default: {
      return state;
    }
  }
};

const mostChosenProductsSenderReducer: Reducer<MostChosenState> = (
  state = initialState,
  action: MostChosenProductsSenderActions
) => {
  switch (action.type) {
    case MostChosenProductsSenderActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case MostChosenProductsSenderActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case MostChosenProductsSenderActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isFetchCompleted: true,
      };
    }
    default: {
      return state;
    }
  }
};

export {
  mostChosenCategoriesReceiverReducer,
  mostChosenCategoriesSenderReducer,
  mostChosenProductsSenderReducer,
  mostChosenProductsReceiverReducer,
};
