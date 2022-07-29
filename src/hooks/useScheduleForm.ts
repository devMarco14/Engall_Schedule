/* eslint-disable array-callback-return */
import { postSchedulesAPI } from 'libs/api/schedule';
import { Schedule } from 'types/schedule';

const useScheduleForm = () => {
  const onSubmitSchedule = async (weekdays: string[], body: Schedule) => {
    await Promise.all(
      weekdays.map((weekday) => {
        postSchedulesAPI(weekday, {
          id: Math.floor(Math.random() * 10000),
          startTime: body.startTime,
          endTime: body.endTime,
        });
      }),
    );
  };
  return {
    onSubmitSchedule,
  };
};

export default useScheduleForm;
