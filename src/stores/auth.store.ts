import { createStore } from './index';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthStoreState {
  auth: any;
  login: (data: any) => void;
  logout: () => void;
  refreshToken: () => void;
  reset: () => void;
}

export const useAuthStore = createStore<AuthStoreState>(
  'AuthStore',
  persist(
    (set, get) => ({
      auth: null,
      login: (data) => set({ auth: data }),
      logout: () => set({ auth: null }),
      refreshToken: () => { },
      reset: () => set({ auth: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
