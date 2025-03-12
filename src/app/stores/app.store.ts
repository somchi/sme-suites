import { createStore } from 'zustand';

export type AppState = {
  step: number;
};

export type AppActions = {
  setStep: (step: number) => void;
};

export type AppStore = AppState & AppActions;

export const defaultInitState: AppState = {
  step: 1,
};

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    setStep: (step) => set(() => ({ step })),
  }));
};
