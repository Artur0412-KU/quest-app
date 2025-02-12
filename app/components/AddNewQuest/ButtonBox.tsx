import { ReactNode } from 'react';

function ButtonBox({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex w-fit gap-[10px] rounded-[8px] ${className} text-black`}>
      {children}
    </div>
  );
}

export default ButtonBox;
