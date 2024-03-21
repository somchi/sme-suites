import { InvoiceStore } from '@/app/_utils/types/invoice';

export const SET_BUSINESS_DATA = 'SET_BUSINESS_DATA';
export const SET_CUSTOMER_DATA = 'SET_CUSTOMER_DATA';
export const SET_INVOICE_DATA = 'SET_INVOICE_DATA';
export const SET_PRODUCTS = 'SET_PRODUCTS';

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
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
