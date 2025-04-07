import { Business, Customer, Product } from '.';

export type Invoice = {
  number: string;
  date: string;
  dueDate?: string;
  signature?: string;
  note: string;
  terms: string;
  discount: number;
  delivery: number;
  tax: number;
};

export type BrandColor = { bgColor: string; textColor: string; border: string };

export type InvoiceStore = {
  business: Business;
  customer: Customer;
  invoice: Invoice;
  products: Product[];
  brandColor: BrandColor;
  template: string;
  currentIndex: number;
  taxable: boolean;
  currency: { symbol: string; currency: string; country: string };
  saveToDB: boolean;
};
