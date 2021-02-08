import { GiftState } from '../../models/gift.model';
import { GiftStatusesHistoryState } from '../../../status/models/gift-status-history.model';

export interface IGiftDetailsReduxProps {
  gift: GiftState;
  giftStatusesHistory: GiftStatusesHistoryState;
}

export interface IGiftDetailsReduxActions {
  getGiftStatusesHistory: (id: string) => void;
  getGift: (id: string) => void;
}
