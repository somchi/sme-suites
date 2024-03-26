export type Business = {
  businessName: string;
  name: string;
  email?: string;
  address?: string;
  phone: string;
  state?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  bank?: string;
  accNumber?: string;
  holderName?: string;
};

export type Customer = {
  name: string;
  email?: string;
  address?: string;
  phone: string;
  state?: string;
  city?: string;
  zipCode?: string;
};

export type Product = {
  name: string;
  qty: number;
  price: number;
  amount: number;
  id: string;
  discount: number;
};

export type Invoice = {
  invoiceNo: string;
  date: string;
  dueDate?: string;
  businessLogo?: any;
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
  brandColor: { bgColor: string; textColor: string };
  template: string;
  currentIndex: number;
  taxable: boolean;
  currency: { country: string; symbol: string; currency: string };
};
