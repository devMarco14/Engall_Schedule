/* eslint-disable no-nested-ternary */
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
          const { startTime: dayStartTime, endTime: dayEndTime } = dayObject;
          const {
            hour: dayStartHour,
            minute: dayStartMinute,
            isAM: dayStartIsAM,
          } = dayStartTime;
          const {
            hour: dayEndHour,
            minute: dayEndMinute,
            isAM: dayEndIsAM,
          } = dayEndTime;
          const processedDayStartHour = dayStartIsAM
            ? dayStartHour === '12'
              ? String(Number(dayStartHour) + 12)
              : dayStartHour
            : String(Number(dayStartHour) + 12);
          const processedDayEndHour = dayEndIsAM
            ? dayEndHour === '12'
              ? String(Number(dayEndHour) + 12)
              : dayEndHour
            : String(Number(dayEndHour) + 12);
          const processedDayStartTime = Number(
            `${processedDayStartHour}${dayStartMinute}`,
          );
          const processedDayEndTime = Number(
            `${processedDayEndHour}${dayEndMinute}`,
          );
          const { startTime: bodyStartTime, endTime: bodyEndTime } = body;
          const {
            hour: bodyStartHour,
            minute: bodyStartMinute,
            isAM: bodyStartIsAM,
          } = bodyStartTime;
          const {
            hour: bodyEndHour,
            minute: bodyEndMinute,
            isAM: bodyEndIsAM,
          } = bodyEndTime;
          const processedBodyStartHour = bodyStartIsAM
            ? bodyStartHour === '12'
              ? String(Number(bodyStartHour) + 12)
              : bodyStartHour
            : String(Number(bodyStartHour) + 12);
          const processedBodyEndHour = bodyEndIsAM
            ? bodyEndHour === '12'
              ? String(Number(bodyEndHour) + 12)
              : bodyEndHour
            : String(Number(bodyEndHour) + 12);
          const processedBodyStartTime = Number(
            `${processedBodyStartHour}${bodyStartMinute}`,
          );
          const processedBodyEndTime = Number(
            `${processedBodyEndHour}${bodyEndMinute}`,
          );
          return (
            (processedDayStartTime <= processedBodyStartTime &&
              processedBodyStartTime <= processedDayEndTime) ||
            (processedDayStartTime <= processedBodyEndTime &&
              processedBodyEndTime <= processedDayEndTime)
          );
        });
      },
    );
    const numberOfOverlaps = possibleOverlapList.filter(
      (arr: ResponseSchedule[]) => arr.length > 0,
    ).length;
    console.log(body);
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
