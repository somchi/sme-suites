'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';
import { createUnauthStore, UnauthStore } from '../stores/unauth.store';

export type UnauthStoreApi = ReturnType<typeof createUnauthStore>;

export const UnauthStoreContext = createContext<UnauthStoreApi | undefined>(
  undefined
);

export interface UnauthStoreProviderProps {
  children: ReactNode;
}

export const UnauthProvider = ({ children }: UnauthStoreProviderProps) => {
  const storeRef = useRef<UnauthStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createUnauthStore();
  }

  return (
    <UnauthStoreContext.Provider value={storeRef.current}>
      {children}
    </UnauthStoreContext.Provider>
  );
};

export const useUnauthStore = <T,>(selector: (store: UnauthStore) => T): T => {
  const unauthStoreContext = useContext(UnauthStoreContext);

  if (!unauthStoreContext) {
    throw new Error(`useUnauthStore must be used within AppStoreProvider`);
  }

  return useStore(unauthStoreContext, selector);
};
