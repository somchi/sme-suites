import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function ModuleHeader() {
  return (
    <div className="pt-6 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <div className="relative">
          <Image src="/logo-short.png" alt="logo" width={30} height={30} />
        </div>
        <span className="text-lg italic font-bold text-black">SMESuites</span>
      </div>
      <Link href="/" className="bg-gray-800 rounded-3xl p-1 cursor-pointer">
        <svg
          className="w-[25px] h-[25px] fill-current text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
            d="M6 18 18 6m0 12L6 6"
          />
        </svg>
      </Link>
    </div>
  );
}

export default ModuleHeader;
