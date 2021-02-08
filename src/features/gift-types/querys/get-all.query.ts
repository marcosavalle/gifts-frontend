import { gql, DocumentNode } from 'apollo-boost';

export const GET_ALL_GIFT_TYPES = (): DocumentNode => gql`
  {
    getAllGiftTypes {
      id
      name
      description
    }
  }
`;
