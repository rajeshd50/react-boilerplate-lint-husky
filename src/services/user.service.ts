import { APIS } from '../constants/api.constants';
import { User } from '../models';
import { BaseApi } from './common/base-api';
import { processResponse } from './common/common';

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  user: User;
}

const login = async ({ email, password }: ILogin): Promise<Error | ILoginResponse> => {
  const loginResponse = await BaseApi.post(APIS.AUTH.LOGIN, {
    email,
    password,
  });
  return processResponse<ILoginResponse>(loginResponse);
};

export const UserService = {
  login,
};
