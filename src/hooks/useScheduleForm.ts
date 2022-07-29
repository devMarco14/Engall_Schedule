/* eslint-disable array-callback-return */
import { postSchedulesAPI, getSchedulesAPI } from 'libs/api/schedule';
import { Schedule, ResponseSchedule } from 'types/customTypes';

const useScheduleForm = () => {
  const onSubmitSchedule = async (weekdays: string[], body: Schedule) => {
    let result = true;
    const allDayLists = await Promise.all(
      weekdays.map((day: string) => getSchedulesAPI(day)),
    );
    const possibleOverlapList = allDayLists.map(
      (dayList: ResponseSchedule[]) => {
        return dayList.filter((dayObject: ResponseSchedule) => {
          return (
            `${dayObject.startTime.hour}${dayObject.startTime.minute}${
              dayObject.startTime.isAM ? 'AM' : 'PM'
            }` ===
            `${body.startTime.hour}${body.startTime.minute}${
              body.startTime.isAM ? 'AM' : 'PM'
            }`
          );
        });
      },
    );
    const numberOfOverlaps = possibleOverlapList.filter(
      (arr: ResponseSchedule[]) => arr.length > 0,
    ).length;
    if (numberOfOverlaps === 0) {
      await Promise.all(
        weekdays.map((weekday) => {
          postSchedulesAPI(weekday, {
            id: Math.floor(Math.random() * 10000).toString(),
            startTime: body.startTime,
            endTime: body.endTime,
          });
        }),
      );
    } else {
      result = false;
    }
    return result;
  };
  return {
    onSubmitSchedule,
  };
};

export default useScheduleForm;
