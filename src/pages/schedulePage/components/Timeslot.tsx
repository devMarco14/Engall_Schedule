import React from 'react';
import { DayObject } from 'types/customTypes';
import { deleteScheduleAPI } from 'libs/api/schedule';

interface TimeslotProps {
  isSpread: boolean;
  day: string;
  dayObject: DayObject;
}

export default function Timeslot({ isSpread, day, dayObject }: TimeslotProps) {
  const [needHidden, setNeedHidden] = React.useState<boolean>(false);
  const [isResized, setIsResized] = React.useState<boolean>(false);
  const { startTime, endTime, id } = dayObject;

  React.useEffect(() => {
    let delayedStyleChange: ReturnType<typeof setTimeout>;
    if (isSpread) {
      delayedStyleChange = setTimeout(() => setNeedHidden(true), 100);
    } else {
      delayedStyleChange = setTimeout(() => setNeedHidden(false), 300);
    }
    return () => clearTimeout(delayedStyleChange);
  }, [isSpread]);

  React.useEffect(() => {
    const changeResizeState = () => {
      setIsResized(!isResized);
    };
    window.addEventListener('resize', changeResizeState);
    return () => window.removeEventListener('resize', changeResizeState);
  }, [isResized]);

  const returnDynamicDisplay = () => {
    let result: string;
    if (window.innerWidth < 768) {
      if (needHidden) result = 'flex';
      else result = 'none';
    } else {
      result = 'flex';
    }
    return result;
  };

  const returnAmPm = (flag: boolean) => {
    return flag ? 'AM' : 'PM';
  };

  function handleClick() {
    if (window.confirm('Are you sure to cancel the schedule?')) {
      const dayId = typeof id === 'number' ? String(id) : id;
      deleteScheduleAPI(day, dayId);
      window.alert('Schedule canceled!');
    }
  }

  return (
    <section
      className={`items-start rounded-md p-1 bg-gray-200 transition-all duration-300 hover:shadow-lg md:mb-5 md:animate-none ${
        isSpread
          ? 'animate-[spreadTimeslot_0.3s_ease-in-out_forwards]'
          : 'animate-[foldingTimeslot_0.3s_ease-in-out_forwards]'
      }`}
      style={{
        display: returnDynamicDisplay(),
      }}
    >
      <p className="flex flex-wrap w-[calc(100%-1rem)] text-stone-500 text-base select-none">
        <span className="whitespace-nowrap">
          {startTime?.hour}:{startTime?.minute} {returnAmPm(startTime?.isAM)}
        </span>
        <span className="mx-1 md:mx-auto lg:mx-1">-</span>
        <span className="whitespace-nowrap">
          {endTime?.hour}:{endTime?.minute} {returnAmPm(endTime?.isAM)}
        </span>
      </p>
      <button
        type="button"
        className="flex justify-center items-center w-4 h-4 ml-1 rounded-full pb-1 bg-stone-400 font-bold text-stone-200"
        onClick={handleClick}
      >
        ×
      </button>
    </section>
  );
}
