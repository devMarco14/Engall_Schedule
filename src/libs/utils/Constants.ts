import { getIntervalArray } from '../../pages/addSchedulePage/utils/index';

export const WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const DAY_OF_WEEK = [
  { id: 1, item: 'Monday' },
  { id: 2, item: 'Tuesday' },
  { id: 3, item: 'Wednesday' },
  { id: 4, item: 'Thursday' },
  { id: 5, item: 'Friday' },
  { id: 6, item: 'Saturday' },
  { id: 7, item: 'Sunday' },
];

export const AM_PM = [
  { id: 1, item: 'AM', status: true },
  { id: 2, item: 'PM', status: false },
];

export const CLASS_DURATION = 40;

export const INITIAL_SELECTED_TIME = {
  startTime: { hour: 0, minute: 0 },
  endTime: { hour: 0, minute: 0 },
};

export const HOUR_LIST = getIntervalArray(12, 1, false);
export const MINUTE_LIST = getIntervalArray(12, 5, true);
