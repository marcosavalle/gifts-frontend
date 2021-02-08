import { gql, DocumentNode } from 'apollo-boost';

export const GIFT_DISCARD_BY_RECEIVER = (): DocumentNode => gql`
  mutation giftDiscardByReceiver($id: String!) {
    giftDiscardByReceiver(giftId: $id) {
      success
      message
    }
  }
`;
