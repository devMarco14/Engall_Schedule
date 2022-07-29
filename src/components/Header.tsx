import { Logo } from 'asstes/imgs';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="flex sticky top-0 pb-1 pl-4 items-end h-12 bg-headerBackground">
        <button
          className="w-16 cursor-pointer"
          type="button"
          onClick={() => {
            navigate('/');
          }}
        >
          <img className="w-full" src={Logo} alt="logo" />
        </button>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
