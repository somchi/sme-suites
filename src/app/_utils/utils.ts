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
  return Countries.find((item) => item.currency === 'NGN');
};
