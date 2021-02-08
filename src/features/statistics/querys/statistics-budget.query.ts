import { DocumentNode, gql } from 'apollo-boost';

export const STATISTICS_BUDGET = (): DocumentNode => gql`
  query statisticsBudget($selector: SelectorStatistics!) {
    statisticsBudget(selector: $selector) {
      month
      amount
    }
  }
`;
