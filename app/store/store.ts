'use client';

import { configureStore } from '@reduxjs/toolkit';
import createQuestReducer from './createQuestSlice';
import createTaskReducer from './createTaskSlice';

const store = configureStore({
  reducer: {
    createQuest: createQuestReducer,
    createTask: createTaskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
