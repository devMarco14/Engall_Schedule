export interface Time {
  hour: number;
  minute: number;
  isAM: boolean | null;
}

export interface RequestSchedule {
  id: number;
  startTime: Time;
  endTime: Time;
  isAM: boolean | null;
}

export interface Schedule {
  startTime: Time;
  endTime: Time;
}
