export type RootStore = {
  section: string;
};

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
