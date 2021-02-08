import { GraphQLError } from 'graphql/error';
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { LS_USER_DATA_KEY } from '../constants';
import { UserData } from '../models/user-data.model';

export class AuthService {
  public static getUserData(): UserData | null {
    const rawData = atob(localStorage.getItem(LS_USER_DATA_KEY) || '');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    if (rawData) return JSON.parse(rawData);
    return null;
  }

  public static isAuthError({ extensions }: GraphQLError): boolean {
    const errorCode = extensions?.code;
    return errorCode === 'UNAUTHENTICATED';
  }

  public static setUserData(query: string): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const params = new URLSearchParams(query);
    const token = params.get('token') || '';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const payload = JSON.parse(atob(params.get('payload') || ''));
    const userData: UserData = {
      token,
      id: payload.id,
      name: payload.name,
      lastName: payload.lastName,
      email: payload.email,
    };

    localStorage.setItem(LS_USER_DATA_KEY, btoa(JSON.stringify(userData)));
  }
}
