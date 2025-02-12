import { HiOutlineCog8Tooth, HiOutlinePuzzlePiece } from 'react-icons/hi2';
import ButtonGhost from '../Button/ButtonGhost';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setSettingPage } from '@/app/store/createQuestSlice';
import { clear as clearTask } from '@/app/store/createTaskSlice';

function Navigation() {
  const { settingPage } = useAppSelector(store => store.createQuest);
  const dispatch = useAppDispatch();

  return (
    <nav>
      <ButtonGhost
        onClick={() => {
          dispatch(setSettingPage('mainSettings'));
        }}
        selected={settingPage === 'mainSettings'}
      >
        <HiOutlineCog8Tooth size={24} />
        General Settings
      </ButtonGhost>
      <ButtonGhost
        onClick={() => {
          dispatch(setSettingPage('questions'));
          dispatch(clearTask());
        }}
        selected={settingPage === 'questions'}
      >
        <HiOutlinePuzzlePiece size={24} />
        Tasks
      </ButtonGhost>

      <button
        className="btn bg-brand hover:bg-brand mt-[64px] w-full px-[14px] py-[16px] text-white border-white"
        type="submit"
        disabled={settingPage === 'questions'}
      >
        Create a quest
      </button>
    </nav>
  );
}

export default Navigation;
