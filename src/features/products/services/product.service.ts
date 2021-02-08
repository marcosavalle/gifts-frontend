import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GET_PRODUCT_BY_ID } from '../querys/get-by-id.query';
import { ApiService } from '../../../core/services/api.service';
import { MeliProductResponse, Product } from '../models/product.model';
import { GET_MELI_PRODUCTS } from '../querys/get-all.query';
import { ProductInputFilters } from '../models/products.model';

type ProductsResponse = {
  getAllMeliProducts: MeliProductResponse;
};

type ProductByIdResponse = {
  getMeliProductDetailsById: Product;
};

export class ProductService extends ApiService {
  public static getAll(
    filters: ProductInputFilters
  ): Observable<MeliProductResponse | undefined> {
    return super
      .get<ProductsResponse>(GET_MELI_PRODUCTS(), filters)
      .pipe(
        map((res: ProductsResponse | undefined) => res?.getAllMeliProducts)
      );
  }

  public static getById(id: string): Observable<Product | undefined> {
    return super
      .get<ProductByIdResponse>(GET_PRODUCT_BY_ID(id))
      .pipe(
        map(
          (res: ProductByIdResponse | undefined) =>
            res?.getMeliProductDetailsById
        )
      );
  }
}
