import Image from 'next/image';
import IMAGE from '../../../../public/banner.png';
import { Button } from 'flowbite-react';
import { buttonTheme } from '@/app/asset/theme';

export const Banner = () => {
  return (
    <section className="grid md:flex p-4 md:items-center md:gap-x-10">
      <div className="flex flex-col w-full md:w-1/2 gap-y-12">
        <h1 className="font-semibold md:text-start text-center text-5xl">
          Collection of Simplified business tools your business needs to grow
        </h1>
        <h2 className="text-2xl md:text-start text-center text-theme-text">
          Effortlessly create and send receipts and invoices, track orders, and
          manage business relationships all in one place. Perfect for
          contractors, small business owners, and online vendors.
        </h2>
        <Button theme={buttonTheme} color="primary" className="w-60 py-2">
          Start for free
        </Button>
      </div>
      <div className="w-full md:w-1/2 md:mt-0 mt-4">
        <Image src={IMAGE} alt="smesuites" />
      </div>
    </section>
  );
};
