'use client';

import { useState } from 'react';
import CreateCardForm from './components/AddNewQuest/CreateCardForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import CardLine from './components/AddNewQuest/CardLine';
import toast, { Toaster } from 'react-hot-toast';

export type CardType = { id: string; term: string; definition: string };

export type Inputs = {
  title: string;
  description: string;
  time: number;
  cards: { term: string; definition: string }[];
};

function AddNewQuest() {
  const { reset, register, handleSubmit } = useForm<Inputs>();
  const [cards, manageCards] = useState<CardType[]>([]);

  const onSubmit: SubmitHandler<Inputs> = data => {
    if (cards.length === 0)
      return toast.error('You shoud have at least one card');
    const newQuest = { id: Math.random().toString(), ...data, cards };
    reset();
    manageCards([]);
    console.log(newQuest);
    toast.success('The quest is created');
  };

  function handleAddCard(card: CardType) {
    manageCards(prevCards => [...prevCards, card]);
  }

  function handleRemoveCard(id: string) {
    manageCards(prevCards => [...prevCards.filter(card => card.id !== id)]);
  }

  return (
    <div className="flex flex-col gap-6 overflow-hidden bg-green-300 p-12">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between">
          <h2 className="font-boldk text-center text-3xl uppercase">
            Add new quest
          </h2>
          <button className="btn btn-primary btn-active">Create</button>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          Title:
          <input required type="text" className="grow" {...register('title')} />
        </label>
        <label className="textarea textarea-bordered flex items-start gap-2 text-base">
          Description:
          <textarea
            required
            id="description"
            className="textarea textarea-bordered grow"
            {...register('description')}
          ></textarea>
        </label>
        <label className="input input-bordered flex max-w-xs items-center gap-2">
          Time:
          <input
            required
            min={1}
            max={120}
            type="number"
            className="grow appearance-none"
            {...register('time')}
          />
        </label>
        {cards?.map((cardData, i) => (
          <CardLine
            key={cardData.id}
            card={cardData}
            handleDelete={handleRemoveCard}
          />
        ))}
      </form>

      <CreateCardForm addCard={handleAddCard} />
      <Toaster />
    </div>
  );
}

export default AddNewQuest;
