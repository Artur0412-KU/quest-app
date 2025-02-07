import ListQuestItem from './ListQuestItem';

export type Quest = {
  id: number;
  title: string;
  description: string;
  author: string;
  time: number;
};

function ListQuests({ quests }: { quests: Quest[] }) {
  return (
    <>
      <h3>Last quests</h3>

      <table className="table h-fit">
        <thead>
          <tr>
            <th></th>
            <th>title</th>
            <th>autor</th>
            <th>time</th>
          </tr>
        </thead>
        <tbody className="overflow-scroll">
          {quests.map(data => (
            <ListQuestItem key={data.id} questData={data} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListQuests;
