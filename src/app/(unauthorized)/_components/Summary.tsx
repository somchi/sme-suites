import { Button } from 'flowbite-react';
import Link from 'next/link';

export const Summary = () => {
  return (
    // <section className="bg-theme-secondary">
    <div className="grid mx-auto py-20 bg-theme-primary/60">
      <div className="grid justify-self-center md:w-1/2 gap-6">
        <h1 className="font-semibold text-3xl text-white text-center">
          Get started today
        </h1>
        <h2 className="text-white text-center text-2xl font-medium">
          It is time to elevate your business and deliver an exceptional
          experience for to customers.
        </h2>
      </div>
      <div className="grid gap-6 justify-items-center mt-10">
        <div className="grid sm:flex gap-6 md:mb-0 mb-4">
          <Button className="border text-lg bg-white text-theme-prmary font-medium hover:bg-white">
            <Link href={'#tools'}> Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
    // </section>
  );
};
