import {URL_API} from '../constants/endpoints';
import {IAuth, ILoginVariable} from '../types/auth.type';
import axiosClient from './axiosClient';

const login = (body: ILoginVariable): Promise<IAuth> => {
  return axiosClient.post(URL_API.LOGIN, body);
};

const AuthService = {
  login,
};

export default AuthService;
