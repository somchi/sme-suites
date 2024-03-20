import Footer from '@/app/_components/Footer';
import ModuleHeader from '@/app/_components/ModuleHeader';
import { InvoiceFlow } from './_components/InvoiceFlow';
import { InvoiceProvider } from '../context/invoice/invoice.provider';

const Page = () => {
  return (
    <InvoiceProvider>
      <div className="grid w-full px-3 md:px-6 mx-auto">
        <ModuleHeader />
        <div
          className="flex flex-col pt-[100px] 
      text-balance w-full md:w-[80%] mx-auto"
        >
          <h1 className="font-bold text-[27px] text-center">
            Create fast and professional Invoice in few steps
          </h1>
          <p className="text-[16px] font-normal text-center py-6">
            Generate your free and customizable invoice with out invoice
            generator
          </p>
          <InvoiceFlow />
        </div>
        {/* <Footer /> */}
      </div>
    </InvoiceProvider>
  );
};

export default Page;
