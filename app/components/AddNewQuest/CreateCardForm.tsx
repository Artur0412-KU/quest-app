'use client';

import { CardType } from '@/app/AddNewQuest';
import { ChangeEvent, useEffect, useState } from 'react';

function CreateCardForm({ addCard }: { addCard: (card: CardType) => void }) {
  const [inputProps, setInputProps] = useState<CardType>({
    id: Math.random().toString(),
    term: '',
    definition: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputProps(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleAddCard() {
    if (inputProps.term === '' && inputProps.definition === '') return;
    addCard(inputProps);
    setInputProps({ id: Math.random().toString(), term: '', definition: '' });
  }

  return (
    <div className="mb-4 flex flex-col gap-8 rounded-xl bg-secondary-content p-8">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card grid flex-grow place-items-center rounded-box">
          <label className="input input-bordered flex w-full items-center gap-2">
            Term:
            <input
              maxLength={40}
              type="text"
              className="grow"
              name="term"
              value={inputProps.term}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card grid flex-grow place-items-center rounded-box">
          <label className="input input-bordered flex w-full items-center gap-2">
            Definition:
            <input
              maxLength={40}
              type="text"
              className="h-fit grow"
              name="definition"
              value={inputProps.definition}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <button className="btn btn-wide" onClick={handleAddCard}>
        Add card
      </button>
    </div>
  );
}

export default CreateCardForm;
