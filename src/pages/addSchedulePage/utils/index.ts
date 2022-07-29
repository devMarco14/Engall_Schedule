/* eslint-disable prettier/prettier */
import { CLASS_DURATION } from 'libs/utils/Constants';

export const getIntervalArray = (
    length: number,
    interval: number,
    isStartedWithZero: boolean,
) => {
    if (isStartedWithZero) {
        return Array.from({ length }, (_value, index) => index * interval);
    }
    return Array.from({ length }, (_value, index) => (index + 1) * interval);
};

export const getClassEndTime = (startTime: { hour: number; minute: number }) => {
    const endMinute = startTime.minute + CLASS_DURATION;
    if (endMinute >= 60) {
        return { hour: startTime.hour + 1, minute: endMinute % 60 };
    }
    return { hour: startTime.hour, minute: endMinute };
};