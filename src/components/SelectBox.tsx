import React from 'react';
import Option from 'components/Option';

interface SelectBoxProps {
  contents?: string | number;
  optionList?: (string | number)[];
  onSelectOption: React.Dispatch<React.SetStateAction<any>>;
}

function SelectBox({ contents, optionList, onSelectOption }: SelectBoxProps) {
  const [isToggled, setToggle] = React.useState<boolean>(false);

  const handleToggle = () => setToggle((previous) => !previous);

  return (
    <section>
      <button type="button" onClick={handleToggle}>
        {contents}
      </button>
      <ul>
        {isToggled
          ? optionList?.map((option, index) => (
              <Option
                key={`${option}_${index}`}
                onClick={() => {
                  handleToggle();
                  onSelectOption(option);
                }}
              >
                {option}
              </Option>
            ))
          : null}
      </ul>
    </section>
  );
}

export default SelectBox;
