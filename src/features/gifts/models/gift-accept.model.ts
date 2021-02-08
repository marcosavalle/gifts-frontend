export type GiftAcceptState = {
  readonly isSaveCompleted: boolean;
  readonly loading: boolean;
  readonly error?: string;
};

export type GiftReceiveData = {
  sender: string;
  receiver: string;
  giftId: string;
};

export enum GiftAcceptActionTypes {
  SAVE_REQUEST = '@@giftAccept/SAVE_REQUEST',
  SAVE_SUCCESS = '@@giftAccept/SAVE_SUCCESS',
  SAVE_ERROR = '@@giftAccept/SAVE_ERROR',
  CLEAR_DATA = '@@giftAccept/CLEAR_DATA',
}

interface SaveRequestGiftAcceptAction {
  type: typeof GiftAcceptActionTypes.SAVE_REQUEST;
}

interface SaveSuccessGiftAcceptAction {
  type: typeof GiftAcceptActionTypes.SAVE_SUCCESS;
}

interface SaveErrorGiftAcceptAction {
  type: typeof GiftAcceptActionTypes.SAVE_ERROR;
  payload: string;
}

interface ClearDataGiftAcceptAction {
  type: typeof GiftAcceptActionTypes.CLEAR_DATA;
}

export type GiftAcceptFormActions =
  | SaveRequestGiftAcceptAction
  | SaveSuccessGiftAcceptAction
  | SaveErrorGiftAcceptAction
  | ClearDataGiftAcceptAction;
