import { ReceiptStore } from '@/app/_utils/types/receipt';
import { INITIAL_STATE } from './receipt.context';

export const SET_BUSINESS_DATA = 'SET_BUSINESS_DATA';
export const SET_CUSTOMER_DATA = 'SET_CUSTOMER_DATA';
export const SET_RECEIPT_DATA = 'SET_RECEIPT_DATA';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_CLEAR_DATA = 'SET_CLEAR_DATA';
export const SET_INDEX = 'SET_INDEX';
export const SET_COLOR_THEME = 'SET_COLOR_THEME';
export const SET_TEMPLATE = 'SET_TEMPLATE';
export const SET_TAXABLE = 'SET_TAXABLE';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_SAVE_TO_DB = 'SET_SAVE_TO_DB';

export const receiptReducer = (state: ReceiptStore, action: any) => {
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
    case SET_RECEIPT_DATA:
      return {
        ...state,
        receipt: action.payload,
      };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_CLEAR_DATA:
      return {
        // ...state,
        ...INITIAL_STATE,
      };
    case SET_INDEX: {
      return { ...state, currentIndex: action.payload };
    }
    case SET_TEMPLATE: {
      return { ...state, template: action.payload };
    }
    case SET_COLOR_THEME: {
      return { ...state, brandColor: action.payload };
    }
    case SET_TAXABLE: {
      return { ...state, taxable: action.payload };
    }
    case SET_CURRENCY: {
      return { ...state, currency: action.payload };
    }
    case SET_SAVE_TO_DB: {
      return { ...state, saveToDB: action.payload };
    }
    default:
      return state;
  }
};
