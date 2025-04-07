'use client';

import { TextInput } from 'flowbite-react';
import { FormLabel } from '../../../_components/FormLabel';
import { CircleX, X } from 'lucide-react';
import { ChangeEvent, useMemo } from 'react';
import { useUnauthStore } from '@/app/providers/unauth-provider';
import { useParams } from 'next/navigation';
import { Dropzone } from '@/app/_components/Dropzone';
import { InvoiceStore } from '@/app/_libs/types/invoice';
import { ReceiptStore } from '@/app/_libs/types/receipt';
import Image from 'next/image';
import { TRANSACTION_TYPES } from '@/app/_libs/enums';
import { Business, Customer } from '@/app/_libs/types';
export const StepOne = () => {
  const store = useUnauthStore((state) => state);
  const { slug } = useParams<{ slug: string }>();

  const data: InvoiceStore | ReceiptStore = useMemo(() => {
    return slug === TRANSACTION_TYPES.INVOICE ? store.invoice : store.receipt;
  }, [slug, store.invoice, store.receipt]);

  const setState = useMemo(() => {
    return slug === TRANSACTION_TYPES.INVOICE
      ? store.setInvoce
      : store.setReceipt;
  }, [slug, store.setInvoce, store.setReceipt]);

  const handleNext = () => {
    store.setStep(store.step + 1);
  };

  const handleBusinessChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const field = e.target.id;
    setState({ business: { ...data.business, [field]: value } });
  };

  const handleCustomerChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const field = e.target.id;
    setState({ customer: { ...data.customer, [field]: value } });
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const businessLogo = files[0];
      const reader: FileReader = new FileReader();
      let base64String: string = '';
      if (!reader) return;

      reader.onload = function () {
        base64String = reader.result?.toString() ?? '';
        setState({
          business: { ...data.business, businessLogo: base64String },
        });
      };
      reader.readAsDataURL(businessLogo);
    }
  };

  const removeLogo = () => {
    setState({
      business: { ...data.business, businessLogo: '' },
    });
  };

  const handleClear = () => {
    setState({
      customer: {} as Customer,
      business: {} as Business,
    });
  };

  return (
    <form onSubmit={handleNext} className="w-full flex flex-col">
      <div className="grid md:flex gap-[2.375rem]">
        <div className="grid md:w-1/2 w-full bg-zinc-200 rounded-lg shadow py-4">
          <h1 className="mx-3.5 rounded-full h-[20px] w-[20px] text-xs text-center text-theme-primary border border-theme-primary">
            1
          </h1>
          <div className="flex flex-col px-[1.5rem] md:px-[2rem] mt-2">
            <div className="flex flex-col mb-8 gap-y-1">
              {/* <h1 className="text-xl font-medium font-lora">Bill From:</h1> */}
              <h2 className="text-gray-700 text-lg font-medium font-lora">
                Your Business Details
              </h2>
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="businessName" text="Business Name *" />
              </div>
              <TextInput
                id="businessName"
                placeholder="Business Name"
                required
                className="w-full"
                onChange={handleBusinessChange}
                value={data.business.businessName ?? ''}
              />
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="name" text="Full Name *" />
              </div>
              <TextInput
                id="name"
                placeholder="Your full Name"
                required
                className="w-full"
                onChange={handleBusinessChange}
                value={data.business.name ?? ''}
              />
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="phone" text="Phone Number *" />
              </div>
              <TextInput
                id="phone"
                placeholder="Pnone number"
                required
                onChange={handleBusinessChange}
                value={data.business.phone ?? ''}
              />
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="email" text="Email Address" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="Your email"
                onChange={handleBusinessChange}
                value={data.business.email ?? ''}
              />
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="address" text="Address *" />
              </div>
              <TextInput
                id="address"
                placeholder="Business address"
                required
                className="border-0! border-transparent!"
                onChange={handleBusinessChange}
                value={data.business.address ?? ''}
              />
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="state" text="State" />
              </div>
              <TextInput
                id="state"
                placeholder="State"
                onChange={handleBusinessChange}
                value={data.business.state ?? ''}
              />
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="businessLogo" text="Business Logo" />
              </div>
              {data.business.businessLogo ? (
                <div className="flex items-center gap-1 justify-center">
                  <div className="rounded-full border w-20 h-20 relative">
                    <Image
                      src={data.business.businessLogo}
                      alt="Uploaded"
                      className="rounded-full"
                      fill
                    />
                  </div>
                  <CircleX
                    size={14}
                    color="red"
                    onClick={removeLogo}
                    className="cursor-pointer"
                  />
                </div>
              ) : (
                <Dropzone
                  upload={handleUpload}
                  description={'business logo'}
                  from={'businessLogo'}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 w-full bg-zinc-200 rounded-lg shadow py-4">
          <h1 className="mx-3.5 rounded-full h-[20px] w-[20px] text-xs text-center text-theme-primary border border-theme-primary">
            2
          </h1>
          <div className="flex flex-col px-[1.5rem] md:px-[2rem] mt-2">
            <div className="flex flex-col mb-8 gap-y-1">
              {/* <h1 className="text-xl font-medium font-lora">Bill To:</h1> */}
              <h2 className="text-gray-700 text-lg font-medium font-lora">
                Your Customer Details
              </h2>
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="name" text="Customer Name *" />
              </div>
              <TextInput
                id="name"
                placeholder="Customer Name"
                required
                className="w-full"
                onChange={handleCustomerChange}
                value={data.customer.name ?? ''}
              />
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="phone" text="Phone Number*" />
              </div>
              <TextInput
                id="phone"
                placeholder="Phone Number"
                required
                value={data.customer.phone ?? ''}
                onChange={handleCustomerChange}
              />
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="email" text="Email" />
              </div>
              <TextInput
                id="email"
                placeholder="Email Address"
                value={data.customer.email ?? ''}
                onChange={handleCustomerChange}
              />
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="address" text="Address" />
              </div>
              <TextInput
                id="address"
                placeholder="Customer Address"
                value={data.customer.address ?? ''}
                onChange={handleCustomerChange}
              />
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="state" text="State" />
              </div>
              <TextInput
                id="state"
                placeholder="Customer state"
                value={data.customer.state ?? ''}
                onChange={handleCustomerChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full bg-zinc-200 rounded-lg shadow py-4 mt-10">
        <h1 className="mx-3.5 rounded-full h-[20px] w-[20px] text-xs text-center text-theme-primary border border-theme-primary">
          3
        </h1>
        <div className="flex flex-col px-[1.5rem] md:px-[2rem] mt-2">
          <div className="flex flex-col mb-8 gap-y-1">
            {/* <h1 className="text-xl font-medium font-lora">Bill From:</h1> */}
            <h2 className="text-gray-700 text-lg font-medium font-lora">
              Your Business Bank Details
            </h2>
          </div>
        </div>
        <div className="grid md:flex w-full gap-[2.375rem] px-[1.5rem] md:px-[2rem]">
          <div className="md:w-1/2 w-full">
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="bank" text="Bank Name" />
              </div>
              <TextInput
                id="bank"
                placeholder="Bank Name"
                value={data.business.bank ?? ''}
                onChange={handleBusinessChange}
              />
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="accNumber" text="Account Number" />
              </div>
              <TextInput
                id="accNumber"
                placeholder="Account Number"
                value={data.business.accNumber ?? ''}
                onChange={handleBusinessChange}
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="holderName" text="Account Name" />
              </div>
              <TextInput
                id="holderName"
                placeholder="Account Name"
                value={data.business.holderName ?? ''}
                onChange={handleBusinessChange}
              />
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="country" text="Country" />
              </div>
              <TextInput
                id="country"
                placeholder="Country"
                value={data.business.country ?? ''}
                onChange={handleBusinessChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        {Object.keys(data.business).length > 0 && (
          <button
            onClick={handleClear}
            className="flex gap-1 items-center border text-center border-theme-danger rounded py-2.5 px-5 text-xl text-theme-danger"
          >
            <strong className="text-sm">
              <X />
            </strong>
            Clear
          </button>
        )}
        <button
          // onClick={handleNext}
          type="submit"
          className="border border-theme-primary bg-theme-primary rounded py-2.5 px-5 text-xl text-white font-medium"
        >
          Next
        </button>
      </div>
    </form>
  );
};
