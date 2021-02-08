import { gql, DocumentNode } from 'apollo-boost';

export const GET_GIFT_BY_ID_FULL = (id: string): DocumentNode => gql`
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
          meliCategoryId
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
          meliCategoryId
        }
      }
      delivery{
        deliveredDate
        deliveryAddress{
          id
          street
          number
          apt
          description
          postalCode
          locality
          name
          contactPhone
          country
          province          
        }
        statusesHistory{
          status{
            id
            name
          }
          date          
        }
      }
      payment{
        id
        paidDate
        name
      }
      status {
        id
        name
      }
    }
  }
`;
