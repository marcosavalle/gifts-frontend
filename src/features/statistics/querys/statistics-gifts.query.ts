import { DocumentNode, gql } from 'apollo-boost';

export const STATISTICS_GIFTS = (): DocumentNode => gql`
  query statisticsGifts($selector: SelectorStatistics!) {
    statisticsGifts(selector: $selector) {
      month
      amount
    }
  }
`;
