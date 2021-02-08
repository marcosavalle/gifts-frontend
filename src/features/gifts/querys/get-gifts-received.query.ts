import { DocumentNode, gql } from 'apollo-boost';

export const GET_GIFTS_RECEIVED = (): DocumentNode => gql`
  query getAllGiftsReceived(
    $fromDate: String
    $toDate: String
    $statusId: String
  ) {
    getAllGiftsReceived(
      fromDate: $fromDate
      toDate: $toDate
      statusId: $statusId
    ) {
      id
      reason
      type
      senderName
      receiverName
      createdDate
      productFilter {
        maxAmount
      }
      status {
        id
        name
      }
      userSender {
        id
      }
      userReceiver {
        id
      }
    }
  }
`;
