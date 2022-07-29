/* eslint-disable prettier/prettier */
import { CLASS_DURATION } from 'libs/utils/Constants';

export const getIntervalArray = (
  length: number,
  interval: number,
  isStartedWithZero: boolean,
) => {
  if (isStartedWithZero) {
    return Array.from({ length }, (_value, index) => index * interval);
  }
  return Array.from({ length }, (_value, index) => (index + 1) * interval);
};

export const getClassEndTime = (startTime: {
  hour: string | number;
  minute: string | number;
}) => {
  const endMinute = Number(startTime.minute) + CLASS_DURATION;

  if (endMinute >= 60) {
    const endHour = Number(startTime.hour) + 1;
    return {
      hour: endHour > 12 ? '01' : String(endHour).padStart(2, '0'),
      minute: String(endMinute % 60).padStart(2, '0'),
    };
  }
  return { hour: startTime.hour, minute: endMinute };
};

export const getEndTimeIsAM = (
  startHour: string | number,
  endHour: string | number,
  isAM: boolean,
) => {
  if (startHour === 11 && endHour === 12) return !isAM;
  return isAM;
};
