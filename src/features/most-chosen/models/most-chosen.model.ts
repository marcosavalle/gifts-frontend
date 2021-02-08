export type MostChosen = {
  meliId: string;
  name: string;
  image: string;
  rating: number;
};

export type MostChosenFilters = {
  filter: 'CATEGORIES' | 'PRODUCTS';
  chosenBy: 'SENDERS' | 'RECEIVERS';
  periodActivity: 'FOUR_WEEKS' | 'TWO_WEEKS' | 'ALL';
  limit?: number;
};

export type MostChosenState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: MostChosen[];
  readonly error?: string;
};

export enum MostChosenProductsSenderActionTypes {
  FETCH_REQUEST = '@@mostChosenProductsSender/FETCH_REQUEST',
  FETCH_SUCCESS = '@@mostChosenProductsSender/FETCH_SUCCESS',
  FETCH_ERROR = '@@mostChosenProductsSender/FETCH_ERROR',
}

interface FetchMostChosenProductsSenderAction {
  type: typeof MostChosenProductsSenderActionTypes.FETCH_REQUEST;
}

interface FetchSuccessMostChosenProductsSenderAction {
  type: typeof MostChosenProductsSenderActionTypes.FETCH_SUCCESS;
  payload: MostChosen[];
}

interface FetchErrorMostChosenProductsSenderAction {
  type: typeof MostChosenProductsSenderActionTypes.FETCH_ERROR;
  payload: string;
}

export type MostChosenProductsSenderActions =
  | FetchMostChosenProductsSenderAction
  | FetchSuccessMostChosenProductsSenderAction
  | FetchErrorMostChosenProductsSenderAction;

export enum MostChosenProductsReceiverActionTypes {
  FETCH_REQUEST = '@@mostChosenProductsReceiver/FETCH_REQUEST',
  FETCH_SUCCESS = '@@mostChosenProductsReceiver/FETCH_SUCCESS',
  FETCH_ERROR = '@@mostChosenProductsReceiver/FETCH_ERROR',
}

interface FetchMostChosenProductsReceiverAction {
  type: typeof MostChosenProductsReceiverActionTypes.FETCH_REQUEST;
}

interface FetchSuccessMostChosenProductsReceiverAction {
  type: typeof MostChosenProductsReceiverActionTypes.FETCH_SUCCESS;
  payload: MostChosen[];
}

interface FetchErrorMostChosenProductsReceiverAction {
  type: typeof MostChosenProductsReceiverActionTypes.FETCH_ERROR;
  payload: string;
}

export type MostChosenProductsReceiverActions =
  | FetchMostChosenProductsReceiverAction
  | FetchSuccessMostChosenProductsReceiverAction
  | FetchErrorMostChosenProductsReceiverAction;

export enum MostChosenCategoriesSenderActionTypes {
  FETCH_REQUEST = '@@mostChosenCategoriesSender/FETCH_REQUEST',
  FETCH_SUCCESS = '@@mostChosenCategoriesSender/FETCH_SUCCESS',
  FETCH_ERROR = '@@mostChosenCategoriesSender/FETCH_ERROR',
}

interface FetchMostChosenCategoriesSenderAction {
  type: typeof MostChosenCategoriesSenderActionTypes.FETCH_REQUEST;
}

interface FetchSuccessMostChosenCategoriesSenderAction {
  type: typeof MostChosenCategoriesSenderActionTypes.FETCH_SUCCESS;
  payload: MostChosen[];
}

interface FetchErrorMostChosenCategoriesSenderAction {
  type: typeof MostChosenCategoriesSenderActionTypes.FETCH_ERROR;
  payload: string;
}

export type MostChosenCategoriesSenderActions =
  | FetchMostChosenCategoriesSenderAction
  | FetchSuccessMostChosenCategoriesSenderAction
  | FetchErrorMostChosenCategoriesSenderAction;

export enum MostChosenCategoriesReceiverActionTypes {
  FETCH_REQUEST = '@@mostChosenCategoriesReceiver/FETCH_REQUEST',
  FETCH_SUCCESS = '@@mostChosenCategoriesReceiver/FETCH_SUCCESS',
  FETCH_ERROR = '@@mostChosenCategoriesReceiver/FETCH_ERROR',
}

interface FetchMostChosenCategoriesReceiverAction {
  type: typeof MostChosenCategoriesReceiverActionTypes.FETCH_REQUEST;
}

interface FetchSuccessMostChosenCategoriesReceiverAction {
  type: typeof MostChosenCategoriesReceiverActionTypes.FETCH_SUCCESS;
  payload: MostChosen[];
}

interface FetchErrorMostChosenCategoriesReceiverAction {
  type: typeof MostChosenCategoriesReceiverActionTypes.FETCH_ERROR;
  payload: string;
}

export type MostChosenCategoriesReceiverActions =
  | FetchMostChosenCategoriesReceiverAction
  | FetchSuccessMostChosenCategoriesReceiverAction
  | FetchErrorMostChosenCategoriesReceiverAction;
