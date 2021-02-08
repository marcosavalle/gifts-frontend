import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GET_ALL_MELI_CATEGORIES } from '../querys/get-all.query';
import { ApiService } from '../../../core/services/api.service';
import { Category } from '../models/category.model';
import { GET_MELI_CATEGORY_BY_ID } from '../querys/get-by-id.query';

type CategoriesResponse = {
  getAllMeliCategories: Category[];
};

type CategoryByIdResponse = {
  getMeliCategoryById: Category;
};

export class CategoriesService extends ApiService {
  public static getAll(): Observable<Category[] | undefined> {
    return super
      .get<CategoriesResponse>(GET_ALL_MELI_CATEGORIES('MLA'))
      .pipe(
        map((res: CategoriesResponse | undefined) => res?.getAllMeliCategories)
      );
  }

  public static getById(id: string): Observable<Category | undefined> {
    return super
      .get<CategoryByIdResponse>(GET_MELI_CATEGORY_BY_ID(id))
      .pipe(
        map((res: CategoryByIdResponse | undefined) => res?.getMeliCategoryById)
      );
  }
}
