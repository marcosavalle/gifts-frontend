import { DocumentNode, gql } from 'apollo-boost';

export const GET_ALL_LOCALITIES = (): DocumentNode => gql`
  query getLocalitiesByProvinceId($provinceId: String!) {
    getLocalitiesByProvinceId(provinceId: $provinceId) {
      id
      name
    }
  }
`;
