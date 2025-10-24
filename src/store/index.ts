import { configureStore } from '@reduxjs/toolkit';
import { blogReducer } from './blogSlice';  // Correct named import!

export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
