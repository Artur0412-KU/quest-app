function InputOrTextarea({
  placeholder,
  id,
  type,
  inputOrTextarea,
}: {
  placeholder: string;
  id: string;
  type?: string;
  inputOrTextarea: 'input' | 'textarea';
}) {
  const style =
    inputOrTextarea +
    ' border-gray inline-block w-full rounded-[4px] border border-solid';

  if (inputOrTextarea === 'textarea')
    return (
      <textarea required placeholder={placeholder} id={id} className={style} />
    );

  if (inputOrTextarea === 'input')
    return (
      <input
        required
        placeholder={placeholder}
        id={id}
        type={type}
        className={style}
      />
    );
}

export default InputOrTextarea;
