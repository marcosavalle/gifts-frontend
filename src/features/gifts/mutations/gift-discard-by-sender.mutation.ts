import { gql, DocumentNode } from 'apollo-boost';

export const GIFT_DISCARD_BY_SENDER = (): DocumentNode => gql`
  mutation giftDiscardBySender($id: String!) {
    giftDiscardBySender(giftId: $id) {
      success
      message
    }
  }
`;
