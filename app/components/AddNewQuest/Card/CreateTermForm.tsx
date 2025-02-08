'use client';

import { CardType } from '@/app/AddNewCardsQuest';
import { SubmitHandler, useForm } from 'react-hook-form';

function CreateCardForm({ addCard }: { addCard: (card: CardType) => void }) {
  const { reset, register, handleSubmit, ...x } = useForm<CardType>();

  const onSubmit: SubmitHandler<CardType> = data => {
    const newCard = { ...data, id: Math.random().toString() };
    reset();
    addCard(newCard);
  };

  return (
    <form
      className="mb-4 flex flex-col gap-8 rounded-xl bg-secondary-content p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card grid flex-grow place-items-center rounded-box">
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
        <div className="card grid flex-grow place-items-center rounded-box">
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

export default CreateCardForm;
