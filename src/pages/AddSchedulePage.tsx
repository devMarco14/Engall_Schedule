import React from 'react';
import { useNavigate } from 'react-router-dom';
import AMPM from './addschedulepage/components/AMPM';
import DayOfWeek from './addschedulepage/components/DayOfWeek';

function AddSchedulePage() {
  const [timeToggle, setTimeToggle] = React.useState<string>('');
  const [selectDay, setSelectDay] = React.useState<string[]>([]);

  const navigate = useNavigate();

  return (
    <section className="w-full px-10">
      <h1 className="my-10 text-xl font-bold">Add class schedule</h1>
      <article className="border border-solid border-gray-200 p-7 bg-zinc-50  text-[16px] font-bold">
        <div className="md:flex md:items-center">
          <div className="md:flex md:w-[10%] mb-2">Start time</div>
          <div className="flex mr-2">셀렉트박스 자리</div>
          <AMPM timeToggle={timeToggle} setTimeToggle={setTimeToggle} />
        </div>
        <div className="flex flex-wrap md:flex md:items-center md:mt-32">
          <div className="md:flex md:w-[10%] my-2">Repeat on</div>
          <DayOfWeek selectDay={selectDay} setSelectDay={setSelectDay} />
        </div>
      </article>
      <div className="md:w-full md:flex md:justify-end">
        <button
          className=" w-full mt-1 md:w-[15%] h-10 md:mx-9 md:mt-4 rounded-lg bg-buttonColor font-bold text-zinc-50"
          type="button"
          onClick={() => {
            navigate('/');
          }}
        >
          Save
        </button>
      </div>
    </section>
  );
}

export default AddSchedulePage;
