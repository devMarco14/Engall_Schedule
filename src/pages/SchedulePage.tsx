import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';

function SchedulePage() {
  return (
    <main className="lg:mx-7 bg-backgroundColor">
      <section className="flex justify-between w-full my-7 ">
        <h1 className="text-xl font-bold">Class schedule</h1>
        <Link
          to={Path.AddClassSchedule}
          className="rounded-md p-2.5 pt-2 px-3.5 bg-buttonColor text-white"
        >
          Add Class Schedule
        </Link>
      </section>
      <article className="flex justify-around relative h-[50vh] border border-solid border-gray-200 px-4 py-6 shadow-md bg-zinc-50">
        <hr className="absolute w-[calc(100%-2rem)] border border-solid top-10" />
        <article className="flex flex-col items-center h-full px-2">
          <h2 className="mb-6 font-bold">Monday</h2>
          <section className="flex items-start rounded-md p-1 bg-gray-200 hover:shadow-lg">
            <div className="">
              <p className="w-max text-stone-500 select-none text-base">
                10:00 AM -
              </p>
              <p className="w-max text-stone-500 select-none text-base">
                10:40 AM
              </p>
            </div>
            <button
              type="button"
              className="flex justify-center items-center w-4 h-4 ml-1 rounded-full pb-1 bg-stone-400 font-bold text-stone-200"
            >
              ×
            </button>
          </section>
        </article>
        <article className="flex flex-col items-center h-full px-2">
          <h2 className="mb-6 font-bold">Monday</h2>
          <section className="flex items-start rounded-md p-1 bg-gray-200 hover:shadow-lg">
            <div className="">
              <p className="w-max text-stone-500 select-none text-base">
                10:00 AM -
              </p>
              <p className="w-max text-stone-500 select-none text-base">
                10:40 AM
              </p>
            </div>
            <button
              type="button"
              className="flex justify-center items-center w-4 h-4 ml-1 rounded-full pb-1 bg-stone-400 font-bold text-stone-200"
            >
              ×
            </button>
          </section>
        </article>
        <article className="flex flex-col items-center h-full px-2">
          <h2 className="mb-6 font-bold">Monday</h2>
          <section className="flex items-start rounded-md p-1 bg-gray-200 hover:shadow-lg">
            <div className="">
              <p className="w-max text-stone-500 select-none text-base">
                10:00 AM -
              </p>
              <p className="w-max text-stone-500 select-none text-base">
                10:40 AM
              </p>
            </div>
            <button
              type="button"
              className="flex justify-center items-center w-4 h-4 ml-1 rounded-full pb-1 bg-stone-400 font-bold text-stone-200"
            >
              ×
            </button>
          </section>
        </article>
        <article className="flex flex-col items-center h-full px-2">
          <h2 className="mb-6 font-bold">Monday</h2>
          <section className="flex items-start rounded-md p-1 bg-gray-200 hover:shadow-lg">
            <div className="">
              <p className="w-max text-stone-500 select-none text-base">
                10:00 AM -
              </p>
              <p className="w-max text-stone-500 select-none text-base">
                10:40 AM
              </p>
            </div>
            <button
              type="button"
              className="flex justify-center items-center w-4 h-4 ml-1 rounded-full pb-1 bg-stone-400 font-bold text-stone-200"
            >
              ×
            </button>
          </section>
        </article>
        <article className="flex flex-col items-center h-full px-2">
          <h2 className="mb-6 font-bold">Monday</h2>
          <section className="flex items-start rounded-md p-1 bg-gray-200 hover:shadow-lg">
            <div className="">
              <p className="w-max text-stone-500 select-none text-base">
                10:00 AM -
              </p>
              <p className="w-max text-stone-500 select-none text-base">
                10:40 AM
              </p>
            </div>
            <button
              type="button"
              className="flex justify-center items-center w-4 h-4 ml-1 rounded-full pb-1 bg-stone-400 font-bold text-stone-200"
            >
              ×
            </button>
          </section>
        </article>
        <article className="flex flex-col items-center h-full px-2">
          <h2 className="mb-6 font-bold">Monday</h2>
          <section className="flex items-start rounded-md p-1 bg-gray-200 hover:shadow-lg">
            <div className="">
              <p className="w-max text-stone-500 select-none text-base">
                10:00 AM -
              </p>
              <p className="w-max text-stone-500 select-none text-base">
                10:40 AM
              </p>
            </div>
            <button
              type="button"
              className="flex justify-center items-center w-4 h-4 ml-1 rounded-full pb-1 bg-stone-400 font-bold text-stone-200"
            >
              ×
            </button>
          </section>
        </article>
        <article className="flex flex-col items-center h-full px-2">
          <h2 className="mb-6 font-bold">Monday</h2>
          <section className="flex items-start rounded-md p-1 bg-gray-200 hover:shadow-lg">
            <div className="">
              <p className="w-max text-stone-500 select-none text-base">
                10:00 AM -
              </p>
              <p className="w-max text-stone-500 select-none text-base">
                10:40 AM
              </p>
            </div>
            <button
              type="button"
              className="flex justify-center items-center w-4 h-4 ml-1 rounded-full pb-1 bg-stone-400 font-bold text-stone-200"
            >
              ×
            </button>
          </section>
        </article>
      </article>
    </main>
  );
}

export default SchedulePage;
