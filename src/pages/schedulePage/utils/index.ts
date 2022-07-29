import { DayObject } from 'types/customTypes';

export const handleSort = (previousTime: DayObject, nextTime: DayObject) => {
  const { startTime: aStart, endTime: aEnd } = previousTime;
  const { startTime: bStart, endTime: bEnd } = nextTime;
  let result = 1;
  switch (true) {
    case (aStart.isAM && aEnd.isAM && !bStart.isAM && !bEnd.isAM) ||
      (aStart.isAM && aEnd.isAM && bStart.isAM && !bEnd.isAM) ||
      (aStart.isAM && aEnd.isAM && !bStart.isAM && bEnd.isAM) ||
      (aStart.isAM && !aEnd.isAM && !bStart.isAM && !bEnd.isAM) ||
      (aStart.isAM && !aEnd.isAM && !bStart.isAM && bEnd.isAM) ||
      (!aStart.isAM && !aEnd.isAM && !bStart.isAM && bEnd.isAM):
      result = -1;
      break;
    case (aStart.isAM && !aEnd.isAM && bStart.isAM && bEnd.isAM) ||
      (!aStart.isAM && aEnd.isAM && !bStart.isAM && !bEnd.isAM) ||
      (!aStart.isAM && aEnd.isAM && bStart.isAM && !bEnd.isAM) ||
      (!aStart.isAM && aEnd.isAM && bStart.isAM && bEnd.isAM) ||
      (!aStart.isAM && !aEnd.isAM && bStart.isAM && !bEnd.isAM) ||
      (!aStart.isAM && !aEnd.isAM && bStart.isAM && bEnd.isAM):
      result = 1;
      break;
    case (aStart.isAM && aEnd.isAM && bStart.isAM && bEnd.isAM) ||
      (aStart.isAM && !aEnd.isAM && bStart.isAM && !bEnd.isAM) ||
      (!aStart.isAM && aEnd.isAM && !bStart.isAM && bEnd.isAM) ||
      (!aStart.isAM && !aEnd.isAM && !bStart.isAM && !bEnd.isAM):
      switch (true) {
        case aStart.hour < bStart.hour:
          result = -1;
          break;
        case aStart.hour > bStart.hour:
          result = 1;
          break;
        case aStart.hour === bStart.hour:
          if (aStart.minute < bStart.minute) result = -1;
          else if (aStart.minute > bStart.minute) result = 1;
          break;
        default:
          throw new Error('Error! Schedule minute overlapped!');
      }
      break;
    default:
      throw new Error('Error! Unexpected schedule input');
  }
  return result;
};
