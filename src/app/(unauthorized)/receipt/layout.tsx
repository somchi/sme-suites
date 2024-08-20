import ModuleHeader from '@/app/_components/ModuleHeader';
import { ReceiptProvider } from '../context/receipt/receipt.provider';

const ReceiptLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReceiptProvider>
      <div className="grid md:px-6 px-3">
        <ModuleHeader />
        <div className="grid pt-24"> {children}</div>
      </div>
    </ReceiptProvider>
  );
};

export default ReceiptLayout;
