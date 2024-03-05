"use client";
import BusinessDetails from "@/components/BusinessDetails";
import CustomerDetails from "@/components/CustomerDetails";
import InvoiceDetails from "@/components/InvoiceDetails";
import Footer from "@/components/Footer";
import { useState } from "react";
import ToggleNavigation from "@/components/ToggleNavigation";

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextComponent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const previousComponent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const renderComponent = () => {
    switch (currentIndex) {
      case 0:
        return <BusinessDetails nextComponent={nextComponent} />;
      case 1:
        return (
          <CustomerDetails
            nextComponent={nextComponent}
            previousComponent={previousComponent}
          />
        );
      case 2:
        return (
          <InvoiceDetails
            nextComponent={nextComponent}
            previousComponent={previousComponent}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-[90%] mx-auto">
      <ToggleNavigation />
      {/* <div className="pt-6 flex items-center justify-between">
        <SupabaseLogo />
        <span className="bg-gray-800 rounded-3xl p-1">
          <svg
            className="w-[25px] h-[25px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.7"
              d="M6 18 18 6m0 12L6 6"
            />
          </svg>
        </span>
      </div> */}

      <div className="pt-[100px] text-balance w-[80%] mx-auto">
        <h1 className="font-bold text-[27px] text-center">
          Create fast and professional Invoice in few steps
        </h1>
        <p className="text-[16px] font-normal text-center py-6">
          Generate your free and customizable invoice with out invoice generator
        </p>

        <div className="container flex items-center justify-center gap-10 mt-8">
          <div>
            <div className="flex items-center gap-10">
              <div className="border-white w-[45px] h-[45px] border  rounded-3xl flex items-center justify-center p-1">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3. org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"
                  />
                </svg>
              </div>
              <div className="w-[100px] border-2 bg-gray-900"></div>
            </div>
            <p className="py-4 text-[14px] text-gray-400">STEP 1</p>
            <h3 className="text-[16px]">Description</h3>
          </div>

          <div>
            <div className="flex items-center gap-10">
              <div className="border-white w-[45px] h-[45px] border  rounded-3xl flex items-center justify-center p-1">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M6 14h2m3 0h5M3 7v10c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1Z"
                  />
                </svg>
              </div>
              <div className="w-[100px] border-2 bg-gray-900"></div>
            </div>
            <p className="py-4 text-[14px] text-gray-400">STEP 2</p>
            <h3 className="text-[16px]">Customer's Details</h3>
          </div>

          <div>
            <div className="">
              <div className="border-white w-[45px] h-[45px] border rounded-3xl flex items-center justify-center p-1">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16c0-.6.4-1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <p className="py-4 text-gray-400 text-[14px]">STEP 3</p>
            <h3 className="text-[16px]">Invoice's Details</h3>
          </div>
        </div>
        <div>{renderComponent()}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
