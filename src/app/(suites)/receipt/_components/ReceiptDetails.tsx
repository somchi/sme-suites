import { useContext, useEffect, useMemo } from 'react';
import { NavSteps } from './NavSteps';
import { Input } from '../../_components/Input';
import { Label, Select } from 'flowbite-react';
import { ProdutBreakdown } from './ProductBreakdown';
import { ReceiptContext } from '../../context/receipt/receipt.context';
import {
  SET_CURRENCY,
  SET_RECEIPT_DATA,
} from '../../context/receipt/receipt.reducer';
import { Dropzone } from '@/app/_components/Dropzone';
import { DatePicker } from '@/app/_components/ui/datepicker';
import Image from 'next/image';
import { CircleX } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { INVOICE_PREVIEW, RECEIPT_PREVIEW } from '@/site-setting/navigation';
import { Countries } from '@/app/_utils/currency';
import { format } from 'date-fns';

type Props = {
  previousStep: () => void;
};

const ReceiptDetails = ({ previousStep }: Props) => {
  const { receiptDispatch, receiptState } = useContext(ReceiptContext);
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    if (mounted && !receiptState.receipt.date) {
      const date = format(new Date(), 'MMM dd, yyyy');

      receiptDispatch({
        type: SET_RECEIPT_DATA,
        payload: {
          ...receiptState.receipt,
          date,
        },
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  const disabled = useMemo(() => {
    const product = receiptState.products[0];
    const copy: any = { ...product };
    delete copy['discount'];
    delete copy['amount'];
    const validate =
      Object.values(copy).includes('') || Object.values(copy).includes(0);

    if (!receiptState.receipt.receiptNo || !receiptState.receipt.date) {
      return true;
    }
    return false;
  }, [receiptState.products, receiptState.receipt]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const field = target.name;
    const value = target.value;
    receiptDispatch({
      type: SET_RECEIPT_DATA,
      payload: { ...receiptState.receipt, [field]: value },
    });
  };
  console.log(receiptState.receipt);
  const data = useMemo(() => {
    return receiptState.receipt;
  }, [receiptState.receipt]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const businessLogo = files[0];
      let reader: any = new FileReader();
      let base64String: any = '';
      if (!reader) return;

      reader.onload = function () {
        base64String = reader?.result;

        receiptDispatch({
          type: SET_RECEIPT_DATA,
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

        receiptDispatch({
          type: SET_RECEIPT_DATA,
          payload: { ...data, signature: base64String },
        });
      };
      reader.readAsDataURL(signature);
    }
  };

  const handleDate = (date: any) => {
    receiptDispatch({
      type: SET_RECEIPT_DATA,
      payload: { ...data, date },
    });
  };

  const handleDueDate = (dueDate: any) => {
    receiptDispatch({
      type: SET_RECEIPT_DATA,
      payload: { ...data, dueDate },
    });
  };

  const removeLogo = () => {
    receiptDispatch({
      type: SET_RECEIPT_DATA,
      payload: { ...data, businessLogo: '' },
    });
  };

  const removeSignature = () => {
    receiptDispatch({
      type: SET_RECEIPT_DATA,
      payload: { ...data, signature: '' },
    });
  };

  const handleReceiptGeneration = (e: any) => {
    e.preventDefault();
    router.push(RECEIPT_PREVIEW.href);
  };
  const handleSetCurrency = (e: any) => {
    const value = e.target.value;

    receiptDispatch({ type: SET_CURRENCY, payload: JSON.parse(value) });
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
        <form onSubmit={handleReceiptGeneration}>
          <div className="grid">
            <div>
              <p>Receipt header</p>
              <hr className="mt-5 mb-8 border-gray-500" />
              <div className="grid md:flex w-full gap-4 items-center py-[1rem]">
                <div className="grid gap-1 w-full md:w-1/2">
                  <Label className="text-gray-300" htmlFor="receiptNo">
                    Receipt no
                    <em className="text-red-500 font-bold italic ml-1">*</em>
                  </Label>
                  <Input
                    placeholder="Receipt no."
                    value={data.receiptNo ?? ''}
                    onChange={handleChange}
                    name={'receiptNo'}
                  />
                </div>
                <div className="grid gap-1  w-full md:w-1/2">
                  <Label className="text-gray-300" htmlFor="date">
                    Receipt date
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
                  <Label className="text-gray-300" htmlFor="dueDate">
                    Due Date
                  </Label>
                  <DatePicker
                    date={data.dueDate ?? ''}
                    onSelect={handleDueDate}
                    placeholder="Due date"
                  />
                </div>
                <div className="grid gap-1 w-full md:w-1/2">
                  <Label className="text-gray-300" htmlFor="Address">
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
                  <Label className="text-gray-300" htmlFor="Address">
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
            <div className="grid gap-1 w-full md:w-1/2">
              <Label className="text-gray-300">Signature</Label>

              {data.signature ? (
                <div className="flex items-center gap-1 justify-center">
                  <div className=" border w-20 h-12 relative">
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
                  upload={handleSignUpload}
                  from="signature"
                  description="signature"
                />
              )}
            </div>
          </div>
          <NavSteps
            previousComponent={previousStep}
            currentIndex={2}
            disable={disabled}
            generateReceipt={handleReceiptGeneration}
          />
        </form>
      </div>
    </>
  );
};

export default ReceiptDetails;
