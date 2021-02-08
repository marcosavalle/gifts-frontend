export type GiftBuyData = {
  giftId: string;
  addressId?: string;
  mepaCollectionId: string;
  mepaCollectionStatus: string;
  mepaExternalReference: string;
  mepaPaymentType: string;
  mepaMerchantOrderId: string;
  mepaPreferenceId: string;
  mepaSiteId: string;
  mepaProcessingMode: string;
  mepaMerchantAccountId: string;
};

export type GiftBuyState = {
  readonly isSaveCompleted: boolean;
  readonly loading: boolean;
  readonly error?: string;
};

export enum GiftBuyActionTypes {
  SAVE_REQUEST = '@@giftBuy/SAVE_REQUEST',
  SAVE_SUCCESS = '@@giftBuy/SAVE_SUCCESS',
  SAVE_ERROR = '@@giftBuy/SAVE_ERROR',
}

interface SaveRequestGiftBuyAction {
  type: typeof GiftBuyActionTypes.SAVE_REQUEST;
}

interface SaveSuccessGiftBuyAction {
  type: typeof GiftBuyActionTypes.SAVE_SUCCESS;
}

interface SaveErrorGiftBuyAction {
  type: typeof GiftBuyActionTypes.SAVE_ERROR;
  payload: string;
}

export type GiftBuyActions =
  | SaveRequestGiftBuyAction
  | SaveSuccessGiftBuyAction
  | SaveErrorGiftBuyAction;
