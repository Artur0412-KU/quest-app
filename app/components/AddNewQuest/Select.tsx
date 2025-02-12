import { UseFormRegisterReturn } from 'react-hook-form';
import Heading from './Heading';
import { ChangeEvent } from 'react';
import { TaskType } from '@/app/store/createTaskSlice';

function Select({
  options,
  title,
  register,
  defaultValue,
  handleSelect,
}: {
  options: string[];
  title: string;
  register: UseFormRegisterReturn;
  handleSelect?: (e: ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: TaskType;
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <Heading as="h4">{title}</Heading>
      <select
        defaultValue={defaultValue || options.at(0)}
        className="select w-full border border-[#D1D5DB]"
        {...register}
        onChange={handleSelect}
      >
        {options.map(opt => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
