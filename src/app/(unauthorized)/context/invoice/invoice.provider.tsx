'use client';

import { useReducer } from 'react';
import { INITIAL_STATE, InvoiceContext } from './invoice.context';
import { invoiceReducer } from './inovice.reducer';

export const InvoiceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [invoiceState, invoiceDispatch] = useReducer(
    invoiceReducer,
    INITIAL_STATE
  );
  return (
    <InvoiceContext.Provider value={{ invoiceState, invoiceDispatch }}>
      {children}
    </InvoiceContext.Provider>
  );
};
