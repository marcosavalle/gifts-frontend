export type GiftResetState = {
  readonly isResetCompleted: boolean;
  readonly loading: boolean;
  readonly error?: string;
};

export enum GiftResetActionTypes {
  RESET_REQUEST = '@@giftReset/RESET_REQUEST',
  RESET_SUCCESS = '@@giftReset/RESET_SUCCESS',
  RESET_ERROR = '@@giftReset/RESET_ERROR',
  CLEAR_DATA = '@@giftReset/CLEAR_DATA',
}

interface ResetRequestGiftResetAction {
  type: typeof GiftResetActionTypes.RESET_REQUEST;
}

interface ResetSuccessGiftResetAction {
  type: typeof GiftResetActionTypes.RESET_SUCCESS;
}

interface ResetErrorGiftResetAction {
  type: typeof GiftResetActionTypes.RESET_ERROR;
  payload: string;
}

interface ClearDataGiftResetAction {
  type: typeof GiftResetActionTypes.CLEAR_DATA;
}

export type GiftResetActions =
  | ResetRequestGiftResetAction
  | ResetSuccessGiftResetAction
  | ResetErrorGiftResetAction
  | ClearDataGiftResetAction;
