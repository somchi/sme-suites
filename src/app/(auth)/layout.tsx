import Image from 'next/image';
import Link from 'next/link';
import { HOME } from '@/site-setting/navigation';
import { PRODUCT_NAME } from '@/app/_utils/contants';

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="grid relative h-full bg-gray-50">
      <main className="text-predefined-body ">
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
          <Link href={HOME.href} className="relative mb-8">
            <Image
              className="mx-auto w-auto h-auto"
              src="/logo.png"
              alt="Buzthrive logo"
              height={100}
              width={100}
              priority
            />
          </Link>
          {children}
        </div>
      </main>
      <footer className="w-full bg-white fixed bottom-0 border-t h-16">
        <div className="md:flex md:flex-row-reverse md:py-4  px-6 py-5   items-center justify-between md:container mx-auto">
          <div className=" grid grid-cols-[1.2fr_1fr_.5fr]  md:grid-cols-[repeat(4_,_auto)] md:gap-6 gap-1 text-sm text-blue-600">
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
            <a href="">Help</a>
            <a
              className=" col-span-3 md:col-auto text-center md:text-left mt-6 md:mt-0 "
              href=""
            >
              English
              {/* work on dropdown */}
            </a>
          </div>
          <p className="text-sm text-gray-500 md:mt-0 mt-7 text-center">
            {`Copyright © ${new Date().getFullYear()} `}
            <strong className="text-theme-primary font-medium">
              {PRODUCT_NAME}
            </strong>
            . All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
