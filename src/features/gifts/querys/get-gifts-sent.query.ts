import { gql, DocumentNode } from 'apollo-boost';

export const GET_GIFTS_SENT = (): DocumentNode => gql`
  query getAllGiftsSent($fromDate: String, $toDate: String, $statusId: String) {
    getAllGiftsSent(fromDate: $fromDate, toDate: $toDate, statusId: $statusId) {
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
