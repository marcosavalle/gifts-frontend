import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GET_ALL_STATUS } from '../querys/get-all.query';
import { GET_GIFT_STATUSES_HISTORY } from '../querys/get-gift-statuses-history.query';
import { ApiService } from '../../../core/services/api.service';
import { Status } from '../models/status.model';
import { StatusHistoryItem } from '../models/status-history.model';

type StatusResponse = {
  getAllGiftStatus: Status[];
};

type TGiftStatusesHistoryResponse = {
  getGiftStatusesHistory: StatusHistoryItem[];
};

export class StatusService extends ApiService {
  public static getAll(): Observable<Status[] | undefined> {
    return super
      .get<StatusResponse>(GET_ALL_STATUS())
      .pipe(map((res: StatusResponse | undefined) => res?.getAllGiftStatus));
  }

  public static getGiftStatusesHistory(
    id: string
  ): Observable<StatusHistoryItem[] | undefined> {
    return super
      .get<TGiftStatusesHistoryResponse>(GET_GIFT_STATUSES_HISTORY(id))
      .pipe(
        map(
          (res: TGiftStatusesHistoryResponse | undefined) =>
            res?.getGiftStatusesHistory
        )
      );
  }
}
