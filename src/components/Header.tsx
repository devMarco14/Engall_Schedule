import { Logo } from 'asstes/imgs';
import React from 'react';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="flex pb-1 pl-4 items-end h-12 bg-headerBackground">
        <img className="w-16" src={Logo} alt="logo" />
      </header>
      <Outlet />
    </>
  );
}

export default Header;
