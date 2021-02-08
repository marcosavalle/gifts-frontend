import { DocumentNode } from 'graphql';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApolloQueryResult, FetchResult } from 'apollo-boost';
import { client } from '../plugins/apollo-client';

export class ApiService {
  protected static get<T>(query: DocumentNode, variables = {}): Observable<T> {
    return from(client.query({ query, variables, errorPolicy: 'all' })).pipe(
      map((res: ApolloQueryResult<T>) => {
        return res.data;
      }),
      catchError((err) => {
        return throwError(new Error(err));
      })
    );
  }

  protected static save<T>(
    mutation: DocumentNode,
    variables = {}
  ): Observable<T | null | undefined> {
    return from(client.mutate({ mutation, variables })).pipe(
      map((res: FetchResult<T>) => {
        return res.data;
      }),
      catchError((err) => {
        return throwError(new Error(err));
      })
    );
  }
}
