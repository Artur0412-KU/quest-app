import { ReactNode } from 'react';

function ButtonBox({ children }: { children: ReactNode }) {
  return <div className="flex w-fit gap-[10px] rounded-[8px]">{children}</div>;
}

export default ButtonBox;
