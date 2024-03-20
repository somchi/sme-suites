import { InvoiceStore } from '@/app/_utils/types/invoice';

export const SET_BUSINESS_DATA = 'SET_BUSINESS_DATA';
export const SET_CUSTOMER_DATA = 'SET_CUSTOMER_DATA';
export const SET_INVOICE_DATA = 'SET_INVOICE_DATA';

export const invoiceReducer = (state: InvoiceStore, action: any) => {
  switch (action.type) {
    case SET_BUSINESS_DATA:
      return {
        ...state,
        business: action.payload,
      };
    case SET_CUSTOMER_DATA:
      return {
        ...state,
        customer: action.payload,
      };
    case SET_INVOICE_DATA:
      return {
        ...state,
        invoice: action.payload,
      };
    default:
      return state;
  }
};
