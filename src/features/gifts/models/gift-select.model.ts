export type GiftSelectState = {
  readonly isSaveCompleted: boolean;
  readonly loading: boolean;
  readonly error?: string;
};

export enum GiftSelectActionTypes {
  SAVE_REQUEST = '@@giftSelect/SAVE_REQUEST',
  SAVE_SUCCESS = '@@giftSelect/SAVE_SUCCESS',
  SAVE_ERROR = '@@giftSelect/SAVE_ERROR',
  CLEAR_DATA = '@@giftSelect/CLEAR_DATA',
}

interface SaveRequestGiftSelectAction {
  type: typeof GiftSelectActionTypes.SAVE_REQUEST;
}

interface SaveSuccessGiftSelectAction {
  type: typeof GiftSelectActionTypes.SAVE_SUCCESS;
}

interface SaveErrorGiftSelectAction {
  type: typeof GiftSelectActionTypes.SAVE_ERROR;
  payload: string;
}

export type GiftSelectActions =
  | SaveRequestGiftSelectAction
  | SaveSuccessGiftSelectAction
  | SaveErrorGiftSelectAction;
