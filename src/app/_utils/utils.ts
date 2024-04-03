import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Countries } from './currency';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
