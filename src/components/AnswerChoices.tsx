import { RadioGroup } from '@headlessui/react';
import { AnswerOptions } from 'type/AnswerOptions';

export const AnswerChoices = ({
  optionValues,
  label,
  onChange,
  answers,
}: {
  optionValues: string[];
  label: number;
  onChange: (value: AnswerOptions) => void;
  answers: AnswerOptions[];
}) => {
  const Option = ({ value }: { value: string }) => {
    return (
      <RadioGroup.Option
        value={value}
        className={`m-1 p-1 border rounded-lg self-center border-[#b7b7b7] cursor-pointer ${
          /*checked ? 'bg-[#f7daad]' : ''*/
          answers[label] == value ? 'bg-[#d8d2c2]' : ''
        }`}
      >
        <span>{value}</span>
      </RadioGroup.Option>
    );
  };

  return (
    <RadioGroup
      className={'flex h-12'}
      onChange={(value: AnswerOptions) => {
        onChange(value);
      }}
    >
      <RadioGroup.Label className='p-2 w-8 self-center'>
        {label}
      </RadioGroup.Label>
      {optionValues.map((optionValue, i) => (
        <Option key={i} value={optionValue} />
      ))}
    </RadioGroup>
  );
};
