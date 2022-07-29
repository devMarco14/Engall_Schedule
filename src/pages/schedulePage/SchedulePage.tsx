import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
import { getSchedulesAPI } from 'libs/api/schedule';
import { DAY_OF_WEEK } from 'libs/utils/Constants';
import Dayslot from './components/Dayslot';
import useWeekList from './hooks/useWeekList';

interface DayInfo {
  id: number;
  item: string;
}

function SchedulePage() {
  const { state, dispatch } = useWeekList();
  const [checkData, setCheckData] = useState(true);
  const onChangeCheckData = () => {
    setCheckData((prev) => !prev);
  };
  React.useEffect(() => {
    const getResponse = async (endPoint: string) => {
      try {
        const response = await getSchedulesAPI(endPoint);
        dispatch({ type: endPoint.toUpperCase(), payload: response });
      } catch (err) {
        throw new Error(err as string);
      }
    };
    Object.values(DAY_OF_WEEK).forEach(({ item }: DayInfo) =>
      getResponse(item),
    );
  }, []);

  const weekListToDayslot = Object.keys(state).map(
    (key: string, index: number) => {
      let result;
      if (state[key].length > 0) {
        result = (
          <Dayslot
            day={key}
            timeList={state[key]}
            onChangeCheckData={onChangeCheckData}
            key={`${key}_${index}`}
          />
        );
      }
      return result;
    },
  );

  return (
    <main className="mx-7 bg-backgroundColor md:mx-0 lg:mx-7">
      <section className="flex justify-between w-full my-7 px-7 lg:px-0">
        <h1 className="text-xl font-bold">Class schedule</h1>
        <Link
          to={Path.AddClassSchedule}
          className="flex jsutify-center items-center rounded-md p-2.5 pt-2 px-3.5 bg-buttonColor text-center text-white leading-5"
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
