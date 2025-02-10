'use client';

import { CardType } from '@/app/AddNewQuest';
import { SubmitHandler, useForm } from 'react-hook-form';

function CreateTask({ addCard }: { addCard: (card: CardType) => void }) {
  const { reset, register, handleSubmit } = useForm<CardType>();

  const onSubmit: SubmitHandler<CardType> = data => {
    const newCard = { ...data, id: Math.random().toString() };
    reset();
    addCard(newCard);
  };

  return (
    <form
      className="bg-secondary-content mb-4 flex flex-col gap-8 rounded-xl p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card rounded-box grid flex-grow place-items-center">
          <label className="input input-bordered flex w-full items-center gap-2">
            Term:
            <input
              maxLength={40}
              type="text"
              className="grow"
              {...register('term')}
              required
            />
          </label>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card rounded-box grid flex-grow place-items-center">
          <label className="input input-bordered flex w-full items-center gap-2">
            Definition:
            <input
              maxLength={40}
              type="text"
              className="h-fit grow"
              {...register('definition')}
              required
            />
          </label>
        </div>
      </div>
      <button className="btn btn-wide">Add card</button>
    </form>
  );
}

export default CreateTask;
