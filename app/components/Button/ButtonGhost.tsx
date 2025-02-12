import { ReactNode } from 'react';

function ButtonGhost({
  children,
  onClick,
  selected = false,
  type = 'button',
}: {
  children: ReactNode;
  onClick?: () => void;
  selected?: boolean;
  type?: 'submit' | 'button';
}) {
  const selectedStyle = selected ? ' bg-[#F8F8F8] ' : 'bg-inherit ';

  const style =
    selectedStyle +
    ' btn border-b-[1px] shadow-none rounded-none  border-[#DDE1E6] flex w-full justify-start gap-[10px] border-t-0 border-r-0 border-l-0  text-[16px] leading-[1.5] text-[600] hover:bg-stone-100';

  return (
    <button className={style} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default ButtonGhost;
