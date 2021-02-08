import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';

export class GiftFormService extends ApiService {
  public static saveStep<T>(
    query: DocumentNode,
    variables = {}
  ): Observable<T | null | undefined> {
    return super
      .save<T>(query, variables)
      .pipe(map((res: T | null | undefined) => res));
  }
}
