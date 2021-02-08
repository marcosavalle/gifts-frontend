import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';
import { GraphQLError } from 'graphql/error';
import { AuthService } from '../services/auth.service';
import { LOGIN_ENDPOINT } from '../constants';

const userData = AuthService.getUserData() || null;

export const authMiddleware = setContext((_, { headers }) => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    headers: {
      ...headers,
      authorization: `Bearer ${userData?.token || ''}`,
    },
  };
});

export const authErrorHandler = onError(({ graphQLErrors }) => {
  if (graphQLErrors)
    graphQLErrors.forEach((error: GraphQLError) => {
      if (AuthService.isAuthError(error)) {
        window.location.href = LOGIN_ENDPOINT || '';
      }
    });
});
