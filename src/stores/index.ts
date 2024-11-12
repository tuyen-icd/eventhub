import {immer} from 'zustand/middleware/immer';
import {StateCreator, create} from 'zustand';
import {devtools} from 'zustand/middleware';

export const createStore = <T>(storeName: string, initializer: StateCreator<T, [['zustand/immer', never], ['zustand/devtools', never]], [['zustand/persist', T]]>) => {
  return create<T>()(
    immer(
      devtools(initializer, {
        name: storeName,
      }),
    ),
  );
};
