/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

interface OptionProps {
  children?: number | string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}

function Option({ children, onClick }: OptionProps) {
  return (
    <li onClick={onClick} className="hover:cursor-pointer">
      {children}
    </li>
  );
}

export default Option;
