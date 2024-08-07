import { Business, Customer, Product } from '.';

export type Invoice = {
  invoiceNo: string;
  date: string;
  dueDate?: string;
  businessLogo?: any;
  signature?: any;
  note: string;
  terms: string;
  discount: number;
  delivery: number;
  tax: number;
};

export type InvoiceStore = {
  business: Business;
  customer: Customer;
  invoice: Invoice;
  products: Product[];
  brandColor: { bgColor: string; textColor: string; border: string };
  template: string;
  currentIndex: number;
  taxable: boolean;
  currency: { symbol: string; currency: string; country: string };
  saveToDB: boolean;
};
