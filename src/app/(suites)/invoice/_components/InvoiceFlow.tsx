'use client';

import BusinessDetails from '@/app/(suites)/invoice/_components/BusinessDetails';
import CustomerDetails from '@/app/(suites)/invoice/_components/CustomerDetails';
import InvoiceDetails from '@/app/(suites)/invoice/_components/InvoiceDetails';
import { TITLES } from '@/app/_utils/enums';
import { useState } from 'react';
import { Flow } from './Flow';

export const InvoiceFlow = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [title, setTitle] = useState<string>(TITLES.Business);

  const nextComponent = () => {
    const index = currentIndex + 1;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    handleTitle(index);
  };

  const previousComponent = () => {
    const index = currentIndex - 1;
    handleTitle(index);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const handleTitle = (index: number) => {
    setTitle(
      index === 0
        ? TITLES.Business
        : index === 1
        ? TITLES.Customer
        : TITLES.Invoice
    );
  };

  const renderComponent = () => {
    switch (currentIndex) {
      case 0:
        return <BusinessDetails nextStep={nextComponent} />;
      case 1:
        return (
          <CustomerDetails
            nextStep={nextComponent}
            previousStep={previousComponent}
          />
        );
      case 2:
        return <InvoiceDetails previousStep={previousComponent} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-10 mt-8">
        <Flow
          step="STEP 1"
          description="Business Details"
          last={false}
          active={currentIndex == 0 ? true : false}
        />
        <Flow
          step="STEP 2"
          description="Customer Details"
          last={false}
          active={currentIndex == 1 ? true : false}
        />
        <Flow
          step="STEP 3"
          description="Invoice Details"
          last={true}
          active={currentIndex == 2 ? true : false}
        />
      </div>
      <h1 className="text-center font-bold text-2xl py-20">{title}</h1>
      <div className="bg-theme-bgLight p-3 md:p-6 my-4">
        <div className="bg-theme-bgDark px-4 py-6 md:p-10 rounded-2xl gap-2">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};
