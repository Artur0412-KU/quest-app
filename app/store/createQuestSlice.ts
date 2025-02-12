'use client';

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CreateTask, TaskType } from './createTaskSlice';
import { readFileAsDataURL } from '@/src/utils/services';

export type PagesSettings = 'mainSettings' | 'questions';
export type QuestImageType = 'previewImage' | 'backgroundImage';

export type Quest = {
  title: string;
  description: string;
  victoryMessage: string;
  defeatMessage: string;

  author: string;
  tasks: CreateTask[];
};

export type Task = {
  id: string;
  title: string;
  type: TaskType;
  time: number;
  image: string;
  answers: { [key: string]: string };
  correctAnswers: { [key: string]: boolean };
};

export type createQuestState = {
  settingPage: PagesSettings;

  isLoading: boolean;
  error: string;

  backgroundImage?: string;
  previewImage: string;

  title: string;
  description: string;

  author: string;
  tasks: Task[];
};

const initialState: createQuestState = {
  settingPage: 'mainSettings',
  isLoading: false,
  error: '',
  previewImage: '',
  backgroundImage: '',

  author: '',

  title: '',
  description: '',
  tasks: [],
};

export const setImage = createAsyncThunk(
  'createTask/setImage',
  async function ({
    file,
    type,
  }: {
    file: File | undefined;
    type: QuestImageType;
  }) {
    if (!file) return { image: '', type };
    const image = await readFileAsDataURL(file);
    return { image, type };
  },
);

const createQuestSlice = createSlice({
  name: 'quests',
  initialState,
  reducers: {
    setSettingPage(state, action: PayloadAction<PagesSettings>) {
      state.settingPage = action.payload;
    },
    clear(state) {
      state.title = '';
      state.description = '';
      state.author = '';
      state.tasks = [];
      state.previewImage = '';
      state.backgroundImage = '';
    },
    deleteImage(state, action: PayloadAction<'preview' | 'background'>) {
      state[`${action.payload}Image`] = '';
    },
    deleteTask(state, action: PayloadAction<string>) {
      const deletedTask = state.tasks.findIndex(el => el.id === action.payload);
      state.tasks.splice(deletedTask, 1);
    },
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
  },

  extraReducers: builder =>
    builder
      .addCase(setImage.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        setImage.fulfilled,
        (
          state,
          action: PayloadAction<{ type: QuestImageType; image: string }>,
        ) => {
          state.isLoading = false;
          state[action.payload.type] = action.payload.image;
        },
      )
      .addCase(setImage.rejected, state => {
        state.error = 'The problem with uploading image. Try again!';
        state.isLoading = false;
      }),
});

export const { setSettingPage, clear, deleteImage, deleteTask, addTask } =
  createQuestSlice.actions;

export default createQuestSlice.reducer;
