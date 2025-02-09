'use client';

import { CardType } from '@/app/AddNewCardsQuest';
import { useState } from 'react';

function Card({ data }: { data: CardType }) {
  const { term, definition } = data;
  const [showAnswer, setshowAnswer] = useState(false);

  function handleShowAnswer() {
    setshowAnswer(prev => !prev);
  }

  return (
    <div className="relative flex h-[300px] items-center justify-center bg-red-300">
      <div className="text-[48px] font-semibold">
        {showAnswer ? definition : term}
      </div>
      <button
        className="btn btn-soft btn-info absolute right-5 bottom-2"
        onClick={handleShowAnswer}
      >
        Show answer
      </button>
    </div>
  );
}

export default Card;
