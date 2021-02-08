import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GET_ALL_LOCALITIES } from '../querys/get-all.query';
import { ApiService } from '../../../core/services/api.service';
import { Locality } from '../models/locality.model';

type LocalitiesResponse = {
  getLocalitiesByProvinceId: Locality[];
};

export class LocalitiesService extends ApiService {
  public static getAll(provinceId: string): Observable<Locality[] | undefined> {
    return super
      .get<LocalitiesResponse>(GET_ALL_LOCALITIES(), { provinceId })
      .pipe(
        map(
          (res: LocalitiesResponse | undefined) =>
            res?.getLocalitiesByProvinceId
        )
      );
  }
}
