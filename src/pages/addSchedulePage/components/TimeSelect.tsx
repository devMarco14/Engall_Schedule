/* eslint-disable consistent-return */
import SelectBox from 'components/SelectBox';
import React from 'react';
import { getIntervalArray, getEndTime, INITIAL_TIME } from '../utils';

interface TimeType {
  startTime: {
    hour: number;
    minute: number;
  };
  endTime: {
    hour: number;
    minute: number;
  };
}

const hourList = getIntervalArray(12, 1, false);
const minuteList = getIntervalArray(12, 5, true);

function TimeSelect() {
  const [selectedTime, setSelectedTime] =
    React.useState<TimeType>(INITIAL_TIME);

  console.log(selectedTime);

  return (
    <section>
      <SelectBox
        contents={selectedTime.startTime.hour}
        optionList={hourList}
        onSelectOption={(option: number) =>
          setSelectedTime(({ startTime }) => ({
            startTime: { ...startTime, hour: option },
            endTime: { ...getEndTime({ ...startTime, hour: option }) },
          }))
        }
      />
      <SelectBox
        contents={selectedTime.startTime.minute}
        optionList={minuteList}
        onSelectOption={(option: number) =>
          setSelectedTime(({ startTime }) => ({
            startTime: { ...startTime, minute: option },
            endTime: { ...getEndTime({ ...startTime, minute: option }) },
          }))
        }
      />
    </section>
  );
}

export default TimeSelect;
