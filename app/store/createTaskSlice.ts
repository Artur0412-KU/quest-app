'use client';

import { readFileAsDataURL } from '@/src/utils/services';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TaskType = 'quiz' | 'typeAnswer' | 'findObject';
export type AnswerOptions = 'singleSelect' | 'multiSelect';

export type CreateTask = {
  isLoading: boolean;
  error: string;
  title: string;
  time: number;
  image: string;
  type: TaskType;
  answers: { [key: string]: string };
  correctAnswers: { [key: string]: boolean };
};

const initialState: CreateTask = {
  isLoading: false,
  error: '',
  title: '',
  type: 'quiz',
  time: 0,
  image: '',
  answers: {},
  correctAnswers: {},
};

export const setImage = createAsyncThunk(
  'createTask/setImage',
  async function (file: File | undefined) {
    if (!file) return '';
    const image = await readFileAsDataURL(file);
    return image;
  },
);

const createTaskSlice = createSlice({
  name: 'createTask',
  initialState,
  reducers: {
    setTaskType(state, action: PayloadAction<TaskType>) {
      state.type = action.payload;
    },
    toggleAnswers(state, action: PayloadAction<string>) {
      state.correctAnswers[action.payload] =
        !state.correctAnswers[action.payload];
    },
    deleteImage(state) {
      state.image = '';
    },
    clear(state) {
      state.title = '';
      state.type = 'quiz';
      state.time = 0;
      state.image = '';
      state.answers = {};
      state.correctAnswers = {};
    },
  },
  extraReducers: builder =>
    builder
      .addCase(setImage.pending, state => {
        state.isLoading = true;
      })
      .addCase(setImage.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.image = action.payload;
      })
      .addCase(setImage.rejected, state => {
        state.error = 'The problem with uploading image. Try again!';
        state.isLoading = false;
      }),
});

export const { setTaskType, toggleAnswers, deleteImage, clear } =
  createTaskSlice.actions;

export default createTaskSlice.reducer;
