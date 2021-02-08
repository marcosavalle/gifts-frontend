import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { STATISTICS_CATEGORIES } from '../querys/statistics-categories.query';
import { CategoryStatistic } from '../models/statistics-categories.model';

type StatisticsCategoriesResponse = {
  statisticsCategories: CategoryStatistic[];
};

export class StatisticsCategoriesService extends ApiService {
  public static getStatisticsCategories(
    selector: string
  ): Observable<CategoryStatistic[] | undefined> {
    return super
      .get<StatisticsCategoriesResponse>(STATISTICS_CATEGORIES(), { selector })
      .pipe(
        map(
          (res: StatisticsCategoriesResponse | undefined) =>
            res?.statisticsCategories
        )
      );
  }
}
