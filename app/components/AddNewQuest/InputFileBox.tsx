import { ChangeEvent } from 'react';
import Heading from './Heading';

function InputFileBox({
  handleSetImage,
  type,
}: {
  handleSetImage: (
    e: ChangeEvent<HTMLInputElement>,
    type?: 'preview' | 'background',
  ) => void;
  type?: 'preview' | 'background';
}) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (type) {
      handleSetImage(e, type);
    } else {
      handleSetImage(e);
    }
  }

  return (
    <div className="flex w-full flex-col gap-[5px]">
      <button
        type="button"
        className="btn relative flex h-[220px] flex-col gap-5 border border-dashed border-black p-0"
      >
        <Heading as="h4">Drag and drop image(.png)</Heading>
        <input
          type="file"
          className="file-input absolute top-0 left-0 h-full w-full opacity-0"
          onChange={handleChange}
          accept=".png"
        />
        <p className="btn border-[#374151]">Select file</p>
      </button>
    </div>
  );
}

export default InputFileBox;
