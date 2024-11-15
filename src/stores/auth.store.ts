import {createStore} from './index';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IAuth} from '../types/auth.type';
import AuthService from '../apis/auth.api';

interface AuthStoreState {
  auth: IAuth | null;
  login: (data: any, callback: (isloading: boolean) => void) => void;
  logout: () => void;
  refreshToken: () => void;
  reset: () => void;
}

export const useAuthStore = createStore<AuthStoreState>(
  'AuthStore',
  persist(
    set => ({
      auth: null,
      login: async (data, callback) => {
        const {navigation} = data;
        callback(true);
        const res = await AuthService.login({
          username: 'emilys',
          password: 'emilyspass',
          expiresInMins: 30,
        });

        if (res.accessToken) {
          set({
            auth: res,
          });
          navigation('HomeScreen');
        }
        callback(false);
      },
      logout: () => set({auth: null}),
      refreshToken: () => {},
      reset: () => set({auth: null}),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
