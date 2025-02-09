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

import { HiOutlinePuzzlePiece, HiOutlineCog8Tooth } from 'react-icons/hi2';
import InputOrTextarea from './components/AddNewQuest/InputOrTextarea';
import ButtonGhost from './components/Button/ButtonGhost';

export type CardType = { id: string; term: string; definition: string };

export type Inputs = {
  title: string;
  description: string;
  time: number;
  victoryMessage: string;
  defeatMessage: string;
};

function AddNewQuest() {
  const { reset, register, handleSubmit } = useForm<Inputs>();
  const [cards, manageCards] = useState<CardType[]>([]);
  const [page, setPage] = useState<'mainSettings' | 'questions'>(
    'mainSettings',
  );

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

  {
    /* {cards?.map(cardData => (
    <CardLine
      key={cardData.id}
      card={cardData}
      handleDelete={handleRemoveCard}
    />
  ))} */
  }
  {
    /* <CreateCardForm addCard={handleAddCard} /> */
  }
  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid-rows-[repeat(4, fit-content)] grid grid-cols-4 gap-[24px] bg-stone-200">
        <Box className="col-[1/2] row-[1/2]">
          <nav>
            <ButtonGhost
              onClick={() => setPage('mainSettings')}
              selected={page === 'mainSettings'}
            >
              <HiOutlineCog8Tooth size={24} />
              General Settings
            </ButtonGhost>
            <ButtonGhost
              onClick={() => setPage('questions')}
              selected={page === 'questions'}
            >
              <HiOutlinePuzzlePiece size={24} />
              Tasks
            </ButtonGhost>

            <button className="btn bg-brand mt-[64px] w-full px-[14px] py-[16px] text-white">
              Create a quest
            </button>
          </nav>
        </Box>

        {page === 'mainSettings' && (
          <>
            <Box className="col-[2/-1] row-[1/2]">
              <Heading as="h2">Create a new quest</Heading>
              <InputBox>
                <label htmlFor="title">
                  <Heading as="h4">Title</Heading>
                </label>
                <InputOrTextarea
                  id="title"
                  required
                  type="text"
                  inputOrTextarea="input"
                  placeholder="Enter a title, like “The Mystery of the Maya Civilization”"
                  {...register('title')}
                />
              </InputBox>
              <InputBox>
                <label htmlFor="description">
                  <Heading as="h4">Description</Heading>
                </label>
                <InputOrTextarea
                  id="description"
                  required
                  inputOrTextarea="textarea"
                  placeholder="Add a description..."
                  {...register('description')}
                />
              </InputBox>
            </Box>

            <Box className="col-[2/-1] row-[2/3]">
              <Heading as="h2">Total time limit</Heading>
              <ButtonBox>
                <ButtonSmall selected={true}>No limit</ButtonSmall>
                <ButtonSmall selected={false}>30 min</ButtonSmall>
                <ButtonSmall selected={false}>60 min</ButtonSmall>
                <ButtonSmall selected={false}>90 min</ButtonSmall>
                <ButtonSmall selected={false}>120 min</ButtonSmall>
              </ButtonBox>
            </Box>
            <Box className="col-[2/-1] row-[3/4]">
              <Heading as="h2">Final Screen</Heading>
              <InputBox>
                <label htmlFor="victoryMessage">
                  <Heading as="h4">Victory</Heading>
                </label>
                <InputOrTextarea
                  id="victoryMessage"
                  required
                  placeholder="Add a message..."
                  inputOrTextarea="textarea"
                  {...register('victoryMessage')}
                />
              </InputBox>
              <InputBox>
                <label htmlFor="defeatMessage">
                  <Heading as="h4">Defeat</Heading>
                </label>
                <InputOrTextarea
                  id="defeatMessage"
                  required
                  placeholder="Add a message..."
                  inputOrTextarea="textarea"
                  {...register('defeatMessage')}
                />
              </InputBox>
            </Box>
          </>
        )}

        <Toaster />
      </div>
    </form>
  );
}

export default AddNewQuest;
