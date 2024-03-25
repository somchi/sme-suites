import { useContext, useMemo } from 'react';
import { NavSteps } from './NavSteps';
import { Input } from './Input';
import { Label } from 'flowbite-react';
import { ProdutBreakdown } from './ProductBreakdown';
import { InvoiceContext } from '../../context/invoice/invoice.context';
import { SET_INVOICE_DATA } from '../../context/invoice/inovice.reducer';
import { Dropzone } from '@/app/_components/Dropzone';
import { DatePicker } from '@/app/_components/ui/datepicker';
import Image from 'next/image';
import { CircleX } from 'lucide-react';

type Props = {
  previousStep: () => void;
};

const InvoiceDetails = ({ previousStep }: Props) => {
  const { invoiceDispatch, invoiceState } = useContext(InvoiceContext);

  const disabled = useMemo(() => {
    const product = invoiceState.products[0];
    const validate =
      Object.values(product).includes('') || Object.values(product).includes(0);
    if (
      !invoiceState.invoice.invoiceNo ||
      (validate && product.discount !== 0)
    ) {
      return true;
    }
    return false;
  }, []);

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
      invoiceDispatch({
        type: SET_INVOICE_DATA,
        payload: { ...data, businessLogo: businessLogo },
      });
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

  const handleInvoiceGeneration = () => {};

  return (
    <>
      {data.businessLogo ? (
        <div className="flex items-center gap-1 justify-center">
          <div className="rounded-full border w-20 h-20 relative">
            <Image
              src={URL.createObjectURL(data.businessLogo)}
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
        <form action="bussinessName">
          <div className="grid">
            <div>
              <p>Invoice header</p>
              <hr className="mt-5 mb-8 border-gray-500" />
              <div className="grid md:flex w-full gap-4 items-center py-[1rem]">
                <div className="grid gap-1 w-full md:w-1/2">
                  <Label className="text-gray-300" htmlFor="invoiceNo">
                    Invoice no
                    <em className="text-red-500 font-bold italic ml-1">*</em>
                  </Label>
                  <Input
                    placeholder="INV001"
                    value={data.invoiceNo ?? ''}
                    onChange={handleChange}
                    name={'invoiceNo'}
                  />
                </div>
                <div className="grid gap-1  w-full md:w-1/2">
                  <Label className="text-gray-300" htmlFor="date">
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
                  <Label className="text-gray-300" htmlFor="Address">
                    Business Logo
                  </Label>
                  <Dropzone upload={handleUpload} />
                  {data.businessLogo ? (
                    <span>{data.businessLogo?.name}</span>
                  ) : null}
                </div>
                <div className="grid gap-1 w-full md:w-1/2">
                  <Label className="text-gray-300" htmlFor="dueDate">
                    Due Date
                  </Label>
                  <DatePicker
                    date={data.dueDate ?? ''}
                    onSelect={handleDueDate}
                    placeholder="Due date"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <ProdutBreakdown />
          </div>

          <div className="grid">
            <p className="pt-8 pb-3">Others </p>
            <hr className="mb-4 border-gray-500" />
            <div className="grid md:flex w-full gap-4 py-[1rem]">
              <div className="grid gap-1 w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="Email">
                  Terms & Condition
                </Label>
                <textarea
                  className="w-full block border bg-theme-inputBg my-4 rounded-md border-gray-200 outline-none text-white shadow-sm focus:ring-primary placeholder:text-gray-400 focus:outline-none text-base duration-300 py-3 px-4 focus:border focus:border-blue-300"
                  placeholder="Terms & Condition"
                  value={data.terms ?? ''}
                  name="terms"
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-1 w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="">
                  Note
                </Label>
                <textarea
                  className="w-full block border bg-theme-inputBg my-4 rounded-md border-gray-200 outline-none text-white shadow-sm focus:ring-primary placeholder:text-gray-400 focus:outline-none text-base duration-300 py-3 px-4 focus:border focus:border-blue-300"
                  placeholder="Note"
                  value={data.note ?? ''}
                  name="note"
                  onChange={handleChange}
                />
              </div>
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
