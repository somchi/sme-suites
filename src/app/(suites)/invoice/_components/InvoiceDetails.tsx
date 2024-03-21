import { useContext, useMemo } from 'react';
import { NavSteps } from './NavSteps';
import { Input } from './Input';
import { Datepicker, Label } from 'flowbite-react';
import { ProdutBreakdown } from './ProductBreakdown';
import { InvoiceContext } from '../../context/invoice/invoice.context';
import { SET_INVOICE_DATA } from '../../context/invoice/inovice.reducer';
import { Dropzone } from '@/app/_components/Dropzone';

type Props = {
  previousStep: () => void;
};

const InvoiceDetails = ({ previousStep }: Props) => {
  const { invoiceDispatch, invoiceState } = useContext(InvoiceContext);

  const disabled = useMemo(() => {
    return true;
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
    console.log(e);
    if (files) {
      const businessLogo = files[0];
      invoiceDispatch({
        type: SET_INVOICE_DATA,
        payload: { ...data, businessLogo: businessLogo },
      });
      console.log('====f', businessLogo, JSON.stringify(businessLogo));
    }
  };
  console.log(data);
  return (
    <>
      <div className="grid">
        <form action="bussinessName">
          <div className="grid">
            <div>
              <p>01 - Invoice header</p>
              <hr className="mt-5 mb-8 border-gray-500" />
              <div className="grid md:flex w-full gap-4 py-[1rem]">
                <div className="grid w-full md:w-1/2">
                  <Label className="text-gray-300" htmlFor="invoiceNo">
                    Invoice no
                    <em className="text-red-500 font-bold italic ml-1 text-base">
                      *
                    </em>
                  </Label>
                  <Input
                    placeholder="INV001"
                    value={data.invoicNo ?? ''}
                    onChange={handleChange}
                    name={'invoiceNo'}
                  />
                </div>
                <div className="grid w-full md:w-1/2">
                  <Label className="text-gray-300" htmlFor="date">
                    Invoice date
                  </Label>

                  <Datepicker
                    labelClearButton="Date"
                    onChange={(e) => console.log(e)}
                    name="date"
                    value={
                      data.date ??
                      new Date().toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric',
                        day: 'numeric',
                      })
                    }
                  />
                  {/* <Input
                    onChange={handleChange}
                    placeholder="2024-02-8"
                    name="date"
                    value={data.date ?? ''}
                  /> */}
                </div>
              </div>
              <div className="grid md:flex w-full gap-4 py-[1rem]">
                <div className="grid w-full md:w-1/2">
                  <Label className="text-gray-300" htmlFor="Address">
                    Business Logo
                  </Label>
                  <Dropzone upload={handleUpload} />
                  {data.businessLogo ? (
                    <span>{data.businessLogo?.name}</span>
                  ) : null}
                  {/* <FileInput className="bg-theme-inputBg block" />
                  <input
                    className="w-full block border bg-theme-inputBg my-4 rounded-md outline-none text-white shadow-sm focus:ring-primary placeholder:text-gray-200 focus:outline-none duration-300 py-3 px-4 focus:border focus:border-blue-300"
                    type="file"
                    placeholder="Drag and Drop your files or Browse"
                  /> */}
                </div>
                <div className="grid w-full md:w-1/2">
                  <Label className="text-gray-300" htmlFor="dueDate">
                    Due Date
                  </Label>
                  <Input
                    placeholder="Due Date"
                    value={data.dueDate ?? ''}
                    onChange={handleChange}
                    name="dueDate"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <ProdutBreakdown />
          </div>

          <div className="grid">
            <p className="pt-8 pb-6">05 - Others </p>
            <hr className=" mb-8 border-gray-500" />
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 py-[1rem]">
              <div>
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
              <div>
                <Label className="text-gray-300" htmlFor="">
                  Note
                </Label>
                <textarea
                  className="w-full block border bg-theme-inputBg my-4 rounded-md border-gray-200 outline-none text-white shadow-sm focus:ring-primary placeholder:text-gray-400 focus:outline-none text-base duration-300 py-3 px-4 focus:border focus:border-blue-300"
                  placeholder="Leave a note"
                  value={data.note ?? ''}
                  name="note"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* <div>
              <Label className="text-gray-300" htmlFor="City">
                Authorized signatory
              </Label>
              <input
                className="w-full lg:w-52 block border bg-theme-inputBg my-4 rounded-md border-gray-200 outline-none text-white shadow-sm focus:ring-primary placeholder:text-gray-400 focus:outline-none text-base duration-300 py-3 px-4 focus:border focus:border-blue-300"
                type="file"
              />
            </div> */}
          </div>
        </form>
      </div>
      <NavSteps
        previousComponent={previousStep}
        currentIndex={1}
        disable={disabled}
      />
    </>
  );
};

export default InvoiceDetails;
