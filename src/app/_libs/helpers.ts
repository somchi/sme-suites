import { Countries } from './currency';
import { Product } from './types';

export const capitalizeFirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatCurrency = (
  value: number,
  decimals: number = 2,
  COUNTRY_CODE: string = 'en-US'
) => {
  return Number(value).toLocaleString(COUNTRY_CODE, {
    style: 'decimal',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

export const defaultCountry = () => {
  let country = { symbol: '', currency: '', country: '' };
  const findCountry = Countries.find((item) => item.currency === 'NGN');
  if (findCountry) {
    country = findCountry;
  }
  return country;
};

export const sum = (products: Product[]) => {
  return products.reduce(
    (acc, curr) => acc + (curr.price * curr.qty - curr.discount),
    0
  );
};

export const formatColor = (color: string) => {
  const colorStr = color.split('-');
  const actualColor = colorStr[1].replace('[', '').replace(']', '');
  return actualColor;
};
