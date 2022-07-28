import React from 'react';

export default function Timeslot({ day }: { day: string }) {
  const [isSpread, setSpread] = React.useState<boolean>(false);
  return (
    <article className="flex flex-col items-center z-10 h-full mb-5 rounded-lg shadow-md px-2 py-3 bg-zinc-50 md:mb-0 md:rounded-none md:shadow-none md:py-0 md:bg-transparent">
      <section
        className={`flex justify-between items-center max-w-[175px] w-full md:mb-6 ${
          isSpread ? 'mb-6' : 'mb-0'
        }`}
      >
        <h2 className="flex justify-between w-[calc(100%-1.5rem)] pb-1 font-bold text-lg">
          {day}
          <span className="inline-block md:hidden">(9)</span>
        </h2>
        <button
          type="button"
          className={`block rounded-full w-6 h-6 ml-1 pb-1 bg-stone-400 text-stone-200 md:hidden transition-transform ${
            isSpread ? 'rotate-180' : 'rotate-0'
          }`}
          onClick={() => setSpread(!isSpread)}
        >
          ▲
        </button>
      </section>
      <section
        className={`${
          isSpread ? 'flex' : 'hidden'
        } items-start rounded-md p-1 bg-gray-200 hover:shadow-lg md:flex`}
      >
        <p className="flex flex-wrap w-[calc(100%-1rem)] text-stone-500 select-none text-base">
          <span className="whitespace-nowrap">10:00 AM</span>
          <span className="mx-1 md:mx-auto lg:mx-1">-</span>
          <span className="whitespace-nowrap">10:40 AM</span>
        </p>
        <button
          type="button"
          className="flex justify-center items-center w-4 h-4 ml-1 rounded-full pb-1 bg-stone-400 font-bold text-stone-200"
        >
          ×
        </button>
      </section>
    </article>
  );
}
