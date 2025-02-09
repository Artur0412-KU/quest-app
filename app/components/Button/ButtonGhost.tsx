import { ReactNode } from 'react';

function ButtonGhost({
  children,
  onClick,
  selected = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  selected?: boolean;
}) {
  const selectedStyle = selected
    ? ' bg-red-[hsla(213, 15%, 88%, 1)]'
    : 'bg-inherit ';

  const style =
    selectedStyle +
    ' btn border-b-[hsla(213, 15%, 88%, 1)] flex w-full justify-start gap-[10px] border-t-0 border-r-0 border-l-0  text-[16px] leading-[1.5] text-[600] hover:bg-stone-100';

  console.log(style);

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonGhost;
