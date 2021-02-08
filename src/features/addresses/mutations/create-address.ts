import { gql, DocumentNode } from 'apollo-boost';

export const CREATE_ADDRESS = (): DocumentNode => gql`
  mutation createOrUpdateAddress(
    $street: String
    $number: String
    $apt: String
    $description: String
    $postalCode: String
    $localityId: String
    $name: String
    $contactPhone: String
  ) {
    createOrUpdateAddress(
      input: {
        street: $street
        number: $number
        apt: $apt
        description: $description
        postalCode: $postalCode
        localityId: $localityId
        name: $name
        contactPhone: $contactPhone
      }
    ) {
      success
      message
    }
  }
`;
