import React from 'react';
import Option from 'pages/addSchedulePage/components/Option';
import { TiArrowSortedDown as ArrowDownIcon } from 'react-icons/ti';

interface SelectBoxProps {
  optionList: (string | number)[];
  selectedOption: string | number;
  onSelectOption: React.Dispatch<React.SetStateAction<any>>;
  formatOption?: (option: string) => string;
  className?: string;
}

function SelectBox({
  optionList,
  selectedOption,
  onSelectOption,
  formatOption,
  className,
}: SelectBoxProps) {
  const [isToggled, setToggle] = React.useState<boolean>(false);
  const handleToggle = () => setToggle((previous) => !previous);

  return (
    <section className={className}>
      <button
        type="button"
        className={`flex justify-evenly w-full mx-auto p-4 ${
          isToggled ? null : 'shadow-md shadow-gray-500/50'
        }`}
        onClick={handleToggle}
      >
        {formatOption
          ? formatOption(selectedOption.toString())
          : selectedOption}

        {isToggled ? <ArrowDownIcon color="gray" /> : null}
      </button>
      {isToggled ? (
        <ul className="bg-zinc-50 h-[100px] text-center overflow-y-scroll scrollbar-hide">
          {optionList?.map((option, index) => (
            <Option
              key={`${option}_${index}`}
              onClick={() => {
                handleToggle();
                onSelectOption(option);
              }}
            >
              {formatOption ? formatOption(option.toString()) : option}
            </Option>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default SelectBox;
