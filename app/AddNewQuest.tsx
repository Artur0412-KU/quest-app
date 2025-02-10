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
import Select from './components/AddNewQuest/Select';

// import ButtonBox from './components/AddNewQuest/ButtonBox';
// import ButtonSmall from './components/Button/ButtonSmall';

// import CreateCardForm from './components/AddNewQuest/Card/CreateTermForm';
// import CardLine from './components/AddNewQuest/Card/Term';

export type PagesSettings = 'mainSettings' | 'questions';

type TaskTypeType = 'Quiz' | 'Type answer' | 'Find object in a pictures';

type TaskTypeDemo = {
  id: string;
  taskTitle: string;
  type: 'quiz' | 'typeAnswer' | 'findObject';
  time: number;
  answerOption: 'singleSelect' | 'multiSelect';
  image?: string;
  answerFirst: string;
  answerSecond: string;
  answerThird: string;
  answerFourth: string;
};

function AddNewQuest() {
  const [page, setPage] = useState<PagesSettings>('mainSettings');
  const [tasks, manageTasks] = useState<TaskType[]>([]);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [taskImage, setTaskImage] = useState<string>('');
  const [taskType, setTaskType] = useState<TaskTypeType>('Quiz');
  const {
    reset: resetGeneralSettings,
    register: registerGeneralSettings,
    handleSubmit: handleSubmitQuest,
  } = useForm<QuestType>();

  const {
    reset: resetTask,
    register: registerTask,
    handleSubmit: handleSubmitTask,
  } = useForm<TaskTypeDemo>();

  function handleSetPage(type: PagesSettings) {
    setPage(type);
  }

  function handleSetImageGeneralSettings(
    e: ChangeEvent<HTMLInputElement>,
    type: 'preview' | 'background',
  ) {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = e =>
        type === 'preview'
          ? setPreviewImage(e.target?.result as string)
          : setBackgroundImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  }
  function handleSetImageTask(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = e => setTaskImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  }

  function handleChangeSelect(e: ChangeEvent<HTMLSelectElement>) {
    setTaskType(e.target.value as TaskTypeType);
  }

  const onSubmitTask: SubmitHandler<TaskTypeDemo> = data => {
    const { taskTitle, time, type, answerOption, ...answers } = data;
    const newTask = {
      answerOption: taskType === 'Quiz' ? answerOption : '',
      taskImage,
      id: Math.random().toString(),
      taskTitle,
      time,
      type,
      answers: Object.values(answers),
    };
    resetTask();
    setTaskImage('');
    console.log(newTask);
    // manageTasks(prev => [...prev, newTask]);
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
          <Box className="col-[2/-1] row-[1/2] !gap-[48px]">
            <InputBox
              inputOrTextarea="input"
              register={{ ...registerTask('taskTitle') }}
            >
              Task
            </InputBox>

            <Box className="flex-row justify-between !p-[0px]">
              <Select
                handleSelect={handleChangeSelect}
                register={{ ...registerTask('type') }}
                title="Task type"
                options={['Quiz', 'Type answer', 'Find object in a pictures']}
              />
              <Select
                register={{ ...registerTask('time') }}
                title="Time limit"
                options={[
                  'No limit',
                  '10 seconds',
                  '30 seconds',
                  '60 seconds',
                  '90 seconds',
                ]}
              />
              {taskType === 'Quiz' ? (
                <Select
                  register={{ ...registerTask('answerOption') }}
                  title="Answer option"
                  options={['Single select', 'Multi-select']}
                />
              ) : (
                <div className="w-full"></div>
              )}
            </Box>

            <InputFileBox handleSetImage={handleSetImageTask} />

            <Box className={`!grid !grid-cols-2`}>
              <InputBox
                heading={taskType === 'Quiz' ? 'answer 1' : 'answer'}
                inputOrTextarea="input"
                register={{ ...registerTask('answerFirst') }}
              >
                Type here...
              </InputBox>
              {taskType === 'Quiz' && (
                <>
                  <InputBox
                    heading="answer 2"
                    inputOrTextarea="input"
                    register={{ ...registerTask('answerSecond') }}
                  >
                    Type here...
                  </InputBox>
                  <InputBox
                    heading="answer 3"
                    inputOrTextarea="input"
                    register={{ ...registerTask('answerThird') }}
                  >
                    Type here...
                  </InputBox>
                  <InputBox
                    heading="answer 4"
                    inputOrTextarea="input"
                    register={{ ...registerTask('answerFourth') }}
                  >
                    Type here...
                  </InputBox>
                </>
              )}
            </Box>
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
              <InputFileBox
                handleSetImage={handleSetImageGeneralSettings}
                type="preview"
              />
            </Box>

            <Box className="col-[2/-1] row-[4/5]">
              <Heading as="h2">Background image</Heading>
              <InputFileBox
                handleSetImage={handleSetImageGeneralSettings}
                type="background"
              />
            </Box>
          </>
        )}

        <Toaster />
      </div>
    </form>
  );
}

export default AddNewQuest;
