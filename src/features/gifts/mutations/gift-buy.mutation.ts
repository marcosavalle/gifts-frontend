import { gql, DocumentNode } from 'apollo-boost';

export const GIFT_BUY = (): DocumentNode => gql`
  mutation giftBuy(
    $giftId: String
    $addressId: String
    $mepaCollectionId: String
    $mepaCollectionStatus: String
    $mepaExternalReference: String
    $mepaPaymentType: String
    $mepaMerchantOrderId: String
    $mepaPreferenceId: String
    $mepaSiteId: String
    $mepaProcessingMode: String
    $mepaMerchantAccountId: String
  ) {
    giftBuy(
      input: {
        giftId: $giftId
        addressId: $addressId
        mepaCollectionId: $mepaCollectionId
        mepaCollectionStatus: $mepaCollectionStatus
        mepaExternalReference: $mepaExternalReference
        mepaPaymentType: $mepaPaymentType
        mepaMerchantOrderId: $mepaMerchantOrderId
        mepaPreferenceId: $mepaPreferenceId
        mepaSiteId: $mepaSiteId
        mepaProcessingMode: $mepaProcessingMode
        mepaMerchantAccountId: $mepaMerchantAccountId
      }
    ) {
      success
      message
    }
  }
`;
