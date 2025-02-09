import { ReactNode } from 'react';

function InputBox({ children }: { children: ReactNode }) {
  return <div className="flex w-full flex-col gap-[5px]">{children}</div>;
}

export default InputBox;
