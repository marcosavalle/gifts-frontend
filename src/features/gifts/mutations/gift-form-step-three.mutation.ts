import { gql, DocumentNode } from 'apollo-boost';

export const CREATE_GIFT_STEP_THREE = (): DocumentNode => gql`
  mutation createGiftStepThree(
    $id: ID!
    $categories: [CategoryInput]
    $products: [ProductKeyValue]
  ) {
    createGiftStepThree(
      input: { giftId: $id, categories: $categories, products: $products }
    ) {
      success
      message
    }
  }
`;
