import { CardType } from "@/app/AddNewQuest";

function Card({
  card,
  handleDelete,
}: {
  card: CardType;

  handleDelete: (id: string) => void;
}) {
  const { id, term, definition } = card;

  return (
    <div className="mb-4 flex flex-col gap-8 rounded-xl bg-primary p-8">
      <div className="flex w-full">
        <div className="card grid h-20 flex-grow place-items-center rounded-box bg-base-300 pb-2">
          <span className="font-bold">Term</span> {term}
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card grid h-20 flex-grow place-items-center rounded-box bg-base-300 pb-2">
          <span className="font-bold">Definition</span> {definition}
        </div>
      </div>

      <button className="btn btn-wide" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Card;
