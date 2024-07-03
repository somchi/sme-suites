'use client';

import Image from 'next/image';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { MobileNav } from './MobileNav';
import { RootContext } from '../context/provider';
import { SET_SECTION } from '../context/reducer';
import { Menu } from './Menu';

export const NavBar = () => {
  const { state, dispatch } = useContext(RootContext);
  const [scrollY, setScrollY] = useState<boolean>(false);

  const scrollAnimation = () => {
    const header = document.getElementById('header');
    if (!header) return;
    if (window.scrollY === 0) {
      setScrollY(false);
    } else {
      setScrollY(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollAnimation);
    return () => {
      window.removeEventListener('scroll', scrollAnimation);
    };
  }, []);

  useEffect(() => {
    if (window) {
      const scrollY = window.scrollY;
      setScrollY(scrollY === 0 ? false : true);
    }
  }, []);

  const setSection = useCallback((nav: string) => {
    dispatch({ type: SET_SECTION, payload: nav });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const observerTabs = (observer: IntersectionObserver) => {
    const home = document.querySelector('#home');
    const about = document.querySelector('#about');
    const services = document.querySelector('#features');
    const portfolio = document.querySelector('#pricing');
    const contact = document.querySelector('#contact');

    if (home) observer.observe(home);
    if (about) observer.observe(about);
    if (services) observer.observe(services);
    if (portfolio) observer.observe(portfolio);
    if (contact) observer.observe(contact);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visibility = entry.isIntersecting;
        if (visibility) {
          setSection(entry.target.id);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );
    observerTabs(observer);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // flex justify-between md:items-center pb-2
  return (
    <header
      id="header"
      className="fixed flex items-center flex-col top-0 z-50 left-0 
      w-full transition-all ease-in-out duration-500 h-20 justify-between"
      style={{
        backgroundColor: !scrollY ? 'transparent' : '#e3e9ff',
      }}
    >
      <nav className="flex max-w-screen-2xl w-full relative items-center md:px-10 px-6 h-20 justify-between">
        <div className="relative">
          <Image src="/logo.png" alt="logo" width={150} height={60} />
        </div>
        <div className="md:flex hidden">
          <Menu section={state.section} setSection={(nav) => setSection(nav)} />
        </div>
        <div className="flex md:hidden gap-3">
          <MobileNav
            section={state.section}
            setSection={(nav) => setSection(nav)}
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
