import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
import Dayslot from './components/Dayslot';

function SchedulePage() {
  return (
    <main className="mx-7 bg-backgroundColor md:mx-0 lg:mx-7">
      <section className="flex justify-between w-full my-7">
        <h1 className="text-xl font-bold">Class schedule</h1>
        <Link
          to={Path.AddClassSchedule}
          className="rounded-md p-2.5 pt-2 px-3.5 bg-buttonColor text-white"
        >
          Add Class Schedule
        </Link>
      </section>
      <article className="flex flex-col md:flex-row justify-around relative md:border md:border-solid md:border-gray-200 py-6 md:shadow-md md:bg-zinc-50 lg:px-4">
        <hr className="hidden md:block md:absolute md:top-12 md:z-0 md:w-[calc(100%-2rem)] md:border md:border-solid" />
        <Dayslot day="Monday" />
        <Dayslot day="Tuesday" />
        <Dayslot day="Wednesday" />
        <Dayslot day="Thursday" />
        <Dayslot day="Friday" />
        <Dayslot day="Saturday" />
        <Dayslot day="Sunday" />
      </article>
    </main>
  );
}

export default SchedulePage;
