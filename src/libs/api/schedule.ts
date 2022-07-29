import { HttpRequest } from 'hooks/httpRequest';
import { RequestSchedule } from 'types/schedule';

const request = new HttpRequest();

export const postSchedulesAPI = async (
  weekday: string,
  body: RequestSchedule,
) => {
  const response = await request.post(`/${weekday}`, body);
  return response.data;
};

export const getSchedulesAPI = async (weekday: string) => {
  const response = await request.get(`/${weekday}`);
  return response.data;
};

export const deleteScheduleAPI = async (weekday: string, id: string) => {
  const response = await request.delete(`/${weekday}/${id}`);
  return response.data;
};
