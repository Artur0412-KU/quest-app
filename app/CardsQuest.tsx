import _ from 'lodash';
import Card from './features/cardQuest/Card';

const testData = {
  id: Math.random().toString(),
  title: 'title',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident asperiores culpa praesentium sed, aliquam incidunt quos suscipit ad dicta quod optio ipsam vel quasi unde saepe, recusandae reiciendis distinctio debitis.',
  author: 'autor5',
  time: 20,
  cards: [
    { id: Math.random().toString(), term: 'term1', definition: 'def1' },
    { id: Math.random().toString(), term: 'term2', definition: 'def2' },
    { id: Math.random().toString(), term: 'term3', definition: 'def3' },
    { id: Math.random().toString(), term: 'term4', definition: 'def4' },
    { id: Math.random().toString(), term: 'term5', definition: 'def5' },
    { id: Math.random().toString(), term: 'term6', definition: 'def6' },
  ],
};

function CardsQuest() {
  const { title, author, description, time, cards } = testData;

  return (
    <div className="bg-secondary flex h-fit min-w-full flex-col gap-6 p-20">
      <div className="flex justify-between">
        <h3 className="text-[36px] font-semibold">{_.upperFirst(title)}</h3>
        <span className="countdown font-mono text-6xl">
          <span style={{ '--value': time } as React.CSSProperties}>{time}</span>
        </span>
      </div>
      <div className="carousel w-full">
        {cards.map(card => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      This slider works with anchor links so the browser will snap vertically to
      the image when you click buttons.
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-semibold">{_.upperFirst(author)}</p>
        <p>{_.upperFirst(description)}</p>
      </div>
    </div>
  );
}

export default CardsQuest;
