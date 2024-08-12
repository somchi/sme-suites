'use client';

import BusinessDetails from '@/app/(suites)/invoice/_components/BusinessDetails';
import CustomerDetails from '@/app/(suites)/invoice/_components/CustomerDetails';
import InvoiceDetails from '@/app/(suites)/invoice/_components/InvoiceDetails';
import { TITLES } from '@/app/_utils/enums';
import { useContext, useState } from 'react';
import { Flow } from '../../_components/Flow';
import { InvoiceContext } from '../../context/invoice/invoice.context';
import { SET_INDEX } from '../../context/invoice/inovice.reducer';

export const InvoiceFlow = () => {
  const [title, setTitle] = useState<string>(TITLES.Business);
  const { invoiceState, invoiceDispatch } = useContext(InvoiceContext);

  const nextComponent = () => {
    const index = invoiceState.currentIndex + 1;
    invoiceDispatch({ type: SET_INDEX, payload: index % 3 });

    handleTitle(index);
  };

  const previousComponent = () => {
    const index = invoiceState.currentIndex - 1;
    handleTitle(index);
    invoiceDispatch({ type: SET_INDEX, payload: (index + 3) % 3 });
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
    switch (invoiceState.currentIndex) {
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
    <div className="grid w-full lg:w-[80%] justify-self-center">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-10 mt-8">
        <Flow
          step="STEP 1"
          description="Business Details"
          last={false}
          active={invoiceState.currentIndex == 0 ? true : false}
        />
        <Flow
          step="STEP 2"
          description="Customer Details"
          last={false}
          active={invoiceState.currentIndex == 1 ? true : false}
        />
        <Flow
          step="STEP 3"
          description="Invoice Details"
          last={true}
          active={invoiceState.currentIndex == 2 ? true : false}
        />
      </div>
      <h1 className="text-center font-bold text-2xl py-10 text-gray-800">
        {title}
      </h1>
      <div className="bg-[#e2e2e2] p-3 md:p-6 my-4">
        <div className="bg-[#f5f5f5] px-4 py-6 md:p-10 rounded-2xl gap-2">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};
