import {
  HOUR_LIST,
  INITIAL_SELECTED_TIME,
  MINUTE_LIST,
} from 'libs/utils/Constants';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AMPM from './components/AMPM';
import DayOfWeek from './components/DayOfWeek';
import SelectBox from './components/SelectBox';
import { getClassEndTime } from './utils';

interface TimeType {
  startTime: {
    hour: number;
    minute: number;
  };
  endTime: {
    hour: number;
    minute: number;
  };
  isAM?: boolean | null;
}

function AddSchedulePage() {
  const [timeToggle, setTimeToggle] = React.useState<string>('');
  const [selectDay, setSelectDay] = React.useState<string[]>([]);
  const [selectedTime, setSelectedTime] = React.useState<TimeType>(
    INITIAL_SELECTED_TIME,
  );

  // 수업 시작 시간 선택할 때 마다 변경되는 데이터 확인 가능
  console.log(selectedTime);

  const navigate = useNavigate();

  return (
    <section className="w-full px-10">
      <h1 className="my-10 text-xl font-bold">Add class schedule</h1>
      <article className="border border-solid border-gray-200 p-7 bg-zinc-50  text-[16px] font-bold">
        <div className="md:flex md:items-center">
          <div className="md:flex md:w-[10%] mb-2">Start time</div>
          <div className="flex w-full md:mr-2 md:w-[150px]">
            <section className="flex justify-between items-center font-normal w-full">
              {['hour', 'minute'].map((timeType) => (
                <React.Fragment key={`container_${timeType}`}>
                  <SelectBox
                    key={`timeType_${timeType}`}
                    className="bg-zinc-50 h-12 min-w-20 w-full border border-solid border-gray-300 text-center z-10"
                    optionList={timeType === 'hour' ? HOUR_LIST : MINUTE_LIST}
                    selectedOption={
                      timeType === 'hour'
                        ? selectedTime.startTime.hour
                        : selectedTime.startTime.minute
                    }
                    onSelectOption={(option: number) =>
                      setSelectedTime(({ startTime, isAM }) => ({
                        startTime: { ...startTime, [timeType]: option },
                        endTime: {
                          ...getClassEndTime({
                            ...startTime,
                            [timeType]: option,
                          }),
                        },
                        // 사용자가 am, pm 선택 안했을 때 기본값을 null로 줌
                        isAM: isAM || null,
                      }))
                    }
                    formatOption={(option: string) => option.padStart(2, '0')}
                  />
                  <span
                    key={`colon_${timeType}`}
                    className={`${
                      timeType === 'hour' ? 'block' : 'hidden'
                    } block mx-1`}
                  >
                    :
                  </span>
                </React.Fragment>
              ))}
            </section>
          </div>
          <AMPM
            timeToggle={timeToggle}
            setTimeToggle={(value: string) => {
              setTimeToggle(value);
              setSelectedTime(({ startTime, endTime }: TimeType) => ({
                startTime: { ...startTime },
                endTime: { ...endTime },
                isAM: value === 'AM',
              }));
            }}
          />
        </div>
        <div className="flex flex-wrap md:flex md:items-center md:mt-32">
          <div className="md:flex md:w-[10%] my-2">Repeat on</div>
          <DayOfWeek selectDay={selectDay} setSelectDay={setSelectDay} />
        </div>
      </article>
      <div className="md:w-full md:flex md:justify-end">
        <button
          className=" w-full mt-1 md:w-[15%] h-10 md:mx-9 md:mt-4 rounded-lg bg-buttonColor font-bold text-zinc-50"
          type="button"
          onClick={() => {
            navigate('/');
          }}
        >
          Save
        </button>
      </div>
    </section>
  );
}

export default AddSchedulePage;
