
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {}, // This will store the registration form data
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = {};
    },
  },
});

export const { registerUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
