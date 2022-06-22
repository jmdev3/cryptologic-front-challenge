/* eslint-disable prettier/prettier */
import {
  Instance,
  types
} from 'mobx-state-tree';
import { createContext, useContext } from 'react';

export const RootModel = types
  .model({
    theme: types.enumeration('theme', ['dark', 'light'])
  })
  .actions(self => {
    return {
      setTheme: (theme: 'dark' | 'light') => {
        self.theme = theme
      }
    };
  });

export const mobxRootState = RootModel.create({ theme: 'dark' });

export type IRootModel = Instance<typeof RootModel>;

const RootContext = createContext<IRootModel>({} as IRootModel);
export const MobxProvider = RootContext.Provider;
export function useMst(): Instance<typeof RootModel> {
  const state = useContext(RootContext);
  if (state === null) {
    throw new Error('state cannot be null, please add a context provider');
  }
  return state;
}