'use client';
import { Menu as Hamburger, X } from 'lucide-react';
import { useState } from 'react';
import { Menu } from './Menu';

export const MobileNav = ({
  section,
  setSection,
}: {
  section: string;
  setSection: (section: string) => void;
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleSection = (nav: string) => {
    setSection(nav);
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <>
      <div
        className="md:hidden"
        onClick={() => setShowMenu((showMenu) => !showMenu)}
      >
        {showMenu ? (
          <X className="text-black" />
        ) : (
          <Hamburger className="text-black" />
        )}
      </div>
      <div
        className={`absolute mt-10 overflow-hidden right-0 left-0 px-8 bg-slate-900 
        transition-all ease-in-out duration-300 ${
          showMenu ? 'h-screen py-2' : 'h-0'
        }`}
      >
        <Menu section={section} setSection={handleSection} />
      </div>
    </>
  );
};
