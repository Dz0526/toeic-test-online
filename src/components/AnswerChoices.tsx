import { RadioGroup } from '@headlessui/react';

export const AnswerChoices = ({
  optionValues,
  label,
}: {
  optionValues: string[];
  label: number;
}) => {
  const Option = ({ value }: { value: string }) => {
    return (
      <RadioGroup.Option
        value={value}
        className='m-1 p-1 border rounded-lg self-center'
      >
        <span>{value}</span>
      </RadioGroup.Option>
    );
  };

  return (
    <RadioGroup className={'flex h-12'}>
      <RadioGroup.Label className='p-2 w-8 self-center'>
        {label}
      </RadioGroup.Label>
      {optionValues.map((optionValue, i) => (
        <Option key={i} value={optionValue} />
      ))}
    </RadioGroup>
  );
};
