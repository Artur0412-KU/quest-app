import { Quest } from './ListQuests';

function ListQuestItem({ questData }: { questData: Quest }) {
  // TODO: подумати, що саме відтворювати в історії пройдених квестів
  const { title, author, time } = questData;

  return (
    <tr>
      <td></td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{time}</td>
    </tr>
  );
}

export default ListQuestItem;
