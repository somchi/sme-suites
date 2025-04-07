import { CustomFlowbiteTheme } from 'flowbite-react';

export const buttonTheme: CustomFlowbiteTheme['button'] = {
  color: {
    primary: 'bg-theme-primary hover:bg-theme-primary/90 text-white text-xl',
  },
};
export const collapseTheme = {
  base: 'w-full md:block md:w-auto',
  list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
  hidden: {
    on: 'hidden',
    off: '',
  },
};

export const linkTheme = {
  base: 'block py-2 pl-3 pr-4 md:p-0 text-lg font-medium',
  active: {
    on: 'bg-theme-primary text-white dark:text-white md:bg-transparent md:text-theme-primary',
    off: 'border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-theme-primary',
  },
  disabled: {
    on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
    off: '',
  },
};
