'use client';

import { ChangeEvent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import Heading from './components/AddNewQuest/Heading';
import Box from './components/AddNewQuest/Box';
import InputBox from './components/AddNewQuest/InputBox';
import Navigation from './components/AddNewQuest/Navigation';
import InputFileBox from './components/AddNewQuest/InputFileBox';
import Select from './components/AddNewQuest/Select';
import { useAppDispatch, useAppSelector } from './store/hooks';
import {
  deleteImage as deleteImageTask,
  setImage as setImageTask,
  setTaskType,
  TaskType,
  toggleAnswers,
  clear as clearTask,
} from './store/createTaskSlice';
import {
  clear as clearQuest,
  QuestImageType,
  setImage as setImageQuest,
  deleteImage as deleteImageQuest,
  deleteTask,
  Task,
  addTask,
} from './store/createQuestSlice';
import { nanoid } from '@reduxjs/toolkit';
import ImagePreview from './components/AddNewQuest/ImagePreview';
import TaskPreview from './components/AddNewQuest/TaskPreview';
import ButtonBox from './components/AddNewQuest/ButtonBox';
import { addQuest } from './addQuest/action';

type SubmitQuestData = {
  defeatMessage: string;
  description: string;
  title: string;
  victoryMessage: string;
};

function AddNewQuest() {
  const dispatch = useAppDispatch();
  const { settingPage, tasks, previewImage, backgroundImage } = useAppSelector(
    store => store.createQuest,
  );

  const {
    image: taskImage,
    type: taskType,
    correctAnswers,
  } = useAppSelector(store => store.createTask);

  function handleSetImageTask(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    dispatch(setImageTask(file));
  }

  function handleSetImageQuest(
    e: ChangeEvent<HTMLInputElement>,
    type: QuestImageType,
  ) {
    const file = e.target.files?.[0];
    dispatch(setImageQuest({ file, type }));
  }

  function handleCheckTypeTask(e: ChangeEvent<HTMLSelectElement>) {
    dispatch(setTaskType(e.target.value as TaskType));
  }

  function handleToggleAnswer(name: string) {
    dispatch(toggleAnswers(name));
  }

  const {
    reset: resetGeneralSettings,
    register: registerGeneralSettings,
    handleSubmit: handleSubmitQuest,
  } = useForm<SubmitQuestData>();

  const {
    reset: resetTask,
    register: registerTask,
    handleSubmit: handleSubmitTask,
  } = useForm<Record<string, string>>();

  const onSubmitTask: SubmitHandler<Record<string, string>> = data => {
    if (Object.values(correctAnswers).filter(el => el === true).length === 0)
      return toast.error('You should have at least one correct answer');

    const {
      answerFirst,
      answerFourth,
      answerSecond,
      answerThird,
      taskTitle,
      time,
      type,
    } = data;

    const newTask: Task = {
      id: nanoid(),
      title: taskTitle,
      type: type as TaskType,
      image: taskImage,
      time: +time.split(' ').at(0)! || 0,
      answers: { answerFirst, answerFourth, answerSecond, answerThird },
      correctAnswers,
    };

    dispatch(addTask(newTask));
    dispatch(clearTask());
    resetTask();
    toast.success('The task is created');
  };

  const onSubmitQuest: SubmitHandler<SubmitQuestData> = async (data) => {
    if (tasks.length === 0)
      return toast.error('You should have at least one task');
  
    const newQuest = {
      id: nanoid(),
      ...data,
      author: 'Someone',
      tasks,
      previewImage,
      backgroundImage,
    };
  
    try {
      
      await addQuest(
        newQuest.title,
        newQuest.description,
        previewImage,
        backgroundImage ?? '',
        'quest', 
        tasks.map(task => ({
          id: Number(task.id), 
          name: task.title
        }))
      );
      
      // Очищаємо стан після успішного додавання
      dispatch(clearQuest());
      resetGeneralSettings();
      toast.success('The quest is created and added to the database');
    } catch (error) {
      toast.error('Failed to create quest');
    }
  };
  
  const submitFn =
    settingPage === 'questions'
      ? handleSubmitTask(onSubmitTask)
      : handleSubmitQuest(onSubmitQuest);

  return (
    <form onSubmit={submitFn}>
      <div className="grid-rows-[repeat(auto, fit-content)] grid grid-cols-4 gap-[24px] bg-stone-200">
        <Box className="col-[1/2] row-[1/2]">
          <Navigation />
        </Box>

        {settingPage === 'questions' && (
          <>
            <Box className="col-[2/-1] row-[1/2] !gap-[48px]">
              <InputBox
                inputOrTextarea="input"
                register={{ ...registerTask('taskTitle') }}
              >
                Task
              </InputBox>

              <Box className="!flex-row justify-between !p-[0px]">
                <Select
                  handleSelect={handleCheckTypeTask}
                  register={{ ...registerTask('type') }}
                  title="Task type"
                  defaultValue={taskType}
                  options={['quiz', 'Type answer', 'Find object in a pictures']}
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
              </Box>

              {taskImage ? (
                <ImagePreview
                  imageSrc={taskImage}
                  imageAlt="preview image for task"
                  handleDelete={() => dispatch(deleteImageTask())}
                />
              ) : (
                <InputFileBox handleSetImage={handleSetImageTask} />
              )}

              <Box className="!grid !grid-cols-2">
                <InputBox
                  heading={`answer ${taskType === 'quiz' ? '1' : ''}`}
                  inputOrTextarea="input"
                  register={{ ...registerTask('answerFirst') }}
                  className={taskType !== 'quiz' ? 'col-span-full' : ''}
                  toggleAnswer={handleToggleAnswer}
                >
                  Type here...
                </InputBox>
                {taskType === 'quiz' && (
                  <>
                    <InputBox
                      heading="answer 2"
                      inputOrTextarea="input"
                      register={{ ...registerTask('answerSecond') }}
                      toggleAnswer={handleToggleAnswer}
                    >
                      Type here...
                    </InputBox>
                    <InputBox
                      heading="answer 3"
                      inputOrTextarea="input"
                      register={{ ...registerTask('answerThird') }}
                      toggleAnswer={handleToggleAnswer}
                      required={false}
                    >
                      Type here...
                    </InputBox>
                    <InputBox
                      heading="answer 4"
                      inputOrTextarea="input"
                      register={{ ...registerTask('answerFourth') }}
                      toggleAnswer={handleToggleAnswer}
                      required={false}
                    >
                      Type here...
                    </InputBox>
                  </>
                )}
                <ButtonBox className="col-[2/3] w-full justify-end">
                  <button
                    className="btn h-[48px] w-[160px] border-inherit bg-[#7BAAAF] text-white"
                    type="button"
                    onClick={() => {
                      dispatch(clearTask());
                      resetTask();
                    }}
                  >
                    Reset
                  </button>
                  <button
                    className="btn h-[48px] w-[160px] border-inherit bg-[#7BAAAF] text-white"
                    type="submit"
                  >
                    Add
                  </button>
                </ButtonBox>
              </Box>
            </Box>
            {tasks.map(task => (
              <TaskPreview
                key={task.id}
                handleDelete={() => dispatch(deleteTask(task.id.toString()))}
                title={task.title}
                className="col-[2/-1]"
              />
            ))}
          </>
        )}

        {settingPage === 'mainSettings' && (
          <>
            <Box className="col-[2/-1] row-[1/2]">
              <Heading as="h2">Create a new quest</Heading>
              <InputBox
                heading="title"
                inputOrTextarea="input"
                register={{ ...registerGeneralSettings('title') }}
              >
                Enter a title, like “The Mystery of the Maya Civilization”
              </InputBox>

              <InputBox
                heading="description"
                inputOrTextarea="textarea"
                register={{ ...registerGeneralSettings('description') }}
              >
                Add a description...
              </InputBox>
            </Box>

            <Box className="col-[2/-1] row-[2/3]">
              <Heading as="h2">Preview image</Heading>
              {previewImage ? (
                <ImagePreview
                  imageSrc={previewImage}
                  imageAlt="preview image for quest"
                  handleDelete={() => dispatch(deleteImageQuest('preview'))}
                />
              ) : (
                <InputFileBox
                  handleSetImage={handleSetImageQuest}
                  type="previewImage"
                />
              )}
            </Box>

            <Box className="col-[2/-1] row-[3/4]">
              <Heading as="h2">Background image</Heading>

              {backgroundImage ? (
                <ImagePreview
                  imageSrc={backgroundImage}
                  imageAlt="preview image for background"
                  handleDelete={() => dispatch(deleteImageQuest('background'))}
                />
              ) : (
                <InputFileBox
                  handleSetImage={handleSetImageQuest}
                  type="backgroundImage"
                  required={false}
                />
              )}
            </Box>
          </>
        )}

        <Toaster />
      </div>
    </form>
  )
}
export default AddNewQuest