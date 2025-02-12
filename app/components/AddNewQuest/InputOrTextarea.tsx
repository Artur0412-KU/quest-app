import { UseFormRegisterReturn } from 'react-hook-form';

function InputOrTextarea({
  placeholder,
  id,
  type,
  inputOrTextarea,
  register,
  required = true,
}: {
  placeholder: string;
  id?: string;
  type?: string;
  inputOrTextarea: 'input' | 'textarea';
  register: UseFormRegisterReturn;
  required?: boolean;
}) {
  const style =
    inputOrTextarea +
    ' border-base-300 inline-block w-full rounded-[4px] border border-solid bg-white';

  if (inputOrTextarea === 'textarea')
    return (
      <textarea
        required={required}
        {...register}
        placeholder={placeholder}
        id={id}
        className={style}
      />
    );

  if (inputOrTextarea === 'input')
    return (
      <input
        {...register}
        required={required}
        placeholder={placeholder}
        id={id}
        type={type}
        className={style}
      />
    );
}

export default InputOrTextarea;
