import { gql, DocumentNode } from 'apollo-boost';

export const GET_ALL_GIFT_REASONS = (): DocumentNode => gql`
  {
    getAllGiftReasons {
      id
      name
    }
  }
`;
