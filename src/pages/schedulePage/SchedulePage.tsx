import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
import Timeslot from './components/Timeslot';

function SchedulePage() {
  return (
    <main className="bg-backgroundColor lg:mx-7">
      <section className="flex justify-between w-full my-7 ">
        <h1 className="text-xl font-bold">Class schedule</h1>
        <Link
          to={Path.AddClassSchedule}
          className="rounded-md p-2.5 pt-2 px-3.5 bg-buttonColor text-white"
        >
          Add Class Schedule
        </Link>
      </section>
      <article className="flex justify-around relative h-[50vh] border border-solid border-gray-200 py-6 shadow-md bg-zinc-50 lg:px-4">
        <hr className="absolute top-12 z-0 w-[calc(100%-2rem)] border border-solid" />
        <Timeslot day="Monday" />
        <Timeslot day="Tuesday" />
        <Timeslot day="Wednesday" />
        <Timeslot day="Thursday" />
        <Timeslot day="Friday" />
        <Timeslot day="Saturday" />
        <Timeslot day="Sunday" />
      </article>
    </main>
  );
}

export default SchedulePage;
