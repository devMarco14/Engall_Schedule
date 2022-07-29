import { deleteScheduleAPI } from 'libs/api/schedule';

const useDeleteSchedule = () => {
  const onDeleteSchedule = async (weekdays: string, id: string) => {
    await deleteScheduleAPI(weekdays, id);
  };
  return { onDeleteSchedule };
};

export default useDeleteSchedule;
