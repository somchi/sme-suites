'use client';

import { useReducer } from 'react';
import { INITIAL_STATE, ReceiptContext } from './receipt.context';
import { receiptReducer } from './receipt.reducer';

export const ReceiptProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [receiptState, receiptDispatch] = useReducer(
    receiptReducer,
    INITIAL_STATE
  );
  return (
    <ReceiptContext.Provider value={{ receiptState, receiptDispatch }}>
      {children}
    </ReceiptContext.Provider>
  );
};
