'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { AppStore, createAppStore } from '../stores/app.store';
import { useStore } from 'zustand';

export type AppStoreApi = ReturnType<typeof createAppStore>;

export const AppStoreContext = createContext<AppStoreApi | undefined>(
  undefined
);

export interface AppStoreProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppStoreProviderProps) => {
  const storeRef = useRef<AppStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createAppStore();
  }

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = <T,>(selector: (store: AppStore) => T): T => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext) {
    throw new Error(`useCounterStore must be used within AppStoreProvider`);
  }

  return useStore(appStoreContext, selector);
};
