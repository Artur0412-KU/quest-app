import { ReactNode } from 'react';

function ButtonSmall({
  children,
  selected = false,
  onClick,
  type = 'button',
}: {
  children: ReactNode;
  selected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button';
}) {
  const button = ' btn border-brand border-[2px]  ';
  const selectedOrNot = selected
    ? ' bg-brand text-white'
    : ' hover:text-brand ';

  const style = button + selectedOrNot;

  return (
    <button className={button + style} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default ButtonSmall;
