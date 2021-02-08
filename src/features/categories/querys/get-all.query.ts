import { gql, DocumentNode } from 'apollo-boost';

export const GET_ALL_MELI_CATEGORIES = (site: string): DocumentNode => gql`
  {
    getAllMeliCategories(site: "${site}") {
      meliId
      name
    }
  }
`;
