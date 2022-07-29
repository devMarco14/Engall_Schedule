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
        const endHour = startTime.hour + 1;
        return { hour: endHour > 12 ? 1 : endHour, minute: endMinute % 60 };
    }
    return { hour: startTime.hour, minute: endMinute };
};

export const shouldIsAMChange = (
    startHour: number,
    endHour: number,
    isAM: boolean | null,
) => {
    if (startHour === 11 && endHour === 12) return !isAM;
    return isAM;
};