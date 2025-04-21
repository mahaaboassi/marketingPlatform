import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  msg : "",
  status : "",
  component : <> </>
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    message : (state, action) => {
      state.msg = action.payload.msg;
      state.status = action.payload.status;
      state.component = action.payload.component;
    },
  },
});

export const { message } = messageSlice.actions;
export default messageSlice.reducer;