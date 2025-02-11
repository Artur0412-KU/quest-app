import InputOrTextarea from './InputOrTextarea';
import Heading from './Heading';
import { UseFormRegisterReturn } from 'react-hook-form';
import _ from 'lodash';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppSelector } from '@/app/store/hooks';

function InputBox({
  register,
  children,
  inputOrTextarea,
  heading,
  className = '',
  toggleAnswer,
}: {
  register: UseFormRegisterReturn;
  children: string;
  inputOrTextarea: 'input' | 'textarea';
  heading?: string;
  className?: string;
  toggleAnswer?: (name: string) => void;
}) {
  const { correctAnswers } = useAppSelector(store => store.createTask);
  const [isChecked, setIsChecked] = useState(false);
  const [curName, setCurName] = useState('');

  useEffect(() => {
    setIsChecked(
      correctAnswers[curName] === undefined ? false : correctAnswers[curName],
    );
  }, [correctAnswers, curName]);

  function handleSetAnswer(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    toggleAnswer!(e.target.name);
    setCurName(e.target.name);
  }

  return (
    <div className={`flex w-full flex-col gap-[5px] ${className}`}>
      {
        <label htmlFor={heading} className="flex justify-between">
          <Heading as="h4">{_.upperFirst(heading)}</Heading>
          {toggleAnswer && (
            <input
              type="checkbox"
              className="checkbox"
              checked={isChecked}
              name={heading?.replaceAll(' ', '')}
              onChange={handleSetAnswer}
            />
          )}
        </label>
      }
      <InputOrTextarea
        id={heading}
        type="text"
        inputOrTextarea={inputOrTextarea}
        placeholder={children}
        register={register}
      />
    </div>
  );
}

export default InputBox;
