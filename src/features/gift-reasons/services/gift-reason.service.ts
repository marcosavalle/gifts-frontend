import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GET_ALL_GIFT_REASONS } from '../querys/get-all.query';
import { ApiService } from '../../../core/services/api.service';
import { GiftReason } from '../models/gift-reason.model';

type GiftReasonResponse = {
  getAllGiftReasons: GiftReason[];
};
export class GiftReasonsService extends ApiService {
  public static getAll(): Observable<GiftReason[] | undefined> {
    return super
      .get<GiftReasonResponse>(GET_ALL_GIFT_REASONS())
      .pipe(
        map((res: GiftReasonResponse | undefined) => res?.getAllGiftReasons)
      );
  }
}
