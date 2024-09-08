import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  longevity: 1,
  voice: 0,
  data: 0,
  fourg: 0,
  bioscope: 0,
  sms: 0,
  mca: 0,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    select: (state, action) => {
      const { planName, value } = action?.payload;
      state[planName] = value;
    },
  },
});

export const { select } = cartSlice.actions;

export default cartSlice.reducer;
