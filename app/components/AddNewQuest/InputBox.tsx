import { ReactNode } from 'react';

function InputBox({ children }: { children: ReactNode }) {
  return <div className="flex w-fit flex-col gap-[5px]">{children}</div>;
}

export default InputBox;
