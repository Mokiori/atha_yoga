import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {
    getUser: (state, action) => {
      console.log(action.payload.user);
    },
  },
});

export const { getUser } = profileSlice.actions;
export default profileSlice.reducer;
