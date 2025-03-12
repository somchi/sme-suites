import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white mt-[3.188rem]">{children}</div>;
};

export default Layout;
