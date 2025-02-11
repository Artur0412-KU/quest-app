import { HiOutlineTrash } from 'react-icons/hi2';
import Box from './Box';
import ButtonBox from './ButtonBox';
import Heading from './Heading';

function TaskPreview({
  title,
  className,
  handleDelete,
}: {
  title: string;
  className?: string;
  handleDelete: () => void;
}) {
  return (
    <Box className={`${className} flex-row justify-between`}>
      <Heading as="h2" className="w-fit">
        {title}
      </Heading>
      <ButtonBox>
        <button
          className="btn btn-square h-[48px] w-[48px] bg-[#E22D2D] text-white"
          onClick={handleDelete}
          type="button"
        >
          <HiOutlineTrash size={24} />
        </button>
        <button
          className="btn h-[48px] w-[160px] border-inherit bg-[#7BAAAF] text-white"
          type="button"
        >
          Change
        </button>
      </ButtonBox>
    </Box>
  );
}

export default TaskPreview;
