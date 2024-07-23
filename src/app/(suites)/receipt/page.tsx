import { ReceiptFlow } from './_components/ReceiptFlow';

const Receipt = () => {
  return (
    <div className="grid px-1 md:px-3 md:px-6">
      <div className="flex flex-col text-balance w-full">
        <h1 className="font-bold text-[27px] text-center">
          Create fast and professional Receipt in few steps
        </h1>
        <p className="text-[16px] font-normal text-center py-6">
          Generate your free and customizable receipt with our receipt generator
        </p>
      </div>

      <ReceiptFlow />
    </div>
  );
};

export default Receipt;
