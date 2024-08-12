'use client';

import { RootStore } from '@/app/_utils/types';

export const SET_SECTION = 'SET_SECTION';

export const appReducer = (
  state: RootStore,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_SECTION:
      return { ...state, section: action.payload };

    default:
      return state;
  }
};
