import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import messageReducer from "./slices/message"

export const store = configureStore({
  reducer: {
    user: userReducer,
    message : messageReducer
  },
});