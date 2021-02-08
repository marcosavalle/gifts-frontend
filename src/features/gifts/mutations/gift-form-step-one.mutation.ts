import { gql, DocumentNode } from 'apollo-boost';
import { StepOneForm } from '../models/gift-form-step-one.model';

export const CREATE_GIFT_STEP_ONE = (
  data: StepOneForm,
  id?: string
): DocumentNode => gql`
mutation {
    createGiftStepOne(input: {
      senderName: "${data.senderName}"
      receiverName: "${data.receiverName}"
      ${id ? `giftId: "${id}"` : ''}
    }) {
      success
      message
      id
    }
  }
`;
