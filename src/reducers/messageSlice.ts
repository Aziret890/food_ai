import { createSlice } from "@reduxjs/toolkit";

export interface navSliceStateType {
  show: boolean;
}

const messageSlice = createSlice({
  name: "assistant",
  initialState: {
    openAssistant: true,
  },
  reducers: {
    openAssistant: (state, action) => {
      state.openAssistant = action.payload;
    },
  },
});

export const { openAssistant } = messageSlice.actions;
export default messageSlice.reducer;
