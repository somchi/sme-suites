'use client';

import { createContext, useReducer } from 'react';
import { appReducer } from './reducer';
import { NAV_ITEMS } from '@/app/_utils/enums';
import { RootStore } from '@/app/_utils/types/home';

const INITIAL_STATE: RootStore = {
  section: NAV_ITEMS.About,
};

export const RootContext = createContext<{
  state: RootStore;
  dispatch: React.Dispatch<any>;
}>({ state: INITIAL_STATE, dispatch: () => null });

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {children}
    </RootContext.Provider>
  );
};
