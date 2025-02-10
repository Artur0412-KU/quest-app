'use client';

import { configureStore } from '@reduxjs/toolkit';
import questsReducer from './questsSlice';
import createQuestsReducer from './createQuestSlice';

const store = configureStore({
  reducer: {
    createQuest: createQuestsReducer,
    quests: questsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
