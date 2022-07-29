/* eslint-disable prettier/prettier */
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

const CLASS_DURATION = 40;
export const INITIAL_TIME = {
    startTime: { hour: 0, minute: 0 },
    endTime: { hour: 0, minute: 0 },
};

export const getClassEndTime = (startTime: { hour: number; minute: number }) => {
    const endMinute = startTime.minute + CLASS_DURATION;
    if (endMinute >= 60) {
        return { hour: startTime.hour + 1, minute: endMinute % 60 };
    }
    return { hour: startTime.hour, minute: endMinute };
};