import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GET_USER_ADDRESSES } from '../querys/get-all.query';
import { ApiService } from '../../../core/services/api.service';
import { Address } from '../models/address.model';

type AddressesResponse = {
  getUser: { address: Address[] };
};

export class AddressesService extends ApiService {
  public static getAll(): Observable<{ address: Address[] } | undefined> {
    return super
      .get<AddressesResponse>(GET_USER_ADDRESSES())
      .pipe(map((res: AddressesResponse | undefined) => res?.getUser));
  }
}
