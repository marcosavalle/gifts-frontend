export type GiftCancelState = {
  readonly isSaveCompleted: boolean;
  readonly loading: boolean;
  readonly error?: string;
};

export enum GiftCancelActionTypes {
  SAVE_REQUEST = '@@giftCancel/SAVE_REQUEST',
  SAVE_SUCCESS = '@@giftCancel/SAVE_SUCCESS',
  SAVE_ERROR = '@@giftCancel/SAVE_ERROR',
  CLEAR_DATA = '@@giftCancel/CLEAR_DATA',
}

interface SaveRequestGiftCancelAction {
  type: typeof GiftCancelActionTypes.SAVE_REQUEST;
}

interface SaveSuccessGiftCancelAction {
  type: typeof GiftCancelActionTypes.SAVE_SUCCESS;
}

interface SaveErrorGiftCancelAction {
  type: typeof GiftCancelActionTypes.SAVE_ERROR;
  payload: string;
}

interface ClearDataGiftCancelAction {
  type: typeof GiftCancelActionTypes.CLEAR_DATA;
}

export type GiftCancelActions =
  | SaveRequestGiftCancelAction
  | SaveSuccessGiftCancelAction
  | SaveErrorGiftCancelAction
  | ClearDataGiftCancelAction;
