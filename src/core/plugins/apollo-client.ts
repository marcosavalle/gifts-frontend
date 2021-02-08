/* eslint-disable */
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { API_BASE_URL } from '../constants';
import {
  authMiddleware,
  authErrorHandler,
} from '../middlewares/auth.middleware';
import { createHttpLink } from 'apollo-link-http';

const httpLink = createHttpLink({ uri: API_BASE_URL });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authErrorHandler.concat(authMiddleware.concat(httpLink)),
  name: 'meli-regalos-web-client',
  version: '0.1.0',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});
