import { addMinutes } from 'date-fns';
import { postSchedulesAPI } from 'libs/api/schedule';
import { useNavigate } from 'react-router-dom';
import { Time } from 'types/schedule';

const useScheduleForm = () => {
  const navigate = useNavigate();

  const onSubmitSchedule = async (weekday: string, body: Time) => {
    const startTime = new Date(
      `2022/7/29/${body.isAM ? body.hour : Number(body.hour) + 12}:${
        body.minute
      }`,
    );
    const endTime = addMinutes(startTime, 40);
    await postSchedulesAPI(weekday, {
      id: Math.floor(Math.random() * 10000).toString(),
      startTime,
      endTime,
    });
    navigate('/');
  };
  return {
    onSubmitSchedule,
  };
};

export default useScheduleForm;
