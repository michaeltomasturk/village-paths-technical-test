import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateUser(state, action) {
      state = { ...state, ...action.payload };
    },
  },
});

export const { updateUser } = mainSlice.actions;
export default mainSlice.reducer;
