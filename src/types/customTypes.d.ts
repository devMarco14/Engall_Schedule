export interface StringIndexedObject<T> {
  [key: string]: T;
}

export interface ActionType<T> {
  type: string;
  payload: T;
}

export interface TimeObject {
  hour: string;
  minute: string;
  isAM: boolean;
}

export interface Schedule {
  startTime: Time;
  endTime: Time;
}

export interface ResponseSchedule {
  id: string;
  startTime: TimeObject;
  endTime: TimeObject;
}
