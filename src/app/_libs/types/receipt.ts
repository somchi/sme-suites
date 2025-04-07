import { Business, Customer, Product } from '.';

export type Receipt = {
  number: string;
  date: string;
  dueDate?: string;
  signature?: string;
  note: string;
  terms: string;
  discount: number;
  delivery: number;
  tax: number;
  invoiceNo?: string;
};

export type ReceiptStore = {
  business: Business;
  customer: Customer;
  receipt: Receipt;
  products: Product[];
  brandColor: { bgColor: string; textColor: string; border: string };
  template: string;
  currentIndex: number;
  taxable: boolean;
  currency: { symbol: string; currency: string; country: string };
  saveToDB: boolean;
};
