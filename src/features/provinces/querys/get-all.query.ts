import { DocumentNode, gql } from 'apollo-boost';

export const GET_ALL_PROVINCES = (): DocumentNode => gql`
  {
    getAllProvinces {
      id
      name
    }
  }
`;
