import { gql, DocumentNode } from 'apollo-boost';

export const RESET_GIFT = (): DocumentNode => gql`
  mutation resetGift($id: String!) {
    resetGift(giftId: $id) {
      success
      message
    }
  }
`;
