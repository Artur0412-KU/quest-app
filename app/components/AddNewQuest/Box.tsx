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
      className={`w-fullt flex h-fit flex-col gap-[20px] rounded-[8px] bg-(--color-white) p-[32px] ${className}`}
    >
      {children}
    </div>
  );
}

export default Box;
