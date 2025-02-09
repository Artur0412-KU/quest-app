import { ReactNode } from 'react';

function Box({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-fit flex-col gap-[20px] rounded-[8px] bg-white p-[32px]">
      {children}
    </div>
  );
}

export default Box;
