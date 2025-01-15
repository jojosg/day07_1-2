import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: 'hotpink',
};

export const changeColorSlice = createSlice({
  name: 'changeColor',
  initialState,
  reducers: {
    colorChange: (state, action) => {
      //action.payload -> 값을 받아오기
      state.color = action.payload;
    },
  },
});
export const { colorChange } = changeColorSlice.actions;
export default changeColorSlice.reducer;
