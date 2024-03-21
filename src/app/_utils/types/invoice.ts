export type Business = {
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
  invoicNo: string;
  date: string;
  dueDate?: string;
  businessLogo?: any;
  note: string;
  terms: string;
  discount: number;
  tax: number;
};

export type InvoiceStore = {
  business: Business;
  customer: Customer;
  invoice: Invoice;
  products: Product[];
};
