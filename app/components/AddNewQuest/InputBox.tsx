import InputOrTextarea from './InputOrTextarea';
import Heading from './Heading';
import { UseFormRegisterReturn } from 'react-hook-form';
import _ from 'lodash';

function InputBox({
  register,
  children,
  inputOrTextarea,
  heading,
}: {
  register: UseFormRegisterReturn;
  children: string;
  inputOrTextarea: 'input' | 'textarea';
  heading?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-[5px]">
      {' '}
      {
        <label htmlFor={heading}>
          <Heading as="h4">{_.upperFirst(heading)}</Heading>
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
