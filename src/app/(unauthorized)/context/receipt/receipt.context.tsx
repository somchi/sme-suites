import { BRAND_COLOR } from '@/app/_utils/contants';
import { TEMPLATES } from '@/app/_utils/enums';
import { Business, Customer, Product } from '@/app/_utils/types';
import { Receipt, ReceiptStore } from '@/app/_utils/types/receipt';
import { defaultCountry } from '@/app/_utils/utils';
import { createContext } from 'react';

export const INITIAL_STATE: ReceiptStore = {
  business: {} as Business,
  customer: {} as Customer,
  receipt: {} as Receipt,
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

export const ReceiptContext = createContext<{
  receiptState: ReceiptStore;
  receiptDispatch: React.Dispatch<any>;
}>({
  receiptState: INITIAL_STATE,
  receiptDispatch: () => null,
});
