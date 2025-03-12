import React from 'react';

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
  bgColor: string;
}
export const CardWLink = ({ title, description, children, bgColor }: Props) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div
        className={`${bgColor} mb-6 grid items-center justify-center rounded-[8px] w-[44px] h-[44px]`}
      >
        {children}
      </div>

      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};
