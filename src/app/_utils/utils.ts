import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
