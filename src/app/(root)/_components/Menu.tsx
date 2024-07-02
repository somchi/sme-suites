'use client';

import React from 'react';
import { Separator } from '@/app/_components/ui/separator';
import { NAV_ITEMS } from '@/app/_utils/enums';
import { Button } from '@/app/_components/ui/button';

export const Menu = ({
  section,
  setSection,
}: {
  section: string;
  setSection: (section: string) => void;
}) => {
  const onClick = (section: string) => {
    const elem = document.getElementById(section);
    if (!elem) return;
    elem.scrollIntoView({ behavior: 'smooth' });
    setSection(section);
  };

  return (
    <div className="grid lg:flex items-center md:gap-10 gap-4 font-medium text-lg">
      <button
        className={`${
          section === NAV_ITEMS.About
            ? 'text-theme-primary'
            : 'md:text-black text-white'
        }`}
        onClick={() => onClick(NAV_ITEMS.About)}
      >
        About
      </button>
      <Separator className="md:hidden !bg-slate-700" />
      <button
        className={`${
          section === NAV_ITEMS.Tools
            ? 'text-theme-primary'
            : 'md:md:text-black text-white text-white'
        }`}
        onClick={() => onClick(NAV_ITEMS.Tools)}
      >
        Tools
      </button>
      <Separator className="md:hidden !bg-slate-700" />
      <button
        className={`${
          section === NAV_ITEMS.Coming
            ? 'text-theme-primary'
            : 'md:text-black text-white'
        }`}
        onClick={() => onClick(NAV_ITEMS.Coming)}
      >
        Coming Soon
      </button>
      <Separator className="md:hidden !bg-slate-700" />
      <button
        className={`${
          section === NAV_ITEMS.Contact
            ? 'text-theme-primary'
            : 'md:text-black text-white'
        }`}
        onClick={() => onClick(NAV_ITEMS.Contact)}
      >
        Contact us
      </button>
      <Separator className="md:hidden !bg-slate-700" />
      <Button variant="primary">
        <a href="/#tools">Get Started</a>
      </Button>
    </div>
  );
};
