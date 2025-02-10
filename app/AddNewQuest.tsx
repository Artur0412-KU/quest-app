'use client';

import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import Heading from './components/AddNewQuest/Heading';
import Box from './components/AddNewQuest/Box';

import { QuestType, TaskType } from './store/questsSlice';
import InputBox from './components/AddNewQuest/InputBox';
import Navigation from './components/AddNewQuest/Navigation';
import InputFileBox from './components/AddNewQuest/InputFileBox';

// import ButtonBox from './components/AddNewQuest/ButtonBox';
// import ButtonSmall from './components/Button/ButtonSmall';

// import CreateCardForm from './components/AddNewQuest/Card/CreateTermForm';
// import CardLine from './components/AddNewQuest/Card/Term';

type Pages = 'mainSettings' | 'questions';

function AddNewQuest() {
  const [page, setPage] = useState<Pages>('mainSettings');
  const [tasks, manageTasks] = useState<TaskType[]>([]);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  const {
    reset: resetGeneralSettings,
    register: registerGeneralSettings,
    handleSubmit: handleSubmitQuest,
  } = useForm<QuestType>();

  const {
    reset: resetTask,
    register: registerTask,
    handleSubmit: handleSubmitTask,
  } = useForm<TaskType>();

  function handleSetPage(type: Pages) {
    setPage(type);
  }

  function handleSetImage(
    e: ChangeEvent<HTMLInputElement>,
    type: 'preview' | 'background',
  ) {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = e =>
        type === 'preview'
          ? setPreviewImage(e.target?.result as string)
          : setBackgroundImage(e.target?.result as string); // Конвертуємо в Base64
      reader.readAsDataURL(file);
    }
  }

  const onSubmitTask: SubmitHandler<TaskType> = data => {
    if (tasks.length === 0)
      return toast.error('You shoud have at least one term');
    const newQuest = { ...data, id: Math.random().toString() };
    resetTask();
    manageTasks([]);

    console.log(newQuest);
    toast.success('The task is created');
  };

  const onSubmitQuest: SubmitHandler<QuestType> = data => {
    if (tasks.length === 0)
      return toast.error('You shoud have at least one term');
    const newQuest = {
      ...data,
      tasks,
      id: Math.random().toString(),
      previewImage,
      backgroundImage,
    };
    resetGeneralSettings();
    manageTasks([]);

    console.log(newQuest);
    toast.success('The quest is created');
  };

  return (
    <form
      className=""
      onSubmit={
        page === 'mainSettings'
          ? handleSubmitQuest(onSubmitQuest)
          : handleSubmitTask(onSubmitTask)
      }
    >
      <div className="grid-rows-[repeat(4, fit-content)] grid grid-cols-4 gap-[24px] bg-stone-200">
        <Box className="col-[1/2] row-[1/2]">
          <Navigation page={page} handleSetPage={handleSetPage} />
        </Box>

        {page === 'questions' && (
          <Box className="col-[2/-1] row-[1/2]">
            <InputBox
              inputOrTextarea="input"
              register={{ ...registerTask('taskTitle') }}
            >
              Task
            </InputBox>

            <Heading as="h4">Victory</Heading>
            <Heading as="h4">Victory</Heading>
            <Heading as="h4">Victory</Heading>
          </Box>
        )}

        {page === 'mainSettings' && (
          <>
            <Box className="col-[2/-1] row-[1/2]">
              <InputBox
                heading="title"
                inputOrTextarea="input"
                register={{ ...registerGeneralSettings('title') }}
              >
                Enter a title, like “The Mystery of the Maya Civilization
              </InputBox>

              <Heading as="h2">Create a new quest</Heading>
              <InputBox
                heading="description"
                inputOrTextarea="textarea"
                register={{ ...registerGeneralSettings('description') }}
              >
                Add a description...
              </InputBox>
            </Box>

            <Box className="col-[2/-1] row-[3/4]">
              <Heading as="h2">Final Screen</Heading>
              <InputBox
                heading="victoryMessage"
                inputOrTextarea="textarea"
                register={{ ...registerGeneralSettings('victoryMessage') }}
              >
                Add a message..
              </InputBox>

              <InputBox
                heading="defeatMessage"
                inputOrTextarea="textarea"
                register={{ ...registerGeneralSettings('defeatMessage') }}
              >
                Add a message..
              </InputBox>
            </Box>

            <Box className="col-[2/-1] row-[2/3]">
              <Heading as="h2">Preview image</Heading>
              <InputFileBox handleSetImage={handleSetImage} type="preview" />
            </Box>

            <Box className="col-[2/-1] row-[4/5]">
              <Heading as="h2">Background image</Heading>
              <InputFileBox handleSetImage={handleSetImage} type="background" />
            </Box>
          </>
        )}

        <Toaster />
      </div>
    </form>
  );
}

export default AddNewQuest;
