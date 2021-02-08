import { GiftState } from '../../../features/gifts/models/gift.model';

export interface ShareGiftReduxActions {
  getGift: (id: string) => void;
}

export interface ShareGiftReduxProps {
  gift: GiftState;
}
