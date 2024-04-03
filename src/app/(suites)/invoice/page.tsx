import { InvoiceFlow } from './_components/InvoiceFlow';

const Page = () => {
  return (
    <div className="grid px-1 md:px-3 md:px-6">
      <div className="flex flex-col text-balance w-full">
        <h1 className="font-bold text-[27px] text-center">
          Create fast and professional Invoice in few steps
        </h1>
        <p className="text-[16px] font-normal text-center py-6">
          Generate your free and customizable invoice with out invoice generator
        </p>
      </div>

      <InvoiceFlow />

      {/* <Footer /> */}
    </div>
  );
};

export default Page;
