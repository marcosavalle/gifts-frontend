import { StatusState } from '../../../status/models/status.model';
import { GiftCancelState } from '../../models/gift-cancel.model';
import { GiftResetState } from '../../models/gift-reset.model';
import { GiftsFilters } from '../../models/gift.model';
import { GiftsSentState } from '../../models/gifts-sent.model';

export interface GiftsSentReduxProps {
  giftCancel: GiftCancelState;
  giftReset: GiftResetState;
  giftsSent: GiftsSentState;
  status: StatusState;
}

export interface GiftsSentReduxActions {
  getGiftsSent: (filters: GiftsFilters) => void;
  getStatus: () => void;
  resetGift: (id: string) => void;
  cancelGift: (id: string) => void;
  clearGiftCancel: () => void;
  clearGiftReset: () => void;
}
