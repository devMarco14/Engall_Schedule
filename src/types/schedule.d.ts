export interface Time {
  hour: string;
  minute: string;
  isAM: boolean;
}

export interface Schedule {
  id: string;
  startTime: Date;
  endTime: Date;
}
