import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { GET_MOST_CHOSEN } from '../queries/get-most-chosen.query';
import { MostChosen, MostChosenFilters } from '../models/most-chosen.model';

type GetMostChosenResponse = {
  getMostChosen: MostChosen[];
};

export class MostChosenService extends ApiService {
  public static getMostChosen(
    filters: MostChosenFilters
  ): Observable<MostChosen[] | undefined> {
    return super
      .get<GetMostChosenResponse>(GET_MOST_CHOSEN(filters))
      .pipe(
        map((res: GetMostChosenResponse | undefined) => res?.getMostChosen)
      );
  }
}
