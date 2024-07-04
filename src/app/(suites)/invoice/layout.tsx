import ModuleHeader from '@/app/_components/ModuleHeader';
import { InvoiceProvider } from '../context/invoice/invoice.provider';

const InvoiceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InvoiceProvider>
      <div className="bg-background grid md:px-6 px-3">
        <ModuleHeader />
        <div className="grid pt-24"> {children}</div>
      </div>
    </InvoiceProvider>
  );
};

export default InvoiceLayout;
