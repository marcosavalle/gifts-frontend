export type Category = {
  meliId: string;
  name: string;
  picture: string;
  pathRoot: Category[];
  childrenCategories: Category[];
};

export type CategoryState = {
  readonly isFetchCompleted: boolean;
  readonly loading: boolean;
  readonly data: Category | null;
  readonly error?: string;
};

export enum CategoryActionTypes {
  FETCH_REQUEST = '@@category/FETCH_REQUEST',
  FETCH_SUCCESS = '@@category/FETCH_SUCCESS',
  FETCH_ERROR = '@@category/FETCH_ERROR',
}

interface FetchCategoryAction {
  type: typeof CategoryActionTypes.FETCH_REQUEST;
}

interface FetchSuccessCategoryAction {
  type: typeof CategoryActionTypes.FETCH_SUCCESS;
  payload: Category | null;
}

interface FetchErrorCategoryAction {
  type: typeof CategoryActionTypes.FETCH_ERROR;
  payload: string;
}

export type CategoryActions =
  | FetchCategoryAction
  | FetchSuccessCategoryAction
  | FetchErrorCategoryAction;
