import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { Invoice, InvoiceStore } from '../_libs/types/invoice';
import { Business, Customer, Product } from '../_libs/types';
import { BRAND_COLOR } from '../_libs/theme';
import { TEMPLATES } from '../_libs/enums';
import { defaultCountry } from '../_libs/helpers';
import { Receipt, ReceiptStore } from '../_libs/types/receipt';

export type UnauthState = {
  step: number;
  invoice: InvoiceStore;
  receipt: ReceiptStore;
};

export type UnauthActions = {
  setStep: (step: number) => void;
  setInvoce: (invoice: Partial<InvoiceStore>) => void;
  setReceipt: (receipt: Partial<ReceiptStore>) => void;
};

export type UnauthStore = UnauthState & UnauthActions;

export const defaultInitState: UnauthState = {
  step: 1,
  invoice: {
    business: {} as Business,
    customer: {} as Customer,
    invoice: {} as Invoice,
    products: [] as Product[],
    brandColor: BRAND_COLOR.GRAY,
    template: TEMPLATES.STANDARD,
    currentIndex: 0,
    taxable: false,
    currency: defaultCountry(),
    saveToDB: false,
  },
  receipt: {
    business: {} as Business,
    customer: {} as Customer,
    receipt: {} as Receipt,
    products: [] as Product[],
    brandColor: BRAND_COLOR.GRAY,
    template: TEMPLATES.STANDARD,
    currentIndex: 0,
    taxable: false,
    currency: defaultCountry(),
    saveToDB: false,
  },
};

export const createUnauthStore = (
  initState: UnauthState = defaultInitState
) => {
  return createStore<UnauthStore>()(
    persist(
      (set) => ({
        ...initState,
        setStep: (step) => set(() => ({ step })),
        setInvoce: (invoice) =>
          set((state) => ({ invoice: { ...state.invoice, ...invoice } })),
        setReceipt: (receipt) =>
          set((state) => ({ receipt: { ...state.receipt, ...receipt } })),
      }),
      { name: 'unauth' }
    )
  );
};
