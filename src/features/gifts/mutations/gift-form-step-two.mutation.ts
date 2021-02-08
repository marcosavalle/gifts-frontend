import { gql, DocumentNode } from 'apollo-boost';
import { StepTwoForm } from '../models/gift-form-step-two.model';

export const CREATE_GIFT_STEP_TWO = (
  data: StepTwoForm,
  id: string
): DocumentNode => gql`
mutation {
  createGiftStepTwo(input: {
      giftId: "${id}"
      typeId: "${data.typeId}"
      reasonId: "${data.reasonId}"
      maxAmount: ${data.maxAmount}
    }) {
      success
      message
    }
  }
`;
