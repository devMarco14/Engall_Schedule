/* eslint-disable consistent-return */
import SelectBox from 'components/SelectBox';
import React from 'react';
import { getIntervalArray, getClassEndTime, INITIAL_TIME } from '../utils';

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
      {['hour', 'minute'].map((timeType) => (
        <React.Fragment key={`container_${timeType}`}>
          <SelectBox
            key={`timeType_${timeType}`}
            className={selectBoxClass}
            optionList={timeType === 'hour' ? hourList : minuteList}
            selectedOption={
              timeType === 'hour'
                ? selectedTime.startTime.hour
                : selectedTime.startTime.minute
            }
            onSelectOption={(option: number) =>
              setSelectedTime(({ startTime }) => ({
                startTime: { ...startTime, [timeType]: option },
                endTime: {
                  ...getClassEndTime({ ...startTime, [timeType]: option }),
                },
                // isAM: true/false
              }))
            }
            formatOption={(option: string) => option.padStart(2, '0')}
          />
          <span
            key={`colon_${timeType}`}
            className={`${timeType === 'hour' ? 'block' : 'hidden'} block mx-1`}
          >
            :
          </span>
        </React.Fragment>
      ))}
    </section>
  );
}

export default TimeSelect;
