import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen : false,
  msg : "",
  status : "", // error || warning || success
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    message : (state, action) => {
      state.isOpen = action.payload.isOpen,
      state.msg = action.payload.msg;
      state.status = action.payload.status;
    },
  },
});

export const { message } = messageSlice.actions;
export default messageSlice.reducer;