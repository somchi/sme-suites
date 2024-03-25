import {
  Business,
  Customer,
  Invoice,
  InvoiceStore,
  Product,
} from '@/app/_utils/types/invoice';
import { createContext } from 'react';

export const INITIAL_STATE: InvoiceStore = {
  business: {} as Business,
  customer: {} as Customer,
  invoice: {} as Invoice,
  products: [
    { name: '', id: '01', qty: 0, price: 0, discount: 0, amount: 0 },
  ] as Product[],
};

export const InvoiceContext = createContext<{
  invoiceState: InvoiceStore;
  invoiceDispatch: React.Dispatch<any>;
}>({
  invoiceState: INITIAL_STATE,
  invoiceDispatch: () => null,
});
