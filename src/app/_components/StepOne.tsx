'use client';

import { FileInput, TextInput } from 'flowbite-react';
import { FormLabel } from './FormLabel';

export const StepOne = () => {
  return (
    <form className="w-full">
      <div className="grid md:flex gap-[2.375rem]">
        <div className="grid md:w-1/2 w-full bg-theme-bg rounded py-4">
          <h1 className="mx-3.5 rounded-full h-[20px] w-[20px] text-xs text-center text-theme-primary border border-theme-primary">
            1
          </h1>
          <div className="flex flex-col px-[3.75rem]">
            <div className="flex flex-col mb-10 gap-y-1">
              <h1 className="text-xl font-medium font-lora">Bill From:</h1>
              <h2 className="text-xl text-black/50">Your Business Details</h2>
            </div>
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="businessName" text="Business Name *" />
              </div>
              <TextInput
                id="businessName"
                placeholder="Business Name"
                required
                className="w-full"
              />
            </div>
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="fullName" text="Full Name *" />
              </div>
              <TextInput
                id="fullName"
                placeholder="Your full Name"
                required
                className="w-full"
              />
            </div>
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="phone" text="Phone Number *" />
              </div>
              <TextInput id="phone" placeholder="Pnone number" required />
            </div>
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="email" text="Email Address" />
              </div>
              <TextInput id="email" type="email" placeholder="Your email" />
            </div>
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="address" text="Address" />
              </div>
              <TextInput
                id="address"
                placeholder="Business address"
                required
                className="border-0! border-transparent!"
              />
            </div>
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="state" text="State" />
              </div>
              <TextInput id="state" placeholder="State" required />
            </div>
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="businessLogo" text="Business Logo" />
              </div>
              <FileInput
                id="businessLogo"
                helperText="A business logo is useful for authenticity"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 w-full bg-theme-bg rounded py-4">
          <h1 className="mx-3.5 rounded-full h-[20px] w-[20px] text-xs text-center text-theme-primary border border-theme-primary">
            2
          </h1>
          <div className="flex flex-col px-[3.75rem]">
            <div className="flex flex-col mb-10 gap-y-1">
              <h1 className="text-xl font-medium font-lora">Bill To:</h1>
              <h2 className="text-xl text-black/50">Your Customer Details</h2>
            </div>
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="customerName" text="Customer Name *" />
              </div>
              <TextInput
                id="customerName"
                placeholder="Customer Name"
                required
                className="w-full"
              />
            </div>
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="customerPhone" text="Phone Number*" />
              </div>
              <TextInput
                id="customerPhone"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="email" text="Email" />
              </div>
              <TextInput id="email" placeholder="Email Address" />
            </div>
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="address" text="Address" />
              </div>
              <TextInput id="address" placeholder="Customer Address" />
            </div>
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="customerState" text="State" />
              </div>
              <TextInput id="customerState" placeholder="Business Name" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full bg-theme-bg rounded py-4 mt-10">
        <h1 className="mx-3.5 rounded-full h-[20px] w-[20px] text-xs text-center text-theme-primary border border-theme-primary">
          3
        </h1>
        <div className="flex flex-col px-[3.75rem]">
          <div className="flex flex-col mb-10 gap-y-1">
            <h1 className="text-xl font-medium font-lora">Bill From:</h1>
            <h2 className="text-xl text-black/50">
              Your Business Bank Details
            </h2>
          </div>
        </div>
        <div className="grid md:flex w-full gap-[2.375rem] px-[3.75rem]">
          <div className="md:w-1/2 w-full">
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="bankName" text="Bank Name *" />
              </div>
              <TextInput id="bankName" placeholder="Bank Name" />
            </div>
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="accNumber" text="Account Number *" />
              </div>
              <TextInput id="accNumber" placeholder="Account Number" />
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="accName" text="Account Number *" />
              </div>
              <TextInput id="accName" placeholder="Account Name" />
            </div>
            <div className="grid gap-1 mb-[2.188rem]">
              <div className="mb-2 block">
                <FormLabel htmlFor="country" text="Country" />
              </div>
              <TextInput id="country" placeholder="Country" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="flex gap-1 items-center border text-center border-theme-danger rounded py-2.5 px-5 text-xl text-theme-danger">
          <strong className="text-sm">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="6.36401"
                y="20.5059"
                width="20"
                height="2"
                rx="1"
                transform="rotate(-45 6.36401 20.5059)"
                fill="#FF0000"
              />
              <rect
                x="20.5061"
                y="21.9199"
                width="20"
                height="2"
                rx="1"
                transform="rotate(-135 20.5061 21.9199)"
                fill="#FF0000"
              />
            </svg>
          </strong>
          Clear
        </button>
        <button className="border border-theme-primary bg-theme-primary rounded py-2.5 px-5 text-xl text-white font-medium">
          Next
        </button>
      </div>
    </form>
  );
};
