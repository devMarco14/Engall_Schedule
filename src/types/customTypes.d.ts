export interface StringIndexedObject<T> {
  [key: string]: T;
}

export interface ActionType<T> {
  type: string;
  payload: T;
}

export interface TimeObject {
  hour: string | number;
  minute: string | number;
  isAM: boolean;
}

export interface Schedule {
  startTime: TimeObject;
  endTime: TimeObject;
}

export interface ResponseSchedule {
  id: string;
  startTime: TimeObject;
  endTime: TimeObject;
}
