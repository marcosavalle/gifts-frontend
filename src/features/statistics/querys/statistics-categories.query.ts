import { DocumentNode, gql } from 'apollo-boost';

export const STATISTICS_CATEGORIES = (): DocumentNode => gql`
  query statisticsCategories($selector: SelectorStatistics!) {
    statisticsCategories(selector: $selector) {
      name
      amount
    }
  }
`;
