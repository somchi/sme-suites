import { useContext, useMemo } from 'react';
import { NavSteps } from './NavSteps';
import { Label } from 'flowbite-react';
import { Input } from './Input';
import { InvoiceContext } from '../../context/invoice/invoice.context';
import { SET_BUSINESS_DATA } from '../../context/invoice/inovice.reducer';

type Props = {
  nextStep: () => void;
};

const BusinessDetails = ({ nextStep }: Props) => {
  const { invoiceDispatch, invoiceState } = useContext(InvoiceContext);

  const disabled = useMemo(() => {
    if (
      !invoiceState.business.name ||
      !invoiceState.business.phone ||
      !invoiceState.business.businessName
    ) {
      return true;
    }
    return false;
  }, [invoiceState.business]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const field = target.name;
    const value = target.value;
    invoiceDispatch({
      type: SET_BUSINESS_DATA,
      payload: { ...invoiceState.business, [field]: value },
    });
  };

  const data = useMemo(() => {
    return invoiceState.business;
  }, [invoiceState.business]);

  return (
    <>
      <div className="grid">
        <div className="grid">
          <h4>
            01 - Billing by{' '}
            <span className="text-gray-400 ">(Your details)</span>
          </h4>
          <hr className="mt-5 border-gray-500" />
          <form className="mt-2">
            <div className="grid md:flex w-full gap-4 py-[1rem]">
              <div className="grid w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="">
                  Your business name{' '}
                  <em className="text-red-500 font-bold italic ml-2">*</em>
                </Label>
                <Input
                  value={data.businessName}
                  onChange={handleChange}
                  name="businessName"
                  required={true}
                />
              </div>
              <div className="grid w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="">
                  Your name{' '}
                  <em className="text-red-500 font-bold italic ml-2">*</em>
                </Label>
                <Input
                  value={data.name}
                  onChange={handleChange}
                  name="name"
                  required={true}
                />
              </div>
            </div>

            <div className="grid md:flex w-full gap-4 py-[1rem]">
              <div className="grid w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="Email">
                  Your email{' '}
                </Label>
                <Input
                  inputType="email"
                  value={data.email ?? ''}
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div className="grid w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="Number">
                  Phone Number
                  <em className="text-red-500 font-bold italic ml-1">*</em>
                </Label>
                <Input
                  value={data.phone}
                  onChange={handleChange}
                  name="phone"
                  required={true}
                />
              </div>
            </div>

            <div className="grid md:flex w-full gap-4 py-[1rem]">
              <div className="grid w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="Address">
                  Address{' '}
                </Label>
                <Input
                  value={data.address ?? ''}
                  onChange={handleChange}
                  name="address"
                />
              </div>
              <div className="grid w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="State">
                  State
                </Label>
                <Input
                  value={data.state ?? ''}
                  onChange={handleChange}
                  name="state"
                />
              </div>
            </div>
            <div className="grid md:flex w-full gap-4 py-[1rem]">
              <div className="grid w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="City">
                  City
                </Label>
                <Input
                  value={data.city ?? ''}
                  onChange={handleChange}
                  name="city"
                />
              </div>
              <div className="grid w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="code">
                  Zip code
                </Label>
                <Input
                  value={data.zipCode ?? ''}
                  onChange={handleChange}
                  name="zipCode"
                />
              </div>
              {/* <div className="grid w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="City">
                  Currency
                </Label>
                <Input
                  value={data.city ?? ''}
                  onChange={handleChange}
                  name="city"
                />
              </div> */}
            </div>
          </form>
        </div>
        <div>
          <p className="pt-8">
            01 - Bank Details <span className="text-gray-400 ">(Optional)</span>
          </p>
          <hr className="mt-5 mb-8 border-gray-500" />
          <form action="">
            <div className="grid md:flex w-full gap-4 py-[1rem]">
              <div className="grid w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="Country">
                  Country
                </Label>
                <Input
                  value={data.country ?? ''}
                  onChange={handleChange}
                  name="country"
                />
              </div>
              <div className="grid w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="Bank">
                  Bank
                  <em
                    className="text-red-500 font-bold italic ml-1
                  "
                  >
                    *
                  </em>
                </Label>
                <Input
                  value={data.bank ?? ''}
                  onChange={handleChange}
                  name="bank"
                  required={true}
                />
              </div>
            </div>

            <div className="grid md:flex w-full gap-4 py-[1rem]">
              <div className="grid w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="Account">
                  Account Number
                  <em className="text-red-500 font-bold italic ml-1">*</em>
                </Label>
                <Input
                  value={data.accNumber ?? ''}
                  onChange={handleChange}
                  name="accNumber"
                  required={true}
                />
              </div>
              <div className="grid w-full md:w-1/2">
                <Label className="text-gray-300" htmlFor="AccountName">
                  Account holder name
                  <em className="text-red-500 font-bold italic ml-1">*</em>
                </Label>
                <Input
                  value={data.holderName ?? ''}
                  onChange={handleChange}
                  name="holderName"
                  required={true}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <NavSteps nextComponent={nextStep} currentIndex={0} disable={disabled} />
    </>
  );
};

export default BusinessDetails;
