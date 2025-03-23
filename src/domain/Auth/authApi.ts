import {api} from '@api';

import {AuthCredentialsAPI} from './authTypes';

async function login(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>('login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.post<string>('/profile/logout');
  return response.data;
}

export const authApi = {
  login,
  signOut,
};
