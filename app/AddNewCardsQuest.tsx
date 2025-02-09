'use client';

import { useState } from 'react';
import CreateCardForm from './components/AddNewQuest/Card/CreateTermForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import CardLine from './components/AddNewQuest/Card/Term';
import toast, { Toaster } from 'react-hot-toast';
import Heading from './components/AddNewQuest/Card/Heading';
import Box from './components/AddNewQuest/Box';
import InputBox from './components/AddNewQuest/InputBox';
import ButtonBox from './components/AddNewQuest/ButtonBox';
import ButtonSmall from './components/Button/ButtonSmall';

export type CardType = { id: string; term: string; definition: string };

export type Inputs = {
  title: string;
  description: string;
  time: number;
  victoryMessage: string;
  defeatMessage: string;
};

function AddNewCardsQuest() {
  const { reset, register, handleSubmit } = useForm<Inputs>();
  const [cards, manageCards] = useState<CardType[]>([]);

  const onSubmit: SubmitHandler<Inputs> = data => {
    if (cards.length === 0)
      return toast.error('You shoud have at least one term');
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
    <div className="bg-red-600">
      {/* {cards?.map(cardData => (
          <CardLine
            key={cardData.id}
            card={cardData}
            handleDelete={handleRemoveCard}
          />
        ))} */}
      {/* <CreateCardForm addCard={handleAddCard} /> */}

      <nav>
        <button className="btn btn-wide btn-ghost">Wide</button>
        <button className="btn btn-wide btn-ghost">Wide</button>
        <button className="btn btn-wide bg-brand text-white">Wide</button>
      </nav>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Heading as="h2">Create a new quest</Heading>
          <InputBox>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              required
              type="text"
              placeholder="Enter a title, like “The Mystery of the Maya Civilization”"
              className="input border-gray rounded-[4px] border border-solid"
              {...register('title')}
            />
          </InputBox>
          <InputBox>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              required
              placeholder="Add a description..."
              className="textarea input border-gray grow rounded-[4px] border border-solid"
              {...register('title')}
            />
          </InputBox>
        </Box>

        <Box>
          <Heading as="h2">Total time limit</Heading>
          <ButtonBox>
            <ButtonSmall selected={true}>No limit</ButtonSmall>
            <ButtonSmall selected={false}>30 min</ButtonSmall>
            <ButtonSmall selected={false}>60 min</ButtonSmall>
            <ButtonSmall selected={false}>90 min</ButtonSmall>
            <ButtonSmall selected={false}>120 min</ButtonSmall>
          </ButtonBox>
        </Box>
        <Box>
          <Heading as="h2">Final Screen</Heading>
          <InputBox>
            <label htmlFor="victoryMessage">Victory</label>
            <textarea
              id="victoryMessage"
              required
              placeholder="Add a message..."
              className="textarea input border-gray grow rounded-[4px] border border-solid"
              {...register('victoryMessage')}
            />
          </InputBox>
          <InputBox>
            <label htmlFor="defeatMessage">Defeat</label>
            <textarea
              id="defeatMessage"
              required
              placeholder="Add a message..."
              className="textarea input border-gray grow rounded-[4px] border border-solid"
              {...register('defeatMessage')}
            />
          </InputBox>
        </Box>
      </form>

      <Toaster />
    </div>
  );
}

export default AddNewCardsQuest;
