import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Path from 'routes/Path';
import Dayslot from './components/Dayslot';

const reducer = (state: any, action: any) => {
  let result: any;
  switch (action.type) {
    case 'MONDAY':
      result = {
        ...state,
        Monday: state.Monday.slice(state.Monday.length).concat(action.payload),
      };
      break;
    case 'TUESDAY':
      result = {
        ...state,
        Tuesday: state.Tuesday.slice(state.Tuesday.length).concat(
          action.payload,
        ),
      };
      break;
    case 'WEDNESDAY':
      result = {
        ...state,
        Wednesday: state.Wednesday.slice(state.Wednesday.length).concat(
          action.payload,
        ),
      };
      break;
    case 'THURSDAY':
      result = {
        ...state,
        Thursday: state.Thursday.slice(state.Thursday.length).concat(
          action.payload,
        ),
      };
      break;
    case 'FRIDAY':
      result = {
        ...state,
        Friday: state.Friday.slice(state.Friday.length).concat(action.payload),
      };
      break;
    case 'SATURDAY':
      result = {
        ...state,
        Saturday: state.Saturday.slice(state.Saturday.length).concat(
          action.payload,
        ),
      };
      break;
    case 'SUNDAY':
      result = {
        ...state,
        Sunday: state.Sunday.slice(state.Sunday.length).concat(action.payload),
      };
      break;
    default:
      throw new Error('wrong type');
  }
  return result;
};

const weekStates: { [key: string]: string[] } = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
};

const week = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function SchedulePage() {
  const [state, dispatch] = React.useReducer(reducer, weekStates);

  React.useEffect(() => {
    const foo = async (endPoint: string) => {
      try {
        const response = await axios.get(`http://localhost:8080/${endPoint}`);
        // console.log(response.data);
        dispatch({ type: endPoint.toUpperCase(), payload: response.data });
      } catch (err) {
        throw new Error(err as string);
      }
    };
    week.forEach((day: string) => foo(day));
  }, []);

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  const bar = Object.keys(state).map((key: string, index: number) => {
    let result;
    if (state[key].length > 0) {
      result = <Dayslot day={key} times={state[key]} />;
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
        {/* <Dayslot day="Monday" />
        <Dayslot day="Tuesday" />
        <Dayslot day="Wednesday" />
        <Dayslot day="Thursday" />
        <Dayslot day="Friday" />
        <Dayslot day="Saturday" />
        <Dayslot day="Sunday" /> */}
        {bar}
      </article>
    </main>
  );
}

export default SchedulePage;
