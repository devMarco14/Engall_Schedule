import React from 'react';

export default function Timeslot({ day }: { day: string }) {
  return (
    <article className="flex flex-col items-center z-10 h-full px-2">
      <h2 className="mb-6 font-bold text-lg">{day}</h2>
      <section className="flex items-start rounded-md p-1 bg-gray-200 hover:shadow-lg">
        <p className="flex flex-wrap w-[calc(100%-1rem)] text-stone-500 select-none text-base">
          <span className="whitespace-nowrap">10:00 AM</span>
          <span className="mx-auto lg:mx-1">-</span>
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
