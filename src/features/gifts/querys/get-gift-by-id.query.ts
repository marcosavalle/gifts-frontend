import { gql, DocumentNode } from 'apollo-boost';

export const GET_GIFT_BY_ID = (id: string): DocumentNode => gql`
  {
    getGiftById(id: "${id}")
    {
      id
      userSender{
        id
        name
        lastName
        avatarUrl
      }
      userReceiver{
        id
        name
        lastName
        avatarUrl
      }
      reason
      type
      senderName
      receiverName
      createdDate
      productsChosen{
        id
        products{
          id
          title
          price
          pictures
          warranty
          attributes{
            meliId
            name
            meliValueId
            valueName
          }
          variations{
            meliId
            name
            meliValueId
            valueName
          }
        }
      }
      productFilter {
        maxAmount
        categories {
          meliId
          name
        }
        products {
          meliId
          name
          price
          picture
        }
      }
      status {
        id
        name
      }
    }
  }
`;
