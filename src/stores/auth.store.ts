import { createStore } from './index';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthStoreState {
  auth: null;
  login: () => void;
  logout: () => void;
  refreshToken: () => void;
  reset: () => void;
}

export const useAuthStore = createStore<AuthStoreState>(
  'AuthStore',
  persist(
    (set, get) => ({
      auth: null,
      login: () => { },
      logout: () => { },
      refreshToken: () => { },
      reset: () => { },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
