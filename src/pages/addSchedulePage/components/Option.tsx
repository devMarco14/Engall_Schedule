/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

interface OptionProps {
  children?: number | string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}

function Option({ children, onClick }: OptionProps) {
  return (
    <li
      onClick={onClick}
      className="border-b border-x border-solid border-gray-200 p-4 hover:cursor-pointer hover:bg-gray-300 first:border"
    >
      {children}
    </li>
  );
}

export default Option;
