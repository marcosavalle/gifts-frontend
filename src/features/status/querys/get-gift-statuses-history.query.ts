import { gql, DocumentNode } from 'apollo-boost';

export const GET_GIFT_STATUSES_HISTORY = (id:string): DocumentNode => gql`
  {
    getGiftStatusesHistory(id: "${id}"){
    status{
      id
      name
    }
    date
    user{
      id
      name
      lastName
      avatarUrl
    }
  }
  }
`;