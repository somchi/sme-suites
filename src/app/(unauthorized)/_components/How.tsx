import { PUBLIC_INVOICE, PUBLIC_RECEIPT } from '@/site-settings/navigation';
import { CardWImage } from './CardImg';
import { LinkButton } from './LinkBtn';

export const HowItWorks = () => {
  return (
    <div
      id="how"
      className="grid max-w-[1400px] mx-auto px-4 mt-10 mb-20 justify-items-center"
    >
      <div className="grid md:w-1/2 gap-6 my-6">
        <div className="flex justify-center gap-2">
          <hr className="bg-theme-primary w-[2px] h-[24px]" />
          <h4 className="text-theme-primary font-semibold">How it works</h4>
        </div>
        <h1 className="font-semibold text-3xl text-center">
          Simplify Running Your Business
        </h1>
        <h2 className="text-gray-500 text-center text-lg">
          Streamline your operations, enhance efficiency, and focus on growth
          with tools designed to make managing your business easier than ever.
        </h2>
      </div>
      <div className="grid md:flex mt-4 gap-8">
        <CardWImage img="/invoice-receipt.png">
          <div className="flex flex-col py-4 px-3 w-full md:w-2/3">
            <div className="flex flex-col leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Generate receipt/invoice for customers
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Impress clients with polished receipts and invoices that reflect
                your professionalism—quick, simple, and reliable.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <LinkButton
                href={PUBLIC_INVOICE.href}
                text="Invoice"
                fill="white"
                className="bg-theme-primary text-white"
                disabled={false}
              />
              <LinkButton
                href={PUBLIC_RECEIPT.href}
                text="Receipt"
                fill="#3961f1"
                className="border border-theme-primary text-theme-primary"
                disabled={false}
              />
            </div>
          </div>
        </CardWImage>
        <CardWImage img="/image.png">
          <div className="flex flex-col py-4 px-3 w-full md:w-2/3">
            <div className="flex flex-col leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Do more
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Manage Customers, Invoice, Receipt - Let customers keep track of
                their order and many more
              </p>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <LinkButton
                href={''}
                text="Coming soon"
                fill="white"
                className="text-white bg-theme-primary/60"
                disabled={true}
              />
            </div>
          </div>
        </CardWImage>
      </div>
    </div>
  );
};
