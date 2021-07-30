import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
  step: 0,
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateUser(state, action) {
      state.user = { ...state.user, ...action.payload };
    },
    changeStep(state, action) {
      state.step = action.payload
    },
  },
});

export const { updateUser, changeStep } = mainSlice.actions;
export default mainSlice.reducer;
