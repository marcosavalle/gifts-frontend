import { gql, DocumentNode } from 'apollo-boost';

export const GET_ALL_STATUS = (): DocumentNode => gql`
  {
    getAllGiftStatus {
      id
      name
    }
  }
`;
