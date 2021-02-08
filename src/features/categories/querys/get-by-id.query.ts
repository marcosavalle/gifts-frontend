import { gql, DocumentNode } from 'apollo-boost';

export const GET_MELI_CATEGORY_BY_ID = (id: string): DocumentNode => gql`
  {
    getMeliCategoryById(id: "${id}") {
      meliId
      name
      picture
      pathRoot {
        meliId
        name
      }
      childrenCategories {
        meliId
        name
      }
    }
  }
`;
