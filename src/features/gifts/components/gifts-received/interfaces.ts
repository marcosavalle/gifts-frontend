import { GiftsReceivedState } from '../../models/gifts-received.model';
import { StatusState } from '../../../status/models/status.model';
import { GiftsFilters } from '../../models/gift.model';
import { GiftCancelState } from '../../models/gift-cancel.model';

export interface GiftsReceivedReduxProps {
  giftCancel: GiftCancelState;
  giftsReceived: GiftsReceivedState;
  status: StatusState;
}

export interface GiftsReceivedReduxActions {
  getAllGiftsReceived: (filters: GiftsFilters) => void;
  getStatus: () => void;
  cancelGift: (id: string) => void;
  clearGiftCancel: () => void;
}
