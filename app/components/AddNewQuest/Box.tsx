import { ReactNode } from 'react';

function Box({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} flex h-fit w-full flex-col gap-[20px] rounded-[8px] bg-white p-[32px]`}
    >
      {children}
    </div>
  );
}

export default Box;
