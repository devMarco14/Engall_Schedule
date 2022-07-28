import React from 'react';
import Timeslot from './Timeslot';

interface DayslotProps {
  day: string;
  times: any;
}

export default function Dayslot({ day, times }: DayslotProps) {
  const [isSpread, setSpread] = React.useState<boolean>(false);
  const bar = Object.values(times).map((timeObject: any, index: number) => {
    return <Timeslot isSpread={isSpread} timeObject={timeObject} />;
  });

  return (
    <article
      className={`flex flex-col items-center z-10 h-full mb-5 rounded-lg shadow-md px-2 py-3 bg-zinc-50 md:mb-0 md:rounded-none md:shadow-none md:py-0 md:bg-transparent ${
        isSpread
          ? 'animate-[spreadDayslot_1s_ease-in-out_forwards]'
          : 'animate-[foldingDayslot_1s_ease-in-out_backwards]'
      }`}
    >
      <section
        className={`flex justify-between items-center max-w-[175px] w-full transition-all duration-300 md:justify-center md:mb-6 ${
          isSpread ? 'mb-6' : 'mb-0'
        }`}
      >
        <h2 className="flex justify-between w-[calc(100%-1.5rem)] pb-1 font-bold text-lg md:justify-center">
          {day}
          <span className="inline-block md:hidden">({times.length})</span>
        </h2>
        <button
          type="button"
          className={`block rounded-full w-6 h-6 ml-1 pb-1 bg-stone-400 text-stone-200 transition-transform md:hidden ${
            isSpread ? 'rotate-180' : 'rotate-0'
          }`}
          onClick={() => setSpread(!isSpread)}
        >
          ▲
        </button>
      </section>
      {bar}
      {/* <Timeslot isSpread={isSpread} />
      <Timeslot isSpread={isSpread} />
      <Timeslot isSpread={isSpread} />
      <Timeslot isSpread={isSpread} />
      <Timeslot isSpread={isSpread} /> */}
    </article>
  );
}
