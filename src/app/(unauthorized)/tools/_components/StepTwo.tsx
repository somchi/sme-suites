'use client';

import { FormLabel } from '@/app/_components/FormLabel';
import { capitalizeFirst } from '@/app/_libs/helpers';
import { Datepicker, Select, Textarea, TextInput } from 'flowbite-react';
import { ProdutBreakdown } from './ProductBreakdown';
import { Dropzone } from '@/app/_components/Dropzone';
import { ArrowLeft, CircleX, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useUnauthStore } from '@/app/providers/unauth-provider';
import { ChangeEvent, FormEvent, useMemo } from 'react';
import { Invoice } from '@/app/_libs/types/invoice';
import { Receipt } from '@/app/_libs/types/receipt';
import { TRANSACTION_TYPES } from '@/app/_libs/enums';
import { Countries } from '@/app/_libs/currency';
import Image from 'next/image';

export const StepTwo = ({ slug }: { slug: string }) => {
  const store = useUnauthStore((state) => state);
  const router = useRouter();

  const data: Invoice | Receipt = useMemo(() => {
    return slug === TRANSACTION_TYPES.INVOICE
      ? store.invoice.invoice
      : store.receipt.receipt;
  }, [slug, store.invoice, store.receipt]);

  const setState = useMemo(() => {
    return slug === TRANSACTION_TYPES.INVOICE
      ? store.setInvoce
      : store.setReceipt;
  }, [slug, store.setInvoce, store.setReceipt]);

  const key = useMemo(() => {
    return slug === TRANSACTION_TYPES.INVOICE
      ? TRANSACTION_TYPES.INVOICE
      : TRANSACTION_TYPES.RECEIPT;
  }, [slug]);

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/tools/${slug}/preview`);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const field = e.target.id;
    setState({ [key]: { ...data, [field]: value } });
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
          [key]: { ...data, signature: base64String },
        });
      };
      reader.readAsDataURL(businessLogo);
    }
  };

  const handleSetCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setState({ currency: JSON.parse(value) });
  };

  const removeSignature = () => {
    setState({
      [key]: { ...data, signature: '' },
    });
  };

  const handleClear = () => {
    setState({
      [key]: {},
      products: [],
    });
  };
  const handleDateChange = (date: Date | null, field: string) => {
    setState({ [key]: { ...data, [field]: date ? date.toISOString() : '' } });
  };

  return (
    <form onSubmit={handleNext} className="w-full flex flex-col gap-10">
      <div className="flex flex-col bg-zinc-200 rounded-lg shadow pt-10 pb-6 px-[1.5rem] md:px-[3.75rem]">
        <h1 className="text-gray-700 text-lg font-semibold mb-10 font-lora">
          Your {capitalizeFirst(slug)} Details
        </h1>
        <div className="grid md:flex md:justify-between gap-[2.375rem]">
          <div className="w-full md:w-1/2">
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel
                  htmlFor="number"
                  text={`${capitalizeFirst(slug)} Number *`}
                />
              </div>
              <TextInput
                id="number"
                placeholder={`${capitalizeFirst(slug)} Number`}
                required
                className="w-full"
                value={data.number ?? ''}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel
                  htmlFor="date"
                  text={`${capitalizeFirst(slug)} Date *`}
                />
              </div>
              <Datepicker
                value={data.date ? new Date(data.date) : null}
                onChange={(date) => handleDateChange(date, 'date')}
                id="date"
                placeholder={`${capitalizeFirst(slug)} Date`}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {slug === TRANSACTION_TYPES.INVOICE && (
              <div className="grid gap-1 mb-[1.188rem]">
                <div className="mb-0 block">
                  <FormLabel htmlFor={`${slug}Due`} text={`Due Date *`} />
                </div>
                <Datepicker
                  value={data.dueDate ? new Date(data.dueDate) : null}
                  onChange={(date) => handleDateChange(date, 'dueDate')}
                  id="dueDate"
                  placeholder="Due Date"
                />
              </div>
            )}
            <div className="grid gap-1 mb-[1.188rem]">
              <div className="mb-0 block">
                <FormLabel htmlFor="currency" text="Currency" />
              </div>
              <Select
                className=""
                defaultValue={`${store[key].currency.country} - ${store[key].currency.symbol}`}
                onChange={handleSetCurrency}
              >
                {Countries.map((item) => (
                  <option
                    value={JSON.stringify(item) ?? ''}
                    // selected={item.currency === 'NGN' ? true : false}
                    key={item.country}
                  >
                    {item.country}- {item.symbol}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-zinc-200 rounded-lg shadow pt-10 pb-6 px-[1.5rem]  md:px-[3.75rem]">
        <h1 className="text-gray-700 text-lg font-semibold font-lora">
          Your Products Details
        </h1>
        <ProdutBreakdown />
        <div className="grid mt-10">
          <div className="grid md:flex md:justify-between gap-[2.375rem] w-full">
            <div className="grid gap-1 mb-[1.188rem] w-full md:w-1/2">
              <div className="mb-0 block">
                <FormLabel htmlFor="note" text="Note" />
              </div>
              <Textarea
                id="note"
                placeholder="Note"
                className="w-full"
                rows={3}
                value={data.note ?? ''}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-1 mb-[1.188rem] w-full md:w-1/2">
              <div className="mb-0 block">
                <FormLabel htmlFor="terms" text="Terms & Conditions" />
              </div>
              <Textarea
                id="terms"
                placeholder="Terms & Conditions"
                className="w-full"
                rows={3}
                value={data.terms ?? ''}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid gap-1 mb-[1.188rem] w-full md:w-1/2 pr-4">
            <div className="mb-0 block">
              <FormLabel htmlFor="signature" text="Signature" />
            </div>
            {data.signature ? (
              <div className="flex items-center gap-1">
                <div className="rounded border w-24 h-20 relative">
                  <Image src={data.signature} alt="Uploaded" fill />
                </div>
                <CircleX
                  size={14}
                  color="red"
                  onClick={removeSignature}
                  className="cursor-pointer"
                />
              </div>
            ) : (
              <Dropzone
                upload={handleUpload}
                description={'Signature'}
                from={'signature'}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <button
          onClick={() => store.setStep(store.step - 1)}
          className="flex gap-1 items-center bg-gray-900 text-center rounded py-2.5 px-5 text-xl text-white"
        >
          <strong className="text-sm">
            <ArrowLeft />
          </strong>
          Back
        </button>
        {(Object.values(data).some((itm) => itm !== '') ||
          store[key].products.length > 0) && (
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
          type="submit"
          className="border border-theme-primary bg-theme-primary rounded py-2.5 px-5 text-xl text-white font-medium"
        >
          Next
        </button>
      </div>
    </form>
  );
};
