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
const selectBoxClass =
  'bg-zinc-50 w-20 h-12 border border-solid border-gray-200 text-center';

function TimeSelect() {
  const [selectedTime, setSelectedTime] =
    React.useState<TimeType>(INITIAL_TIME);
  console.log(selectedTime);

  return (
    <section className="flex items-center">
      <SelectBox
        className={selectBoxClass}
        selectedOption={selectedTime.startTime.hour}
        optionList={hourList}
        onSelectOption={(option: number) =>
          setSelectedTime(({ startTime }) => ({
            startTime: { ...startTime, hour: option },
            endTime: { ...getEndTime({ ...startTime, hour: option }) },
          }))
        }
        formatOption={(option: string) => option.padStart(2, '0')}
      />
      <span className="block mx-1">:</span>
      <SelectBox
        className={selectBoxClass}
        selectedOption={selectedTime.startTime.minute}
        optionList={minuteList}
        onSelectOption={(option: number) =>
          setSelectedTime(({ startTime }) => ({
            startTime: { ...startTime, minute: option },
            endTime: { ...getEndTime({ ...startTime, minute: option }) },
          }))
        }
        formatOption={(option: string) => option.padStart(2, '0')}
      />
    </section>
  );
}

export default TimeSelect;
