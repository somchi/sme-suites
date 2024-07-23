import { useContext, useMemo } from 'react';
import { NavSteps } from './NavSteps';
import { Label } from 'flowbite-react';
import { Input } from '../../_components/Input';
import { ReceiptContext } from '../../context/receipt/receipt.context';
import { SET_CUSTOMER_DATA } from '../../context/receipt/receipt.reducer';

type Props = {
  previousStep: () => void;
  nextStep: () => void;
};

const CustomerDetails = ({ previousStep, nextStep }: Props) => {
  const { receiptDispatch, receiptState } = useContext(ReceiptContext);

  const disabled = useMemo(() => {
    if (!receiptState.customer.name || !receiptState.customer.phone) {
      return true;
    }
    return false;
  }, [receiptState.customer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const field = target.name;
    const value = target.value;
    receiptDispatch({
      type: SET_CUSTOMER_DATA,
      payload: { ...receiptState.customer, [field]: value },
    });
  };

  const data = useMemo(() => {
    return receiptState.customer;
  }, [receiptState.customer]);

  return (
    <>
      <div className="grid">
        <h4>
          01 - Billing to{' '}
          <span className="text-gray-400 ">
            (Customer details)
            <hr className="mt-5 mb-8 border-gray-500" />
          </span>
        </h4>
        <form>
          <div className="grid md:flex w-full gap-4 py-[1rem]">
            <div className="grid w-full md:w-1/2">
              <Label className="text-gray-300" htmlFor="">
                Client's name
                <em className="text-red-500 font-bold italic ml-1">*</em>
              </Label>
              <Input
                required={true}
                value={data.name}
                onChange={handleChange}
                name="name"
              />
            </div>
            <div className="grid w-full md:w-1/2">
              <Label className="text-gray-300" htmlFor="Email">
                Client's email
              </Label>
              <Input
                inputType="email"
                value={data.email ?? ''}
                onChange={handleChange}
                name="email"
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
              <Label className="text-gray-300" htmlFor="Number">
                Phone Number
                <em className="text-red-500 font-bold italic ml-2">*</em>
              </Label>
              <Input
                required={true}
                value={data.phone}
                onChange={handleChange}
                name="phone"
              />
            </div>
          </div>

          <div className="grid md:flex w-full gap-4 py-[1rem]">
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
          </div>

          <div className="w-full md:w-1/2 gap-4 py-[1rem]">
            <Label className="text-gray-300" htmlFor="code">
              Zip code
            </Label>
            <Input
              value={data.zipCode ?? ''}
              onChange={handleChange}
              name="zipCode"
            />
          </div>
        </form>
      </div>

      <NavSteps
        nextComponent={nextStep}
        previousComponent={previousStep}
        currentIndex={1}
        disable={disabled}
      />
    </>
  );
};

export default CustomerDetails;
