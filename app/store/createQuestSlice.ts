'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type PagesSettings = 'mainSettings' | 'questions';
export type TaskType = 'quiz' | 'typeAnswer' | 'findObject';
export type AnswerOptions = 'singleSelect' | 'multiSelect';

type createQuestState = {
  taskId?: string;
  taskTitle: string;
  time: number;
  taskType: TaskType;
  settingPage: PagesSettings;
  imageTast: string;
  answerOptionTask: AnswerOptions;
  taskAnswers: [string, string, string?, string?] | string;

  questTitle: string;
  questId?: string;
  previewImageQuest: string;
  backgroundImageQuest: string;
};

const initialState: createQuestState = {
  settingPage: 'mainSettings',
  taskTitle: '',
  taskType: 'quiz',
  time: 0,
  imageTast: '',
  answerOptionTask: 'singleSelect',
  taskAnswers: '',

  backgroundImageQuest: '',
  previewImageQuest: '',
  questTitle: '',
};

const createQuestSlice = createSlice({
  name: 'createQuest',
  initialState,
  reducers: {
    setSettingPage(state, action: PayloadAction<PagesSettings>) {
      state.settingPage = action.payload;
    },
  },
});

export const { setSettingPage } = createQuestSlice.actions;

export const selectQuests = (state: RootState) => state.quests;

export default createQuestSlice.reducer;
