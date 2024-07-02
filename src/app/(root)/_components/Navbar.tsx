'use client';

import Image from 'next/image';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button } from '../../_components/ui/button';
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

  return (
    <div className="flex justify-between md:items-center pb-2">
      <div className="relative">
        <Image src="/logo.png" alt="logo" width={150} height={60} />
      </div>
      <div className="md:flex hidden justify-end">
        <Menu section={state.section} setSection={(nav) => setSection(nav)} />
      </div>
      <div className="flex md:hidden gap-3">
        <MobileNav
          section={state.section}
          setSection={(nav) => setSection(nav)}
        />
      </div>
    </div>
  );
};

export default NavBar;
