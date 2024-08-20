import { useContext, useEffect, useMemo } from 'react';
import { NavSteps } from './NavSteps';
import { Input } from '../../_components/Input';
import { Label, Select } from 'flowbite-react';
import { ProdutBreakdown } from './ProductBreakdown';
import { InvoiceContext } from '../../context/invoice/invoice.context';
import {
  SET_CURRENCY,
  SET_INVOICE_DATA,
} from '../../context/invoice/inovice.reducer';
import { Dropzone } from '@/app/_components/Dropzone';
import { DatePicker } from '@/app/_components/ui/datepicker';
import Image from 'next/image';
import { CircleX } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { INVOICE_PREVIEW } from '@/site-setting/navigation';
import { Countries } from '@/app/_utils/currency';
import { format } from 'date-fns';

type Props = {
  previousStep: () => void;
};

const InvoiceDetails = ({ previousStep }: Props) => {
  const { invoiceDispatch, invoiceState } = useContext(InvoiceContext);
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    if (mounted && !invoiceState.invoice.date) {
      const date = format(new Date(), 'MMM dd, yyyy');

      invoiceDispatch({
        type: SET_INVOICE_DATA,
        payload: {
          ...invoiceState.invoice,
          date,
        },
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  const disabled = useMemo(() => {
    const product = invoiceState.products[0];
    const copy: any = { ...product };
    delete copy['discount'];
    delete copy['amount'];
    const validate =
      Object.values(copy).includes('') || Object.values(copy).includes(0);

    if (!invoiceState.invoice.invoiceNo || !invoiceState.invoice.date) {
      return true;
    }
    return false;
  }, [invoiceState.products, invoiceState.invoice]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const field = target.name;
    const value = target.value;
    invoiceDispatch({
      type: SET_INVOICE_DATA,
      payload: { ...invoiceState.invoice, [field]: value },
    });
  };

  const data = useMemo(() => {
    return invoiceState.invoice;
  }, [invoiceState.invoice]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const businessLogo = files[0];
      let reader: any = new FileReader();
      let base64String: any = '';
      if (!reader) return;

      reader.onload = function () {
        base64String = reader?.result;

        invoiceDispatch({
          type: SET_INVOICE_DATA,
          payload: { ...data, businessLogo: base64String },
        });
      };
      reader.readAsDataURL(businessLogo);
    }
  };

  const handleSignUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const signature = files[0];
      let reader: any = new FileReader();
      let base64String: any = '';
      if (!reader) return;

      reader.onload = function () {
        base64String = reader?.result;

        invoiceDispatch({
          type: SET_INVOICE_DATA,
          payload: { ...data, signature: base64String },
        });
      };
      reader.readAsDataURL(signature);
    }
  };

  const handleDate = (date: any) => {
    invoiceDispatch({
      type: SET_INVOICE_DATA,
      payload: { ...data, date },
    });
  };

  const handleDueDate = (dueDate: any) => {
    invoiceDispatch({
      type: SET_INVOICE_DATA,
      payload: { ...data, dueDate },
    });
  };

  const removeLogo = () => {
    invoiceDispatch({
      type: SET_INVOICE_DATA,
      payload: { ...data, businessLogo: '' },
    });
  };

  const handleInvoiceGeneration = (e: any) => {
    e.preventDefault();
    router.push(INVOICE_PREVIEW.href);
  };
  const handleSetCurrency = (e: any) => {
    const value = e.target.value;

    invoiceDispatch({ type: SET_CURRENCY, payload: JSON.parse(value) });
  };

  return (
    <>
      {data.businessLogo ? (
        <div className="flex items-center gap-1 justify-center">
          <div className="rounded-full border w-20 h-20 relative">
            <Image
              src={data.businessLogo}
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
      ) : null}
      <div className="grid">
        <form onSubmit={handleInvoiceGeneration}>
          <div className="grid">
            <div>
              <p className="text-gray-900 font-medium">Invoice header</p>
              <hr className="mt-5 mb-8 border-gray-500" />
              <div className="grid md:flex w-full gap-4 items-center py-[1rem]">
                <div className="grid gap-1 w-full md:w-1/2">
                  <Label className="text-gray-800" htmlFor="invoiceNo">
                    Invoice no
                    <em className="text-red-500 font-bold italic ml-1">*</em>
                  </Label>
                  <Input
                    placeholder="Invoice no."
                    value={data.invoiceNo ?? ''}
                    onChange={handleChange}
                    name={'invoiceNo'}
                  />
                </div>
                <div className="grid gap-1  w-full md:w-1/2">
                  <Label className="text-gray-800" htmlFor="date">
                    Invoice date
                    <em className="text-red-500 font-bold italic ml-1">*</em>
                  </Label>
                  <DatePicker
                    date={data.date ?? new Date()}
                    onSelect={handleDate}
                    placeholder="Date"
                  />
                </div>
              </div>
              <div className="grid items-center md:flex w-full gap-4 py-[1rem]">
                <div className="grid gap-1 w-full md:w-1/2">
                  <Label className="text-gray-800" htmlFor="dueDate">
                    Due Date
                  </Label>
                  <DatePicker
                    date={data.dueDate ?? ''}
                    onSelect={handleDueDate}
                    placeholder="Due date"
                  />
                </div>
                <div className="grid gap-1 w-full md:w-1/2">
                  <Label className="text-gray-800" htmlFor="Address">
                    Currency
                  </Label>
                  <Select className="" onChange={handleSetCurrency}>
                    {Countries.map((item) => (
                      <option
                        value={JSON.stringify(item)}
                        selected={item.currency === 'NGN' ? true : false}
                      >
                        {item.country}- {item.symbol}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="grid items-center md:flex w-full gap-4 py-[1rem]">
                <div className="grid gap-1 w-full md:w-1/2">
                  <Label className="text-gray-800" htmlFor="Address">
                    Business Logo
                  </Label>
                  <Dropzone
                    upload={handleUpload}
                    from="logo"
                    description="business logo"
                  />
                  {data.businessLogo ? (
                    <span>{data.businessLogo?.name}</span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <ProdutBreakdown />
          </div>

          <div className="grid">
            <p className="pt-8 pb-3 text-gray-800 font-medium">Others </p>
            <hr className="mb-4 border-gray-500" />
            <div className="grid md:flex w-full gap-4 py-[1rem]">
              <div className="grid gap-1 w-full md:w-1/2">
                <Label className="text-gray-800" htmlFor="Email">
                  Terms & Condition
                </Label>
                <textarea
                  className="w-full block border bg-white my-4 rounded-md border-gray-200 outline-none text-gray-800 shadow-sm focus:ring-primary placeholder:text-gray-400 focus:outline-none text-base duration-300 py-3 px-4 focus:border focus:border-blue-300"
                  placeholder="Terms & Condition"
                  value={data.terms ?? ''}
                  name="terms"
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-1 w-full md:w-1/2">
                <Label className="text-gray-800" htmlFor="">
                  Note
                </Label>
                <textarea
                  className="w-full block border bg-white my-4 rounded-md border-gray-200 outline-none text-gray-800 shadow-sm focus:ring-primary placeholder:text-gray-400 focus:outline-none text-base duration-300 py-3 px-4 focus:border focus:border-blue-300"
                  placeholder="Note"
                  value={data.note ?? ''}
                  name="note"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid gap-1 w-full md:w-1/2">
              <Label className="text-gray-800">Signature</Label>
              <Dropzone
                upload={handleSignUpload}
                from="signature"
                description="signature"
              />
              {data.signature ? (
                <span className="text-gray-800">{data.signature?.name}</span>
              ) : null}
            </div>
          </div>
          <NavSteps
            previousComponent={previousStep}
            currentIndex={2}
            disable={disabled}
            generateInvoice={handleInvoiceGeneration}
          />
        </form>
      </div>
    </>
  );
};

export default InvoiceDetails;
