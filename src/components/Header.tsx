import { Logo } from 'asstes/imgs';
import React from 'react';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <div>
        <img src={Logo} alt="" />
      </div>
      <Outlet />
    </>
  );
}

export default Header;
