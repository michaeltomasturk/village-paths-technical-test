import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
  step: 0,
  loader: false,
  organization: null,
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
    getOrganization(state) {
      state.loader = true;
    },
    getOrganizationSuccess(state, action) {
      state.loader = false;
      state.organization = action.payload
    },
    getOrganizationFailure(state) {
      state.loader = false;
      state.organization = null;
    },
  },
});

export const {
  updateUser,
  changeStep,
  getOrganization,
  getOrganizationSuccess,
  getOrganizationFailure,
} = mainSlice.actions;
export default mainSlice.reducer;
