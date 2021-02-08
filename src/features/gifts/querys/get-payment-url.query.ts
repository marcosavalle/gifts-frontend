import { gql, DocumentNode } from 'apollo-boost';

export const GET_PAYMENT_URL = (): DocumentNode => gql`
  query getPaymentUrl($id: ID!, $products: [ProductKeyValue], $addressId: ID!) {
    getPaymentUrl(
      input: { giftId: $id, products: $products, addressId: $addressId }
    )
  }
`;
