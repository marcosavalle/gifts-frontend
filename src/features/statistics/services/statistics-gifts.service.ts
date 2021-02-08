import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { STATISTICS_GIFTS } from '../querys/statistics-gifts.query';
import { GiftStatistic } from '../models/statistics-gifts.model';

type StatisticsGiftsResponse = {
  statisticsGifts: GiftStatistic[];
};

export class StatisticsGiftsService extends ApiService {
  public static getStatisticsGifts(
    selector: string
  ): Observable<GiftStatistic[] | undefined> {
    return super
      .get<StatisticsGiftsResponse>(STATISTICS_GIFTS(), { selector })
      .pipe(
        map((res: StatisticsGiftsResponse | undefined) => res?.statisticsGifts)
      );
  }
}
