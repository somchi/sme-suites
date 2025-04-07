import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import Image from 'next/image';
import { HOME } from '@/site-settings/navigation';
import { buttonTheme, linkTheme } from '../asset/theme';
import Link from 'next/link';

export const Menu = () => {
  return (
    <div className="flex flex-col items-center shadow">
      <header className="max-w-[1400px] justify-self-center sticky flex flex-col top-0 z-50 left-0  w-full transition-all ease-in-out duration-500 h-20 justify-between">
        <Navbar fluid>
          <NavbarBrand href={HOME.href}>
            <Image
              src="/logo.png"
              width={150}
              height={100}
              alt="SMESuites Logo"
            />
          </NavbarBrand>
          <div className="flex md:order-2">
            <Button theme={buttonTheme} color="primary">
              <Link href={'#tools'}>Get started</Link>
            </Button>
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <NavbarLink href="/" active theme={linkTheme}>
              Home
            </NavbarLink>
            <NavbarLink href="/#tools" theme={linkTheme}>
              Tools
            </NavbarLink>
            <NavbarLink href="/#how" theme={linkTheme}>
              How it works
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </header>
    </div>
  );
};
