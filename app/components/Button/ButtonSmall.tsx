import { ReactNode } from 'react';

function ButtonSmall({
  children,
  selected = false,
}: {
  children: ReactNode;
  selected?: boolean;
}) {
  const button = ' btn btn-lg border-brand border-[2px] ';

  const selectedOrNot = selected
    ? ' bg-brand text-white'
    : ' hover:text-brand ';

  const style = button + selectedOrNot;

  return <button className={button + style}>{children}</button>;
}

export default ButtonSmall;
