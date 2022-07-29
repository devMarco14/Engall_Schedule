import React from 'react';
import { AM_PM } from 'libs/utils/Constants';

interface AMPMProps {
  timeToggle: string;
  setTimeToggle: (value: string) => void;
}

function AMPM({ timeToggle, setTimeToggle }: AMPMProps) {
  return (
    <div className="flex md:w-[70%] items-center">
      {AM_PM.map(({ id, item, status }) => (
        <label
          className="flex justify-between w-[50%] mt-2 md:flex md:justify-center md:w-[8%] cursor-pointer items-center"
          htmlFor={item}
          key={id}
        >
          <div
            className={`flex w-full justify-center h-10 md:mr-1 border border-solid
           border-gray-300 font-normal text-[14px]
           ${
             timeToggle === item ? 'bg-gray-400 text-zinc-50' : ''
           } items-center`}
          >
            {item}
          </div>
          <input
            className="hidden"
            name="time"
            type="radio"
            id={item}
            value={item}
            checked={timeToggle === item}
            onChange={(e) => setTimeToggle(e.target.value)}
          />
        </label>
      ))}
    </div>
  );
}

export default AMPM;
