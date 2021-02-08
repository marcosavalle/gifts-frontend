import { gql, DocumentNode } from 'apollo-boost';
import { MostChosenFilters } from '../models/most-chosen.model';

export const GET_MOST_CHOSEN = ({
  filter,
  chosenBy,
  periodActivity,
  limit,
}: MostChosenFilters): DocumentNode => gql`
  {
    getMostChosen(filter: ${filter}, choosenBy: ${chosenBy}, periodActivity: ${periodActivity}, limit: ${limit})
    {
      meliId
      name
      image
      rating
    }
  }
`;
