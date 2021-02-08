import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DocumentNode } from 'graphql';
import { GET_GIFT_BY_ID_FULL } from '../querys/get-gift-by-id-full.query';
import { ApiService } from '../../../core/services/api.service';
import { Gift, GiftsFilters } from '../models/gift.model';

type GiftByIdResponse = {
  getGiftById: Gift;
};

type TGiftByIdFullResponse = {
  getGiftById: Gift;
};

export class GiftService extends ApiService {
  public static getById(id: string): Observable<Gift | undefined> {
    return super
      .get<GiftByIdResponse>(GET_GIFT_BY_ID_FULL(id))
      .pipe(map((res: GiftByIdResponse | undefined) => res?.getGiftById));
  }

  public static getByIdFull(id: string): Observable<Gift | undefined> {
    return super
      .get<TGiftByIdFullResponse>(GET_GIFT_BY_ID_FULL(id))
      .pipe(map((res: TGiftByIdFullResponse | undefined) => res?.getGiftById));
  }

  public static getAll<T>(
    query: DocumentNode,
    filters: GiftsFilters
  ): Observable<T | undefined> {
    return super.get<T>(query, filters).pipe(map((res: T | undefined) => res));
  }

  public static acceptGift<T>(
    query: DocumentNode,
    variables = {}
  ): Observable<T | null | undefined> {
    return super
      .save<T>(query, variables)
      .pipe(map((res: T | null | undefined) => res));
  }

  public static selectGift<T>(
    query: DocumentNode,
    variables = {}
  ): Observable<T | null | undefined> {
    return super
      .save<T>(query, variables)
      .pipe(map((res: T | null | undefined) => res));
  }

  public static resetGift<T>(
    query: DocumentNode,
    variables = {}
  ): Observable<T | null | undefined> {
    return super
      .save<T>(query, variables)
      .pipe(map((res: T | null | undefined) => res));
  }

  public static getPaymentUrl<T>(
    query: DocumentNode,
    variables = {}
  ): Observable<T | undefined> {
    return super
      .get<T>(query, variables)
      .pipe(map((res: T | undefined) => res));
  }

  public static buyGift<T>(
    query: DocumentNode,
    variables = {}
  ): Observable<T | null | undefined> {
    return super
      .save<T>(query, variables)
      .pipe(map((res: T | null | undefined) => res));
  }

  public static cancelGift<T>(
    query: DocumentNode,
    variables = {}
  ): Observable<T | null | undefined> {
    return super
      .save<T>(query, variables)
      .pipe(map((res: T | null | undefined) => res));
  }
}
