import { gql, DocumentNode } from 'apollo-boost';

export const GIFT_SELECT = (): DocumentNode => gql`
  mutation giftSelect(
    $id: ID!
    $addressId: String
    $products: [ProductInput]!
  ) {
    giftSelect(
      input: { giftId: $id, addressId: $addressId, products: $products }
    ) {
      success
      message
    }
  }
`;
