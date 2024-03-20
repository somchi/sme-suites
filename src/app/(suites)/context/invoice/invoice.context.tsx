import { Business, Customer, InvoiceStore } from '@/app/_utils/types/invoice';
import { createContext } from 'react';

export const INITIAL_STATE: InvoiceStore = {
  business: {} as Business,
  customer: {} as Customer,
  invoice: {},
};

export const InvoiceContext = createContext<{
  invoiceState: InvoiceStore;
  invoiceDispatch: React.Dispatch<any>;
}>({
  invoiceState: INITIAL_STATE,
  invoiceDispatch: () => null,
});
