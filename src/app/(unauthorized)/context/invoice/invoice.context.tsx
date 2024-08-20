import { BRAND_COLOR } from '@/app/_utils/contants';
import { TEMPLATES } from '@/app/_utils/enums';
import { Business, Customer, Product } from '@/app/_utils/types';
import { Invoice, InvoiceStore } from '@/app/_utils/types/invoice';
import { defaultCountry } from '@/app/_utils/utils';
import { createContext } from 'react';

export const INITIAL_STATE: InvoiceStore = {
  business: {} as Business,
  customer: {} as Customer,
  invoice: {} as Invoice,
  products: [
    { name: '', id: '01', qty: 0, price: 0, discount: 0, amount: 0 },
  ] as Product[],
  brandColor: BRAND_COLOR.GRAY,
  template: TEMPLATES.STANDARD,
  currentIndex: 0,
  taxable: false,
  currency: defaultCountry(),
  saveToDB: false,
};

export const InvoiceContext = createContext<{
  invoiceState: InvoiceStore;
  invoiceDispatch: React.Dispatch<any>;
}>({
  invoiceState: INITIAL_STATE,
  invoiceDispatch: () => null,
});
