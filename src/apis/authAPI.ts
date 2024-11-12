import { appInfo } from '../constants';
import axiosClient from './axiosClient';

class AuthAPI {
    HandleAuthentication = async (
        url: string,
        data?: any,
        method?: 'get' | 'post' | 'put' | 'delete',
        credentials?: 'include',

    ) => {
        return await axiosClient(`${appInfo.BASE_URL}/auth${url}`, {
            method: method ?? 'get',
            data,
        });
    };
}

const authenticationAPI = new AuthAPI();
export default authenticationAPI;
