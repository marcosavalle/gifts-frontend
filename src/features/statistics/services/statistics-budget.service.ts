import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { STATISTICS_BUDGET } from '../querys/statistics-budget.query';
import { BudgetStatistic } from '../models/statistics-budget.model';

type StatisticsBudgetResponse = {
  statisticsBudget: BudgetStatistic[];
};

export class StatisticsBudgetService extends ApiService {
  public static getStatisticsBudget(
    selector: string
  ): Observable<BudgetStatistic[] | undefined> {
    return super
      .get<StatisticsBudgetResponse>(STATISTICS_BUDGET(), { selector })
      .pipe(
        map(
          (res: StatisticsBudgetResponse | undefined) => res?.statisticsBudget
        )
      );
  }
}
