import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Path from 'routes/Path';
import { WEEK } from 'libs/utils/Constants';
import Dayslot from './components/Dayslot';
import useWeekList from './hooks/useWeekList';

function SchedulePage() {
  const { state, dispatch } = useWeekList();

  React.useEffect(() => {
    const foo = async (endPoint: string) => {
      try {
        const response = await axios.get(`http://localhost:8080/${endPoint}`);
        dispatch({ type: endPoint.toUpperCase(), payload: response.data });
      } catch (err) {
        throw new Error(err as string);
      }
    };
    WEEK.forEach((day: string) => foo(day));
  }, []);

  const weekListToDayslot = Object.keys(state).map((key: string) => {
    let result;
    if (state[key].length > 0) {
      result = <Dayslot day={key} timeList={state[key]} />;
    }
    return result;
  });

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
      <article className="flex flex-col justify-around relative md:flex-row md:min-h-[50vh] md:border md:border-solid md:border-gray-200 py-6 md:shadow-md md:bg-zinc-50 lg:px-4">
        <hr className="hidden md:block md:absolute md:top-12 md:z-0 md:w-[calc(100%-2rem)] md:border md:border-solid" />
        {weekListToDayslot}
      </article>
    </main>
  );
}

export default SchedulePage;
