import { HiOutlineCog8Tooth, HiOutlinePuzzlePiece } from 'react-icons/hi2';
import ButtonGhost from '../Button/ButtonGhost';
import { PagesSettings } from '@/app/AddNewQuest';

function Navigation({
  page,
  handleSetPage,
}: {
  page: PagesSettings;
  handleSetPage: (type: PagesSettings) => void;
}) {
  return (
    <nav>
      <ButtonGhost
        onClick={() => handleSetPage('mainSettings')}
        selected={page === 'mainSettings'}
      >
        <HiOutlineCog8Tooth size={24} />
        General Settings
      </ButtonGhost>
      <ButtonGhost
        onClick={() => handleSetPage('questions')}
        selected={page === 'questions'}
      >
        <HiOutlinePuzzlePiece size={24} />
        Tasks
      </ButtonGhost>

      <button
        className="btn bg-brand mt-[64px] w-full px-[14px] py-[16px] text-white"
        type="submit"
      >
        Create a quest
      </button>
    </nav>
  );
}

export default Navigation;
