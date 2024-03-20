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

export type InvoiceStore = {
  business: Business;
  customer: Customer;
  invoice: any;
};
