import { gql, DocumentNode } from 'apollo-boost';

export const CREATE_GIFT_STEP_FOUR = (): DocumentNode => gql`
  mutation createGiftStepFour($id: ID!) {
    createGiftStepFour(input: { giftId: $id }) {
      success
      message
    }
  }
`;
