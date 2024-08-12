'use client';

import BusinessDetails from '@/app/(suites)/receipt/_components/BusinessDetails';
import CustomerDetails from '@/app/(suites)/receipt/_components/CustomerDetails';
import ReceiptDetails from '@/app/(suites)/receipt/_components/ReceiptDetails';
import { TITLES } from '@/app/_utils/enums';
import { useContext, useState } from 'react';
import { Flow } from '../../_components/Flow';
import { ReceiptContext } from '../../context/receipt/receipt.context';
import { SET_INDEX } from '../../context/receipt/receipt.reducer';

export const ReceiptFlow = () => {
  const [title, setTitle] = useState<string>(TITLES.Business);
  const { receiptState, receiptDispatch } = useContext(ReceiptContext);

  const nextComponent = () => {
    const index = receiptState.currentIndex + 1;
    receiptDispatch({ type: SET_INDEX, payload: index % 3 });

    handleTitle(index);
  };

  const previousComponent = () => {
    const index = receiptState.currentIndex - 1;
    handleTitle(index);
    receiptDispatch({ type: SET_INDEX, payload: (index + 3) % 3 });
  };

  const handleTitle = (index: number) => {
    setTitle(
      index === 0
        ? TITLES.Business
        : index === 1
        ? TITLES.Customer
        : TITLES.Receipt
    );
  };

  const renderComponent = () => {
    switch (receiptState.currentIndex) {
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
        return <ReceiptDetails previousStep={previousComponent} />;
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
          active={receiptState.currentIndex == 0 ? true : false}
        />
        <Flow
          step="STEP 2"
          description="Customer Details"
          last={false}
          active={receiptState.currentIndex == 1 ? true : false}
        />
        <Flow
          step="STEP 3"
          description="Receipt Details"
          last={true}
          active={receiptState.currentIndex == 2 ? true : false}
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
