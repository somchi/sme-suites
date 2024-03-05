import React from "react";
import SupabaseLogo from "@/components/SupabaseLogo";
import Link from "next/link";

function ToggleNavigation() {
  return (
    <div className="pt-6 flex items-center justify-between">
      <SupabaseLogo />
      <Link href="/" className="bg-gray-800 rounded-3xl p-1 cursor-pointer">
        <svg
          className="w-[25px] h-[25px] fill-current text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.7"
            d="M6 18 18 6m0 12L6 6"
          />
        </svg>
      </Link>
    </div>
  );
}

export default ToggleNavigation;
