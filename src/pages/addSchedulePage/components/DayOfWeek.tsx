import React from 'react';
import { DAY_OF_WEEK } from 'libs/utils/Constants';

interface DayOfWeekProps {
  selectDay: string[];
  setSelectDay: (value: string[]) => void;
}

function DayOfWeek({ selectDay, setSelectDay }: DayOfWeekProps) {
  return (
    <div className="grid grid-cols-1 w-full sm:grid sm:grid-cols-2 md:flex md:w-[90%]">
      {DAY_OF_WEEK.map(({ id, item }) => (
        <label className="flex flex-1 cursor-pointer" htmlFor={item} key={id}>
          <div
            className={`flex justify-center w-full h-10 mb-1 md:mr-2 border border-solid 
          border-gray-300 ${
            selectDay.includes(item)
              ? 'bg-zinc-50 text-gray-200'
              : 'bg-zinc-50 border-gray-400'
          } font-normal items-center`}
          >
            {item}
          </div>
          <input
            className="hidden"
            type="checkbox"
            id={item}
            value={item}
            onChange={(e) => {
              if (selectDay.includes(e.target.value)) {
                setSelectDay(
                  selectDay.filter((value) => value !== e.target.value),
                );
              } else {
                setSelectDay([...selectDay, e.target.value]);
              }
            }}
          />
        </label>
      ))}
    </div>
  );
}

export default DayOfWeek;
