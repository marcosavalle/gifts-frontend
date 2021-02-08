import { DocumentNode, gql } from 'apollo-boost';

export const GET_USER_ADDRESSES = (): DocumentNode => gql`
  {
    getUser {
      address {
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
    }
  }
`;
