import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GET_ALL_GIFT_TYPES } from '../querys/get-all.query';
import { ApiService } from '../../../core/services/api.service';
import { GiftType } from '../models/gift-type.model';

type GiftTypeResponse = {
  getAllGiftTypes: GiftType[];
};
export class GiftTypesService extends ApiService {
  public static getAll(): Observable<GiftType[] | undefined> {
    return super
      .get<GiftTypeResponse>(GET_ALL_GIFT_TYPES())
      .pipe(map((res: GiftTypeResponse | undefined) => res?.getAllGiftTypes));
  }
}
