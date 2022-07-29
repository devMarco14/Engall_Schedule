import React from 'react';
import {
  StringIndexedObject,
  ActionType,
  ResponseSchedule,
} from 'types/customTypes';

interface WeekStates<T> extends StringIndexedObject<T> {
  Monday: T;
  Tuesday: T;
  Wednesday: T;
  Thursday: T;
  Friday: T;
  Saturday: T;
  Sunday: T;
}

const reducer = (
  state: StringIndexedObject<ResponseSchedule[]>,
  action: ActionType<ResponseSchedule[]>,
) => {
  let result: StringIndexedObject<ResponseSchedule[]>;
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

const weekStates: WeekStates<ResponseSchedule[]> = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
};

const useWeekList = () => {
  const [state, dispatch] = React.useReducer(reducer, weekStates);

  return { state, dispatch };
};

export default useWeekList;
