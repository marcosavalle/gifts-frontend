import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GET_ALL_PROVINCES } from '../querys/get-all.query';
import { ApiService } from '../../../core/services/api.service';
import { Province } from '../models/province.model';

type ProvincesResponse = {
  getAllProvinces: Province[];
};

export class ProvincesService extends ApiService {
  public static getAll(): Observable<Province[] | undefined> {
    return super
      .get<ProvincesResponse>(GET_ALL_PROVINCES())
      .pipe(map((res: ProvincesResponse | undefined) => res?.getAllProvinces));
  }
}
