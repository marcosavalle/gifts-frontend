import { gql, DocumentNode } from 'apollo-boost';

export const GIFT_ACCEPT = (): DocumentNode => gql`
  mutation giftAccept($id: ID!, $accept: Boolean!, $blocked: Boolean!) {
    giftAccept(input: { giftId: $id, accept: $accept, blocked: $blocked }) {
      success
      message
    }
  }
`;
